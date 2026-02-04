/**
 * 🤖 COMPONENTE PRINCIPAL: ChatWindow
 * 
 * Este es el contenedor principal del chat inteligente.
 * Maneja toda la lógica de conversación con el backend.
 */

import { useState, useEffect, useRef } from "react";
import ChatMessage from "./chatMessage";
import ChatInput from "./ChatInput";
import LeadForm from "./LeadForm";
import { sendMessage, deleteSession } from "../../services/api";
import { log, sanitizeHtml, isValidSessionId } from "../../utils/security";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export default function ChatWindow() {
    //ESTADO
    const [messages, setMessages] = useState([]);
    const [sessionId, setSessionId] = useState(null);
    const [isTyping, setIsTyping] = useState(false);
    const [error, setErrors] = useState(null);
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el chat

    // referencia al div del chat para scroll automativo
    const messagesEndRef = useRef(null);

    // Scroll al final cuando hay nuevos mensajes
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    };

    //useEffect para el scroll
    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    //useEffect para iniciar la conversacion de bienvenida
    useEffect(() => {
        setMessages([
            {
                id: 'Welcome',
                message: '¡Hola! 👋 Soy **Stiven Felix**, desarrollador Full-Stack.\n\nEstoy aquí para contarte sobre mi experiencia, proyectos y habilidades.\n\n¿En qué puedo ayudarte? 😊',
                isUser: false,
                timestamp: new Date().toISOString()
            }
        ]);
    }, []);

    // Funcion para enviar Mensajes
    const handleSendMessage = async (message) => {
        // Agregar mensaje del usuario al chat
        const messageUser = {
            id: Date.now(),
            message: message,
            isUser: true,
            timestamp: new Date().toISOString()
        };

        // Actualizar el estado con el mensaje del usuario
        setMessages((prevMessage) => [...prevMessage, messageUser]);

        //Indicar que el agente esta escribiendo
        setIsTyping(true);
        setErrors(null);

        try {
            //Llamar al backend
            const response = await sendMessage(message, sessionId);

            //Actualizar el ID de la sesion (validando que sea un UUID válido)
            if (!sessionId && response.session_id) {
                if (isValidSessionId(response.session_id)) {
                    setSessionId(response.session_id);
                    log('✅ Session ID válido recibido');
                } else {
                    log('⚠️ Session ID inválido recibido del backend');
                }
            }

            //Actualizar el mensaje del agente
            //Dectectar si el mensaje o el agente quiere mostrar el formulario
            let agentMessage = response.respuesta;

            if (response.respuesta.includes('[MOSTRAR_FORMULARIO]')) {
                setShowLeadForm(true);
                agentMessage = agentMessage.replace('[MOSTRAR_FORMULARIO]', '').trim();
            }

            //Agregar el mensaje del agente al chat
            const messageAgent = {
                id: Date.now() + 1,
                message: agentMessage,
                isUser: false,
                timestamp: new Date().toISOString()
            }

            setMessages((prevMessages) => [...prevMessages, messageAgent]);

        } catch (error) {
            // El error ya viene con mensaje amigable desde api.js
            setErrors(error.message || "Error al enviar mensaje, por favor intenta de nuevo mas tarde.");

            //mostrar mensaje de error al usuario en el chat
            setMessages((prevMessage) => [...prevMessage, {
                id: Date.now() + 2,
                message: '❌ Lo siento, hubo un error. Por favor, intenta de nuevo.',
                isUser: false,
                timestamp: new Date().toISOString()
            }]);
        } finally {
            setIsTyping(false);
        }
    }

    //Funcion para manejar el envio del formulario
    const handleFormSubmit = async (formData) => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/leads`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Erro al enviar el formulario')
            }
            //cerrar el formulario
            setShowLeadForm(false);
            //Agregar mensaje de exito (sanitizando el nombre para prevenir XSS)
            const nombreSeguro = sanitizeHtml(formData.nombre);
            setMessages(prevMessages => [...prevMessages, {
                id: Date.now(),
                message: `✅ ¡Gracias ${nombreSeguro}! 🎉 Tu mensaje ha sido enviado. Stiven Felix se pondrá en contacto contigo lo antes posible.`,
                isUser: false,
                timestamp: new Date().toISOString()
            }])
        } catch (error) {
            console.error("Error al enviar el formulario", error);
            throw error;
        }
    }

    // Funcion para limpiar la sesion
    const clearSesion = async () => {
        if (!sessionId) return;
        try {
            await deleteSession(sessionId);
            setSessionId(null);
            setMessages([{
                id: 'Welcome',
                message: '¡Hola! 👋 Soy **Stiven Felix**, desarrollador Full-Stack.\n\nEstoy aquí para contarte sobre mi experiencia, proyectos y habilidades.\n\n¿En qué puedo ayudarte? 😊',
                isUser: false,
                timestamp: new Date().toISOString()
            }])
        } catch (error) {
            console.error("Error al limpiar la sesion", error)
        }
    }

    return (
        <>
            {/* 
                🎯 BOTÓN FLOTANTE
                - fixed: Posición fija que se mueve con el scroll
                - bottom-6 right-6: 24px desde abajo y derecha (esquina inferior derecha)
                - z-50: Z-index alto para estar sobre todo
                - Gradiente cyan a magenta (colores del portfolio)
                - shadow-2xl: Sombra grande para efecto flotante
                - hover:scale-110: Crece 10% al pasar el mouse (feedback visual)
                - transition-transform: Animación suave
            */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-cyan via-magenta to-magenta 
                           rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 
                           flex items-center justify-center text-3xl animate-pulse hover:animate-none"
                title={isOpen ? "Cerrar chat" : "Abrir chat con Stiven Felix"}
            >
                {isOpen ? '✕' : '💬'}
            </button>

            {/* 
                🪟 VENTANA DEL CHAT
                - fixed: Posición fija
                - bottom-24 right-6: Posicionado arriba del botón flotante
                - w-96: Ancho de 384px (24rem)
                - h-[600px]: Alto de 600px
                - bg-gray-900/95: Fondo oscuro con 95% opacidad (glassmorphism)
                - backdrop-blur-xl: Efecto de desenfoque del fondo (glassmorphism)
                - rounded-2xl: Bordes muy redondeados (8px)
                - shadow-2xl: Sombra grande
                - border-2 border-cyan/30: Borde cyan con 30% opacidad (sutil)
                - transform transition-all: Animaciones suaves
                - ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}: Animación de entrada/salida
            */}
            <div className={`fixed bottom-24 right-6 w-96 h-[600px] bg-gray-900/95 backdrop-blur-xl 
                            rounded-2xl shadow-2xl border-2 border-cyan/30 flex flex-col overflow-hidden
                            transform transition-all duration-300 z-40
                            ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>

                {/* 
                    📋 HEADER
                    - bg-gradient-to-r: Gradiente horizontal
                    - from-cyan to-magenta: De cyan a magenta (colores del portfolio)
                    - p-4: Padding de 16px
                    - flex justify-between: Flexbox con espacio entre elementos
                */}
                <div className="bg-gradient-to-r from-cyan to-magenta p-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🤖</span>
                        <div>
                            <h1 className="text-white font-bold text-lg">Stiven Felix AI</h1>
                            <p className="text-white/80 text-xs">Desarrollador Full-Stack</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {/* 
                            🔘 BOTONES DEL HEADER
                            - bg-white/20: Fondo blanco con 20% opacidad
                            - hover:bg-white/30: Al hover, 30% opacidad
                            - backdrop-blur-sm: Desenfoque sutil
                            - rounded-lg: Bordes redondeados
                            - p-2: Padding de 8px
                            - transition-colors: Animación suave de colores
                        */}
                        <button
                            onClick={() => setShowLeadForm(true)}
                            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-2 
                                     transition-colors duration-200 text-white text-sm"
                            title="Solicitar contacto"
                        >
                            📋
                        </button>
                        <button
                            onClick={clearSesion}
                            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-2 
                                     transition-colors duration-200 text-white text-sm"
                            title="Limpiar conversación"
                        >
                            🗑️
                        </button>
                    </div>
                </div>

                {/* 
                    💬 ÁREA DE MENSAJES
                    - flex-1: Ocupa todo el espacio disponible
                    - overflow-y-auto: Scroll vertical cuando hay muchos mensajes
                    - p-4: Padding de 16px
                    - space-y-4: Espacio vertical de 16px entre mensajes
                    - Custom scrollbar: Scrollbar estilizado con Tailwind
                */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 
                               scrollbar-thin scrollbar-thumb-cyan/50 scrollbar-track-gray-800">
                    {messages.map((msg) => (
                        <ChatMessage
                            key={msg.id}
                            message={msg.message}
                            isUser={msg.isUser}
                            timestamp={msg.timestamp}
                        />
                    ))}

                    {/* 
                        ⏳ TYPING INDICATOR (3 puntos animados)
                        - flex gap-1: Flexbox con espacio de 4px entre puntos
                        - bg-gray-800: Fondo gris oscuro
                        - rounded-2xl: Bordes muy redondeados
                        - p-4: Padding de 16px
                        - w-fit: Ancho ajustado al contenido
                        - animate-bounce: Animación de rebote (cada punto con delay diferente)
                    */}
                    {isTyping && (
                        <div className="flex gap-1 bg-gray-800 rounded-2xl p-4 w-fit">
                            <span className="w-2 h-2 bg-cyan rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                            <span className="w-2 h-2 bg-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* 
                    ⚠️ MENSAJE DE ERROR
                    - bg-red-500/20: Fondo rojo con 20% opacidad
                    - border-l-4 border-red-500: Borde izquierdo rojo de 4px
                    - text-red-200: Texto rojo claro
                */}
                {error && (
                    <div className="mx-4 mb-2 p-3 bg-red-500/20 border-l-4 border-red-500 text-red-200 text-sm rounded">
                        {error}
                    </div>
                )}

                {/* 
                    ⌨️ INPUT AREA
                    - p-4: Padding de 16px
                    - bg-gray-800/50: Fondo gris oscuro con 50% opacidad
                    - border-t border-cyan/20: Borde superior cyan con 20% opacidad
                */}
                <div className="p-4 bg-gray-800/50 border-t border-cyan/20">
                    <ChatInput
                        onSendMessage={handleSendMessage}
                        disabled={isTyping}
                    />
                </div>

                {/* 
                    📋 FORMULARIO DE LEADS (Modal)
                    - absolute inset-0: Cubre toda la ventana del chat
                    - bg-black/80: Fondo negro con 80% opacidad (overlay)
                    - backdrop-blur-sm: Desenfoque del fondo
                    - z-10: Z-index para estar sobre los mensajes
                */}
                {showLeadForm && (
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10 flex items-center justify-center p-4">
                        <LeadForm
                            onSubmit={handleFormSubmit}
                            onClose={() => setShowLeadForm(false)}
                        />
                    </div>
                )}
            </div>
        </>
    )
}
