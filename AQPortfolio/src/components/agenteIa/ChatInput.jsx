/**
 * ⌨️ COMPONENTE: ChatInput
 * 
 * Input para que el usuario escriba mensajes.
 * Incluye botón de envío y manejo de Enter.
 */

import { useState } from "react";

export default function ChatInput({ onSendMessage, disabled }) {
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validar que el mensaje no venga vacio
        if (!message.trim() || disabled) return;

        // Llamar a onSendMessage callback con el mensaje
        onSendMessage(message);

        // Limpiar el input
        setMessage("");
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        /* 
            📝 FORMULARIO DE INPUT
            - flex gap-2: Flexbox horizontal con espacio de 8px
            - items-center: Alinear verticalmente al centro
        */
        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
            {/* 
                ✏️ INPUT DE TEXTO
                - flex-1: Ocupa todo el espacio disponible
                - bg-gray-800: Fondo gris oscuro
                - text-white: Texto blanco
                - rounded-xl: Bordes redondeados
                - px-4 py-3: Padding horizontal 16px, vertical 12px
                - border-2: Borde de 2px
                - border-cyan/30: Borde cyan con 30% opacidad
                - focus:border-cyan: Al hacer focus, borde cyan completo
                - focus:outline-none: Sin outline por defecto del navegador
                - transition-colors: Animación suave de colores
                - placeholder-gray-500: Color del placeholder
                - disabled:opacity-50: 50% opacidad cuando está deshabilitado
                - disabled:cursor-not-allowed: Cursor de "no permitido" cuando está deshabilitado
            */}
            <input
                type="text"
                placeholder="Escribe tu mensaje..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                disabled={disabled}
                autoFocus
                className="flex-1 bg-gray-900 text-cyan rounded-xl px-4 py-3 
                         border-2 border-cyan/30 focus:border-cyan focus:outline-none 
                         transition-colors duration-200 placeholder-gray-400
                         disabled:opacity-50 disabled:cursor-not-allowed"
            />

            {/* 
                🚀 BOTÓN DE ENVIAR
                - bg-gradient-to-r from-cyan to-magenta: Gradiente horizontal de cyan a magenta
                - text-white: Texto blanco
                - rounded-xl: Bordes redondeados
                - px-6 py-3: Padding horizontal 24px, vertical 12px
                - font-semibold: Texto semi-negrita
                - hover:scale-105: Crece 5% al pasar el mouse
                - active:scale-95: Se reduce 5% al hacer click (feedback táctil)
                - transition-transform: Animación suave de transformación
                - disabled:opacity-50: 50% opacidad cuando está deshabilitado
                - disabled:cursor-not-allowed: Cursor de "no permitido"
                - disabled:hover:scale-100: No crece cuando está deshabilitado
            */}
            <button
                type="submit"
                disabled={disabled || !message.trim()}
                className="bg-gradient-to-r from-cyan to-magenta text-white rounded-xl px-6 py-3 
                         font-semibold hover:scale-105 active:scale-95 transition-transform duration-200
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                         shadow-lg hover:shadow-cyan/50"
            >
                {disabled ? '⏳' : '→'}
            </button>
        </form>
    )
}