import React, { useState } from "react";
import { Send, Linkedin, Github, X, Instagram, Zap } from "lucide-react";
import { supabase } from "../src/utils/supabaseClient";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const validateEmail = (email) => {
    const regex = /^(?!\.)(?!.*\.\.)[a-zA-Z0-9_'+\-\.]{2,}[a-zA-Z0-9_'+\-]@(([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,})$/i;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errorMsg) setErrorMsg("");
  };

  // 2. Real-time Validation
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "email" && value.trim() !== "") {
      if (!validateEmail(value)) {
        setErrorMsg("Invalid email format. Use a valid email address");
      }
    }
  };

  const handleEvent = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("All fields are required to initiate transmission.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMsg(
        "Invalid email format. Kindly use a valid email address"
      );
      return;
    }
    setIsSending(true);

    const { error } = await supabase
      .from("GetInTouch")
      .insert([{ name, email, message }]);

    setIsSending(false);

    if (error) {
      setErrorMsg("Transmission failed: " + error.message);
    } else {
      setFormData({ name: "", email: "", message: "" });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 900);
    }
  };

  return (
    <section className="relative w-full pt-18 pb-32 flex flex-col items-center">
      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-b from-black/50 to-transparent z-20 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-cyan-500 font-mono text-xs tracking-widest mb-3 uppercase">
            <Send size={14} />
            <span>// INITIATE: CONNECTION</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Collaborate.
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl">
            Whether you have an interesting{" "}
            <b>project idea, a challenging problem to solve together</b> or just
            want to expand our networks—reach out!
          </p>

          <div className="relative h-px w-full max-w-[200px] bg-gray-800 mt-3 mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-1/2 animate-shuttle"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-4xl">
          <div className="bg-gray-950/80 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-xl animate-fade-in-up">
            <h3 className="text-xl font-bold text-white mb-6 font-mono border-b border-white/5 pb-2">
              Send Secure Message
            </h3>

            {/* Form / noValidate to stop browser interference in form-validation */}
            <form
              onSubmit={handleEvent}
              noValidate
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 bg-black/50 border border-cyan-900/50 text-white rounded-lg focus:border-cyan-400 outline-none transition-colors font-mono text-sm"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                // ADDED onBlur for Real-time check
                onBlur={handleBlur}
                className={`p-3 bg-black/50 border ${
                  errorMsg && errorMsg.includes("email")
                    ? "border-red-500 focus:border-red-500"
                    : "border-cyan-900/50 focus:border-cyan-400"
                } text-white rounded-lg outline-none transition-colors font-mono text-sm`}
              />

              <textarea
                name="message"
                placeholder="Project details or collaboration ideas..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="p-3 bg-black/50 border border-cyan-900/50 text-white rounded-lg focus:border-cyan-400 outline-none transition-colors font-mono text-sm resize-none"
              ></textarea>

              {errorMsg && (
                <div className="text-red-500 font-mono text-xs animate-fade-in uppercase tracking-tighter mt-1 bg-red-900/10 p-2 border border-red-500/20 rounded">
                  [!] Error: {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="px-6 py-3 bg-cyan-900/40 border border-cyan-500/30 text-cyan-300 font-mono text-sm hover:bg-cyan-500/20 active:scale-[.99] transition-all uppercase tracking-wider flex items-center justify-center gap-2 mt-2"
              >
                {isSending ? "TRANSMITTING..." : "Transmit Data"}{" "}
                <Send size={16} />
              </button>
            </form>
          </div>

          <div
            className="flex flex-col gap-6 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <h3 className="text-xl font-bold text-white mb-2 font-mono border-b border-white/5 pb-2">
              Digital Footprint
            </h3>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://linkedin.com/in/anisharyal09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center bg-blue-900/30 border border-blue-500/20 rounded-xl transition-all hover:bg-blue-800/40 hover:scale-105"
              >
                <Linkedin size={28} className="text-blue-400" />
              </a>
              <a
                href="https://github.com/anisharyal09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center bg-gray-700/30 border border-gray-500/20 rounded-xl transition-all hover:bg-gray-600/40 hover:scale-105"
              >
                <Github size={28} className="text-white" />
              </a>
              <a
                href="https://x.com/anisharyal09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center bg-gray-900/30 border border-white/20 rounded-xl transition-all hover:bg-black/50 hover:scale-105"
              >
                <X size={24} className="text-white" />
              </a>
              <a
                href="https://instagram.com/anisharyal09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center bg-pink-900/30 border border-pink-500/20 rounded-xl transition-all hover:bg-pink-800/40 hover:scale-105"
              >
                <Instagram size={24} className="text-pink-400" />
              </a>
            </div>

            <div
              className="relative z-20 mt-12 animate-fade-in-up flex w-full justify-center lg:justify-start"
              style={{ animationDelay: "400ms" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                <Zap size={12} className="text-cyan-400 animate-pulse" />
                <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">
                  STATUS: CONNECTING
                  <span className="typing-dots">
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed bottom-10 right-6 md:right-10 z-[100] animate-slide-in">
          <div className="bg-black/80 backdrop-blur-md border border-cyan-500/50 p-4 rounded-lg flex items-center gap-4 max-w-[320px] relative overflow-hidden">
            <div>
              <h4 className="text-white font-mono text-sm font-bold uppercase tracking-tighter">
                Transmission Success
              </h4>
              <p className="text-gray-400 font-mono text-xs mt-1">
                I'll get back to you shortly!
              </p>
            </div>
            <div className="absolute bottom-0 left-0 h-1 bg-cyan-500 animate-progress-shrink"></div>
          </div>
        </div>
      )}

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black/50 to-transparent z-20 pointer-events-none"></div>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(100%); } to { opacity: 1; transform: translateX(0); } }
        @keyframes progressShrink { from { width: 100%; } to { width: 0%; } }
        @keyframes shuttle { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
        @keyframes typing-dots { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }

        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-slide-in { animation: slideIn 0.5s ease-out forwards; }
        .animate-progress-shrink { animation: progressShrink 3s linear forwards; }
        .animate-shuttle { animation: shuttle 3s linear infinite; }
        .typing-dots .dot { animation: typing-dots 1.8s infinite; }
        .typing-dots .dot:nth-child(2) { animation-delay: 0.6s; }
        .typing-dots .dot:nth-child(3) { animation-delay: 1.1s; }
      `}</style>
    </section>
  );
}
