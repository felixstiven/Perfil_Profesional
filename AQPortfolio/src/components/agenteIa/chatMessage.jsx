/**
 * 💬 COMPONENTE: ChatMessage
 * 
 * Muestra un mensaje individual en el chat.
 * Puede ser del usuario o del agente.
 */

import ReactMarkdown from 'react-markdown';

export default function ChatMessage({ message, isUser, timestamp }) {
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
            <div className={`max-w-[80%] ${isUser ? 'order-2' : 'order-1'}`}>
                {/* 
                    👤 AVATAR Y NOMBRE
                    - flex items-center gap-2: Flexbox horizontal con espacio de 8px
                    - mb-1: Margen inferior de 4px
                    - text-xs: Texto pequeño (12px)
                    - font-semibold: Texto semi-negrita
                */}
                <div className={`flex items-center gap-2 mb-1 ${isUser ? 'justify-end' : 'justify-start'}`}>
                    {!isUser && <span className="text-lg">🤖</span>}
                    <span className={`text-xs font-semibold ${isUser ? 'text-cyan' : 'text-magenta'}`}>
                        {isUser ? 'Tú' : 'Stiven Felix AI'}
                    </span>
                    {isUser && <span className="text-lg">👤</span>}
                </div>

                {/* 
                    💭 BURBUJA DEL MENSAJE
                    - rounded-2xl: Bordes muy redondeados
                    - p-3: Padding de 12px
                    - shadow-lg: Sombra grande
                    - Usuario: Gradiente cyan a azul, texto blanco
                    - Agente: Fondo gris oscuro, borde magenta, texto blanco
                */}
                <div className={`rounded-2xl p-3 shadow-lg ${isUser
                        ? 'bg-gradient-to-br from-cyan to-blue-500 text-white'
                        : 'bg-gray-800 border border-magenta/30 text-white'
                    }`}>
                    {/* 
                        📝 CONTENIDO DEL MENSAJE
                        - Si es usuario: texto plano
                        - Si es agente: renderizar markdown con estilos personalizados
                    */}
                    {isUser ? (
                        <div className="text-sm leading-relaxed">{message}</div>
                    ) : (
                        <div className="text-sm leading-relaxed prose prose-invert prose-sm max-w-none
                                      prose-p:my-1 prose-strong:text-cyan prose-a:text-magenta 
                                      prose-code:text-orange prose-code:bg-gray-900 prose-code:px-1 prose-code:rounded">
                            <ReactMarkdown>{message}</ReactMarkdown>
                        </div>
                    )}

                    {/* 
                        🕐 TIMESTAMP
                        - text-xs: Texto muy pequeño (12px)
                        - opacity-70: 70% opacidad (sutil)
                        - mt-1: Margen superior de 4px
                    */}
                    {timestamp && (
                        <div className={`text-xs mt-1 ${isUser ? 'text-white/70' : 'text-gray-400'}`}>
                            {new Date(timestamp).toLocaleTimeString('es-CO', {
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}