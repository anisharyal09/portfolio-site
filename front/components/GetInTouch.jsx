import React from "react";
import { Send, Linkedin, Github, X, Instagram } from "lucide-react";
import { Zap } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="relative w-full pt-18 pb-32 flex flex-col items-center">
      
      {/* 1. TOP FADE */}
      <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-b from-black/50 to-transparent z-20 pointer-events-none"></div>


      {/* 2. MAIN CONTENT (z-10) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* --- HEADER --- */}
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
            Whether you have an interesting <b>project idea, a challenging
            problem to solve together</b> or just want to expand our
            networks—reach out!
          </p>

          {/* separator line */}
          <div className="relative h-px w-full max-w-[200px] bg-gray-800 mt-3 mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-1/2 animate-shuttle"></div>
          </div>
        </div>

        {/* --- FORM & SOCIALS LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-4xl">
          {/* === LEFT: CONTACT FORM (HIGH-INTENT) === */}
          <div className="bg-gray-950/80 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-xl animate-fade-in-up">
            <h3 className="text-xl font-bold text-white mb-6 font-mono border-b border-white/5 pb-2">
              Send Secure Message
            </h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 bg-black/50 border border-cyan-900/50 text-white rounded-lg focus:border-cyan-400 outline-none transition-colors font-mono text-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 bg-black/50 border border-cyan-900/50 text-white rounded-lg focus:border-cyan-400 outline-none transition-colors font-mono text-sm"
              />
              <textarea
                placeholder="Project details or collaboration ideas..."
                rows="5"
                className="p-3 bg-black/50 border border-cyan-900/50 text-white rounded-lg focus:border-cyan-400 outline-none transition-colors font-mono text-sm resize-none"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-cyan-900/40 border border-cyan-500/30 text-cyan-300 font-mono text-sm hover:bg-cyan-500/20 active:scale-[.99] transition-all uppercase tracking-wider flex items-center justify-center gap-2 mt-2"
              >
                Transmit Data <Send size={16} />
              </button>
            </form>
          </div>

          {/* === RIGHT: SOCIAL/PROFESSIONAL LINKS === */}
          <div
            className="flex flex-col gap-6 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <h3 className="text-xl font-bold text-white mb-2 font-mono border-b border-white/5 pb-2">
              Digital Footprint
            </h3>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/anisharyal09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center bg-blue-900/30 border border-blue-500/20 rounded-xl transition-all hover:bg-blue-800/40 hover:scale-105"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin size={28} className="text-blue-400" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/anisharyal09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center bg-gray-700/30 border border-gray-500/20 rounded-xl transition-all hover:bg-gray-600/40 hover:scale-105"
                aria-label="View Code on GitHub"
              >
                <Github size={28} className="text-white" />
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/anisharyal09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center bg-gray-900/30 border border-white/20 rounded-xl transition-all hover:bg-black/50 hover:scale-105"
                aria-label="Connect on X"
              >
                <X size={24} className="text-white" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/anisharyal09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center bg-pink-900/30 border border-pink-500/20 rounded-xl transition-all hover:bg-pink-800/40 hover:scale-105"
                aria-label="Follow on Instagram"
              >
                <Instagram size={24} className="text-pink-400" />
              </a>
            </div>

            <p className="text-gray-500 text-xs mt-4 font-mono">
              // Click an icon to open the channel.
            </p>

            {/* --- STATUS --- */}
            <div
              className="relative z-20 mt-12 animate-fade-in-up flex w-full justify-center lg:justify-start"
              style={{ animationDelay: "400ms" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                <Zap size={12} className="text-cyan-400 animate-pulse" />
                <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">
                  STATUS: CONNECTING
                  {/* The Dynamic Typing Dots */}
                  <span className="typing-dots">
                    <span className="dot" style={{ animationDelay: "0s" }}>
                      .
                    </span>
                    <span className="dot" style={{ animationDelay: "0.6s" }}>
                      .
                    </span>
                    <span className="dot" style={{ animationDelay: "1.1s" }}>
                      .
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black/50 to-transparent z-20 pointer-events-none"></div>

      <style>{`
        /* 1. KEYFRAME DEFINITIONS */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes blink {
            50% { opacity: 0; }
        }
        @keyframes typing-dots {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
        }
        @keyframes shuttle {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        /* 2. APPLY ANIMATIONS */
        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-blink {
            animation: blink 1s step-end infinite;
        }
        .animate-shuttle {
            animation: shuttle 3s linear infinite; /* Adjust timing as needed */
        }
        
        .typing-dots .dot {
            opacity: 0; /* Start hidden */
            animation: typing-dots 1.8s infinite; 
        }
      `}</style>
    </section>
  );
}
