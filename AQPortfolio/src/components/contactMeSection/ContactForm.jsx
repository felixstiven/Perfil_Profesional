import { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_buzoel9";
    const templateID = "template_oai2qfh";
    const publicKey = "sR6WVtXv2corXYgo3";

    const templateParams = {
      from_name: name,
      from_email: email,
      name: name,
      email: email,
      message: message,
      reply_to: email,
    };

    try {
      const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log("EmailJS Success:", response.status, response.text);

      setEmail("");
      setName("");
      setMessage("");

      Swal.fire({
        title: "¡Mensaje Enviado!",
        text: "Tu mensaje ha sido recibido con éxito. Te responderé muy pronto.",
        icon: "success",
        background: "#FFFFFF",
        color: "#0A192F",
        confirmButtonColor: "#00A797",
      });
    } catch (error) {
      console.error("EmailJS Error details:", error);
      Swal.fire({
        title: "Error de envío",
        text: error?.text || "Ocurrió un problema al enviar el correo. Puedes escribirme por WhatsApp.",
        icon: "error",
        background: "#FFFFFF",
        color: "#0A192F",
        confirmButtonColor: "#00A797",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="light-card p-6 rounded-2xl shadow-[0_0_15px_rgba(0,240,255,0.15)]">
      <div className="flex items-center gap-2 mb-4 text-[#00A797]">
        <FiSend className="text-xl" />
        <h3 className="text-lg font-display font-bold text-slate-50">Enviar Mensaje por Gmail</h3>
      </div>

      <form onSubmit={sendEmail} className="flex flex-col gap-3">
        <div>
          <label className="text-xs font-mono text-slate-200 mb-1 block font-medium">Nombre Completo</label>
          <input
            type="text"
            placeholder="Tu nombre o empresa"
            required
            className="w-full h-10 rounded-xl bg-slate-50 border border-slate-200 px-3 text-sm text-slate-800 focus:border-[#00A797] outline-none transition-colors placeholder:text-slate-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="text-xs font-mono text-slate-200 mb-1 block font-medium">Correo Electrónico</label>
          <input
            type="email"
            placeholder="tu@correo.com"
            required
            className="w-full h-10 rounded-xl bg-slate-50 border border-slate-200 px-3 text-sm text-slate-800 focus:border-[#00A797] outline-none transition-colors placeholder:text-slate-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="text-xs font-mono text-slate-200 mb-1 block font-medium">Mensaje Breve</label>
          <textarea
            rows="3"
            placeholder="Detalles sobre el proyecto o vacante..."
            required
            className="w-full rounded-xl bg-slate-50 border border-slate-200 p-3 text-sm text-slate-800 focus:border-[#00A797] outline-none transition-colors placeholder:text-slate-400 resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-gosyt-primary bg-brand-accent w-full rounded-xl py-2.5 font-bold text-sm flex items-center justify-center gap-2 mt-1 cursor-pointer disabled:opacity-50 hover:bg-brand-accent/80"
        >
          {loading ? "Enviando..." : "Enviar Correo Directo"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
