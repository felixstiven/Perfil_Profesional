/**
 * 🛡️ UTILIDADES DE SEGURIDAD
 * 
 * Este archivo contiene funciones de seguridad para proteger
 * la aplicación de vulnerabilidades comunes.
 */

/**
 * 🔍 Logging Condicional
 * 
 * Solo muestra logs en desarrollo, no en producción.
 * Esto evita exponer información sensible.
 * 
 * @param {...any} args - Argumentos a loggear
 */
export const log = (...args) => {
    if (import.meta.env.DEV) {
        console.log(...args);
    }
};

export const logError = (...args) => {
    if (import.meta.env.DEV) {
        console.error(...args);
    }
};

/**
 * 🧹 Sanitizar HTML
 * 
 * Escapa caracteres HTML para prevenir XSS (Cross-Site Scripting).
 * Convierte caracteres especiales en entidades HTML.
 * 
 * Ejemplo:
 * sanitizeHtml("<script>alert('XSS')</script>")
 * // Retorna: "&lt;script&gt;alert('XSS')&lt;/script&gt;"
 * 
 * @param {string} text - Texto a sanitizar
 * @returns {string} Texto sanitizado
 */
export const sanitizeHtml = (text) => {
    if (!text) return '';

    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
};

/**
 * ✅ Validar Session ID
 * 
 * Verifica que el session_id sea un UUID válido.
 * Esto previene inyección de código malicioso.
 * 
 * Formato UUID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 * 
 * @param {string} id - Session ID a validar
 * @returns {boolean} true si es válido, false si no
 */
export const isValidSessionId = (id) => {
    if (!id || typeof id !== 'string') return false;

    // Regex para UUID v4
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(id);
};

/**
 * 🚨 Manejar Errores de API
 * 
 * Convierte errores técnicos en mensajes amigables para el usuario.
 * En producción, NO expone detalles técnicos.
 * 
 * @param {Error} error - Error capturado
 * @returns {string} Mensaje amigable para el usuario
 */
export const handleApiError = (error) => {
    // En desarrollo, mostrar error completo
    if (import.meta.env.DEV) {
        console.error('🔴 Error completo:', error);
        console.error('📋 Stack trace:', error.stack);
    }

    // Mensajes amigables según el tipo de error
    if (error.name === 'AbortError') {
        return 'La petición tardó demasiado. Por favor, intenta de nuevo.';
    }

    if (error.message.includes('Failed to fetch')) {
        return 'No se pudo conectar con el servidor. Verifica tu conexión a internet.';
    }

    if (error.message.includes('500')) {
        return 'Error del servidor. Por favor, intenta de nuevo más tarde.';
    }

    if (error.message.includes('404')) {
        return 'Recurso no encontrado. Por favor, contacta al administrador.';
    }

    if (error.message.includes('401') || error.message.includes('403')) {
        return 'No tienes permisos para realizar esta acción.';
    }

    // Mensaje genérico para errores desconocidos
    return 'Ocurrió un error inesperado. Por favor, intenta de nuevo.';
};

/**
 * ✂️ Limitar Longitud de Texto
 * 
 * Previene ataques de buffer overflow y spam.
 * 
 * @param {string} text - Texto a limitar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} Texto limitado
 */
export const limitLength = (text, maxLength) => {
    if (!text) return '';
    return text.slice(0, maxLength);
};

/**
 * 📧 Validar Email
 * 
 * Valida formato de email de forma más estricta.
 * 
 * @param {string} email - Email a validar
 * @returns {boolean} true si es válido
 */
export const isValidEmail = (email) => {
    if (!email || typeof email !== 'string') return false;

    // Regex más estricto para emails
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    // Validaciones adicionales
    if (email.length > 254) return false; // Longitud máxima RFC 5321
    if (email.split('@').length !== 2) return false; // Solo un @

    return emailRegex.test(email);
};

/**
 * 📱 Validar Teléfono
 * 
 * Valida que el teléfono solo contenga números y tenga 10 dígitos.
 * 
 * @param {string} phone - Teléfono a validar
 * @returns {boolean} true si es válido
 */
export const isValidPhone = (phone) => {
    if (!phone || typeof phone !== 'string') return false;

    // Solo números, 10 dígitos
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
};

/**
 * 👤 Validar Nombre
 * 
 * Valida que el nombre solo contenga letras, espacios, guiones y apóstrofes.
 * Previene inyección de código.
 * 
 * @param {string} name - Nombre a validar
 * @returns {object} { valid: boolean, error: string|null }
 */
export const validateName = (name) => {
    if (!name || typeof name !== 'string') {
        return { valid: false, error: 'El nombre es requerido' };
    }

    const trimmed = name.trim();

    // Longitud
    if (trimmed.length < 2) {
        return { valid: false, error: 'El nombre debe tener al menos 2 caracteres' };
    }

    if (trimmed.length > 50) {
        return { valid: false, error: 'El nombre no puede tener más de 50 caracteres' };
    }

    // Solo letras (incluyendo acentos), espacios, guiones y apóstrofes
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;
    if (!nameRegex.test(trimmed)) {
        return { valid: false, error: 'El nombre solo puede contener letras, espacios, guiones y apóstrofes' };
    }

    return { valid: true, error: null };
};

/**
 * 🏢 Validar Nombre de Empresa
 * 
 * Similar a validar nombre, pero permite números y algunos caracteres especiales.
 * 
 * @param {string} company - Nombre de empresa a validar
 * @returns {object} { valid: boolean, error: string|null }
 */
export const validateCompany = (company) => {
    if (!company || typeof company !== 'string') {
        return { valid: false, error: 'El nombre de la empresa es requerido' };
    }

    const trimmed = company.trim();

    // Longitud
    if (trimmed.length < 2) {
        return { valid: false, error: 'El nombre de la empresa debe tener al menos 2 caracteres' };
    }

    if (trimmed.length > 100) {
        return { valid: false, error: 'El nombre de la empresa no puede tener más de 100 caracteres' };
    }

    // Letras, números, espacios y algunos caracteres especiales comunes en nombres de empresas
    const companyRegex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\s.,'&()-]+$/;
    if (!companyRegex.test(trimmed)) {
        return { valid: false, error: 'El nombre de la empresa contiene caracteres no permitidos' };
    }

    return { valid: true, error: null };
};

/**
 * 💬 Validar Mensaje
 * 
 * Valida longitud del mensaje y previene spam.
 * 
 * @param {string} message - Mensaje a validar
 * @returns {object} { valid: boolean, error: string|null }
 */
export const validateMessage = (message) => {
    if (!message || typeof message !== 'string') {
        return { valid: false, error: 'El mensaje es requerido' };
    }

    const trimmed = message.trim();

    // Longitud
    if (trimmed.length < 10) {
        return { valid: false, error: 'El mensaje debe tener al menos 10 caracteres' };
    }

    if (trimmed.length > 1000) {
        return { valid: false, error: 'El mensaje no puede tener más de 1000 caracteres' };
    }

    return { valid: true, error: null };
};
