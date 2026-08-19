import ReactMarkdown from 'react-markdown';

export default function ChatMessage({ message, isUser, timestamp }) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
      <div className={`max-w-[85%] ${isUser ? 'order-2' : 'order-1'}`}>
        <div className={`flex items-center gap-1.5 mb-1 text-[11px] font-semibold ${isUser ? 'justify-end text-slate-500' : 'justify-start text-[#00A797]'}`}>
          {!isUser && <span className="text-sm">🤖</span>}
          <span>{isUser ? 'Tú' : 'Stiven Felix AI'}</span>
          {isUser && <span className="text-sm">👤</span>}
        </div>

        <div
          className={`rounded-2xl px-4 py-3 text-sm shadow-sm ${
            isUser
              ? 'bg-[#0A192F] text-white rounded-tr-none'
              : 'bg-slate-100 border border-slate-200 text-slate-800 rounded-tl-none'
          }`}
        >
          {isUser ? (
            <div className="leading-relaxed">{message}</div>
          ) : (
            <div className="leading-relaxed prose prose-sm max-w-none text-slate-800 prose-p:my-1 prose-strong:text-[#0A192F] prose-a:text-[#00A797] prose-a:underline font-sans">
              <ReactMarkdown>{message}</ReactMarkdown>
            </div>
          )}

          {timestamp && (
            <div className={`text-[10px] mt-1.5 text-right ${isUser ? 'text-slate-300' : 'text-slate-400'}`}>
              {new Date(timestamp).toLocaleTimeString('es-CO', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
