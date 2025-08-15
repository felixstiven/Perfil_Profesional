import { useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //const [success, setSuccess] = useState("");
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const handleName = (e) => {
    setName(e.target.value);
};
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey: "sR6WVtXv2corXYgo3",
      }).then(
        () => 
          setEmail(""),
          setName(""),
          setMessage(""),
          Swal.fire({
          title: "Success!",
          text: "Message Sent Successfully",
          icon: "success",
        }),
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    } catch (error) {
      console.log("FAILED...", error.text);
    }
 
  };

  return (
    <div>
      <p className="text-cyan">{}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className=" rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
