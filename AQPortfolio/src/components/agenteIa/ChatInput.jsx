import { useState } from "react";
import { FiSend } from "react-icons/fi";

export default function ChatInput({ onSendMessage, disabled }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim() || disabled) return;
    onSendMessage(message);
    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center w-full">
      <input
        type="text"
        placeholder="Escribe un mensaje..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        disabled={disabled}
        className="flex-1 min-w-0 bg-slate-50 text-slate-800 rounded-xl px-3.5 py-2.5 border border-slate-200 focus:border-[#00A797] outline-none text-sm placeholder:text-slate-400 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={disabled || !message.trim()}
        className="btn-gosyt-primary px-3.5 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-1 cursor-pointer disabled:opacity-50 shrink-0"
      >
        <FiSend className="text-base" />
      </button>
    </form>
  );
}
