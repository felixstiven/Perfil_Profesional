import { useState, useEffect, useRef } from "react";
import ChatMessage from "./chatMessage";
import ChatInput from "./ChatInput";
import LeadForm from "./LeadForm";
import { sendMessage } from "../../services/api";
import { FaRobot, FaTimes, FaTrash, FaEnvelope } from "react-icons/fa";

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setMessages([
      {
        id: 'Welcome',
        message: '👋 ¡Hola! Soy **Stiven Felix AI**, asistente de este portafolio.\n\n⚡ He sido diseñado e implementado con arquitectura conversacional de **Modelos de Lenguaje (LLM)**.\n\n💡 *Nota de Demostración:* Actualmente las respuestas dinámicas en vivo están pausadas por **límite de cuota/tokens de la API de Gemini**. Esta sección demuestra mi habilidad técnica en integración de IA, Prompt Engineering y desarrollo Full-Stack.\n\n¿Tienes alguna consulta sobre mi experiencia o deseas contactarme por WhatsApp?',
        isUser: false,
        timestamp: new Date().toISOString()
      }
    ]);
  }, []);

  const handleSendMessage = async (message) => {
    const messageUser = {
      id: Date.now(),
      message: message,
      isUser: true,
      timestamp: new Date().toISOString()
    };

    setMessages((prev) => [...prev, messageUser]);
    setIsTyping(true);

    const quotaFallback = "⚠️ **Agente IA en Pausa por Cuota / Actualización de API**\n\nLas respuestas dinámicas en vivo están pausadas por actualización de versión o límite de tokens en la API de Gemini LLM.\n\n📲 **Contacto Directo:**\n- **WhatsApp:** [Abrir Chat Directo](https://wa.me/573107729036)\n- **Gmail:** stivensena2017@gmail.com\n\n¡Con gusto atenderé tu consulta personalmente!";

    try {
      const response = await sendMessage(message, sessionId);
      if (!sessionId && response.session_id) {
        setSessionId(response.session_id);
      }

      let agentMessage = response.respuesta || '';
      
      if (!agentMessage || agentMessage.includes('Error') || agentMessage.includes('404') || agentMessage.includes('gemini') || agentMessage.includes('failed')) {
        agentMessage = quotaFallback;
      } else if (agentMessage.includes('[MOSTRAR_FORMULARIO]')) {
        setShowLeadForm(true);
        agentMessage = agentMessage.replace('[MOSTRAR_FORMULARIO]', '').trim();
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          message: agentMessage,
          isUser: false,
          timestamp: new Date().toISOString()
        }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          message: quotaFallback,
          isUser: false,
          timestamp: new Date().toISOString()
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearSession = () => {
    setMessages([
      {
        id: 'Welcome',
        message: '👋 ¡Hola! Soy **Stiven Felix AI**, asistente de este portafolio.\n\n⚡ He sido diseñado e implementado con arquitectura conversacional de **Modelos de Lenguaje (LLM)**.\n\n💡 *Nota de Demostración:* Actualmente las respuestas dinámicas en vivo están pausadas por **límite de cuota/tokens de la API de Gemini**. Esta sección demuestra mi habilidad técnica en integración de IA, Prompt Engineering y desarrollo Full-Stack.',
        isUser: false,
        timestamp: new Date().toISOString()
      }
    ]);
  };

  return (
    <>
      {/* Botón Flotante para Abrir Chat */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-[9999] p-3.5 sm:p-4 rounded-full bg-[#0A192F] text-[#00C8C8] hover:bg-[#00A797] hover:text-white shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-slate-200 cursor-pointer"
        aria-label="Abrir Asistente IA"
      >
        {isOpen ? <FaTimes className="text-lg sm:text-xl text-white" /> : <FaRobot className="text-xl sm:text-2xl" />}
      </button>

      {/* Ventana Flotante del Chat Responsiva (Fixed Inset-x-3 Bulletproof Mobile) */}
      {isOpen && (
        <div className="fixed z-[9999] inset-x-3 bottom-20 sm:inset-x-auto sm:right-6 sm:bottom-24 sm:w-[380px] max-w-[calc(100vw-24px)] h-[70vh] sm:h-[520px] max-h-[560px] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
          {/* Header Light Theme GOSYT */}
          <div className="bg-[#0A192F] text-white p-3 sm:p-3.5 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#00A797]/20 text-[#00C8C8] flex items-center justify-center text-base sm:text-lg">
                <FaRobot />
              </div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm leading-tight text-white">Stiven Felix AI</h3>
                <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-[#10B981] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                  <span>Demo Mode</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowLeadForm(true)}
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                title="Formulario de Contacto"
              >
                <FaEnvelope className="text-xs sm:text-sm" />
              </button>
              <button
                onClick={clearSession}
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                title="Limpiar Conversación"
              >
                <FaTrash className="text-[10px] sm:text-xs" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                title="Cerrar Chat"
              >
                <FaTimes className="text-xs sm:text-sm" />
              </button>
            </div>
          </div>

          {/* Área de Mensajes */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-[#F8FAFC]">
            {messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg.message}
                isUser={msg.isUser}
                timestamp={msg.timestamp}
              />
            ))}

            {isTyping && (
              <div className="flex gap-1.5 bg-slate-200/80 rounded-2xl p-3 w-fit animate-pulse">
                <span className="w-2 h-2 bg-[#00A797] rounded-full"></span>
                <span className="w-2 h-2 bg-[#00A797] rounded-full"></span>
                <span className="w-2 h-2 bg-[#00A797] rounded-full"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-2.5 sm:p-3 bg-white border-t border-slate-200 shrink-0">
            <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
          </div>

          {/* Formulario Lead Modal */}
          {showLeadForm && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-xs z-10 flex items-center justify-center p-4">
              <LeadForm
                onSubmit={() => setShowLeadForm(false)}
                onClose={() => setShowLeadForm(false)}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
