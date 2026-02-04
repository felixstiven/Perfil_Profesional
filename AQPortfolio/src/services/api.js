/**
 * 🔒 SERVICIO API - Comunicación Segura con el Backend
 * 
 * Este archivo centraliza TODAS las llamadas al backend FastAPI.
 * Incluye medidas de seguridad para producción.
 */

import { log, logError, handleApiError } from '../utils/security';

// URL base del backend (configurable por entorno)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

// Timeout para peticiones (30 segundos)
const REQUEST_TIMEOUT = 30000;

/**
 * 💬 Enviar Mensaje al Chat
 * 
 * Envía un mensaje al agente y recibe la respuesta.
 * Incluye timeout y manejo de errores seguro.
 * 
 * @param {string} message - El mensaje del usuario
 * @param {string|null} sessionId - ID de sesión (null para nueva sesión)
 * @returns {Promise<Object>} Respuesta del agente
 * 
 * @example
 * const response = await sendMessage("Hola", null);
 * console.log(response.respuesta); // "¡Hola! ..."
 */
export async function sendMessage(message, sessionId = null) {
    // Controller para timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

    try {
        log('📤 Enviando mensaje al backend');

        const response = await fetch(`${API_BASE_URL}/api/chat/message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mensaje: message,
                session_id: sessionId,
            }),
            signal: controller.signal  // ✅ Timeout
        });

        clearTimeout(timeoutId);

        // Validar respuesta
        if (!response.ok) {
            throw new Error(`Error al enviar mensaje: ${response.status}`);
        }

        // Parsear y retornar la respuesta
        const data = await response.json();
        log('✅ Respuesta recibida del backend');

        return data;

    } catch (error) {
        clearTimeout(timeoutId);

        // Logging seguro (solo en desarrollo)
        logError('❌ Error en sendMessage:', error.message);

        // Lanzar error con mensaje amigable
        throw new Error(handleApiError(error));
    }
}

/**
 * 🗑️ Limpiar Sesión
 * 
 * Elimina el historial de una sesión del backend.
 * 
 * @param {string} sessionId - ID de la sesión
 * @returns {Promise<Object>} Confirmación
 * 
 * @example
 * await deleteSession("abc-123");
 */
export async function deleteSession(sessionId) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

    try {
        log('🗑️ Limpiando sesión:', sessionId);

        const response = await fetch(`${API_BASE_URL}/api/chat/clear/${sessionId}`, {
            method: 'DELETE',
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`Error al limpiar sesión: ${response.status}`);
        }

        log('✅ Sesión limpiada exitosamente');
        return await response.json();

    } catch (error) {
        clearTimeout(timeoutId);

        logError('❌ Error en deleteSession:', error.message);
        throw new Error(handleApiError(error));
    }
}
