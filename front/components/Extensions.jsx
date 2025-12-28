import React from "react";
import { Zap, Activity, Video, Play, MonitorPlay } from "lucide-react";

export default function Extensions() {
  const featuredVideoId = "HumllUTEzms";
  const featuredVideoUrl = `https://youtu.be/${featuredVideoId}?si=pmdkyYahjVMmRY0T`;
  const channelUrl = "https://www.youtube.com/@empowermenttechspace";

  // YouTube thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${featuredVideoId}/maxresdefault.jpg`;

  return (
    <section className="relative w-full pt-24 pb-32 flex flex-col items-center">
      
      {/* 1. TOP FADE */}
      <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-b from-black/50 to-transparent z-20 pointer-events-none"></div>

      {/* 2. MAIN CONTENT (z-10) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* --- HEADER --- */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-cyan-500 font-mono text-xs tracking-widest mb-3 uppercase">
            <Activity size={14} />
            <span>// SYSTEM: EXTENSION MODULES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight typewriter-text mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Digital Extensions
            </span>
          </h2>

          {/* separator line with shuttle animation */}
          <div className="relative h-px w-full max-w-[200px] bg-gray-800 mt-3 mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-1/2 animate-shuttle"></div>
          </div>

          <p className="text-gray-400 mt-4 max-w-xl">
            Supplementary logs detailing personal pursuits, creative outlets,
            and specialized technical interests that complement core engineering
            knowledge.
          </p>
          {/* Cursor for Typewriter Effect */}
          <span className="inline-block h-6 w-px bg-cyan-400 align-bottom animate-blink"></span>
        </div>

        {/* --- CONTENT LAYOUT (YouTube & Interests) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full max-w-6xl mt-8">

          {/* === YOUTUBE & VIDEO CONTENT (2/3 width on desktop) === */}
          <div className="lg:col-span-2 flex flex-col gap-6 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-white font-mono border-b border-white/5 pb-2 flex items-center gap-2">
              <Play size={24} className="text-red-500 fill-red-500" />{" "}
              Empowerment Tech Space
            </h3>

            <p className="text-gray-400 text-sm">
              As part of the <b>Empowerment Tech Space (eTechs)</b> channel, videos
              are created focusing on digital empowerment, ethical technology
              use, and the intersection of life and code. Featured below is the
              latest video log.
            </p>

            {/* Featured Video Link Box */}
            <a
              href={featuredVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full aspect-video bg-gray-900/50 border border-cyan-500/20 rounded-xl overflow-hidden flex flex-col items-center justify-center p-8 text-center group transition-shadow hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              {/* 1. BLURRED THUMBNAIL BACKGROUND LAYER */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${thumbnailUrl})` }}
              >
                {/* Dark/Blurred Overlay for Readability - REMOVED on hover */}
                <div className="absolute inset-0 backdrop-blur-md bg-black/60 transition-opacity duration-500 group-hover:opacity-0"></div>
              </div>

              {/* 2. FOREGROUND CONTENT (z-10) - FADES OUT ON HOVER */}
              <div className="relative z-10 flex flex-col items-center transition-opacity duration-500 group-hover:opacity-0">
                <MonitorPlay
                  size={48}
                  className="text-cyan-400 group-hover:text-cyan-200 transition-colors"
                />
                <h4 className="text-xl font-bold text-white mt-4 font-mono">
                  The Digital Afterlife - What Happens to Your Digital Soul When
                  You Die?
                </h4>
                <p className="text-sm text-gray-300">
                  (Click to watch documentary)
                </p>
              </div>

              {/* 3. ABSOLUTE BUTTONS (z-20) - Keep Play Button hidden until hover */}
              <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                {/* Play Button - Only appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="mb-30 ml-45 w-20 h-20 bg-red-600/90 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play size={32} className="text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Original Buttons  */}
                <span className="px-4 py-2 bg-red-600/80 text-white rounded-lg font-mono text-xs uppercase transition-opacity duration-300 group-hover:opacity-50">
                  Featured Video
                </span>
                <a
                  href={channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700/80 hover:bg-gray-700 text-white rounded-lg font-mono text-xs uppercase transition-opacity duration-300 group-hover:opacity-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Channel
                </a>
              </div>
            </a>

            <p className="text-gray-500 text-xs font-mono">
              // Latest log date: 12/02/2025
            </p>
          </div>

          {/* === PERSONAL INTERESTS (1/3 width on desktop) === */}
          <div
            className="lg:col-span-1 flex flex-col gap-4 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <h3 className="text-2xl font-bold text-white font-mono border-b border-white/5 pb-2 flex items-center gap-2">
              <Zap size={24} className="text-yellow-500 fill-yellow-500" />{" "}
              Interests
            </h3>

            <ul className="text-gray-300 flex flex-col gap-3 p-4 bg-gray-950/70 border border-cyan-500/10 rounded-lg">
              <li className="font-mono text-sm border-l-2 border-cyan-400 pl-3">
                Listening to Music
              </li>
              <li className="font-mono text-sm border-l-2 border-cyan-400 pl-3">
                Microcontroller Stuff
              </li>
              <li className="font-mono text-sm border-l-2 border-cyan-400 pl-3">
                Travelling
              </li>
              <li className="font-mono text-sm border-l-2 border-cyan-400 pl-3">
                Video Editing
              </li>
              <li className="font-mono text-sm border-l-2 border-cyan-400 pl-3">
                Graphic Design
              </li>
            </ul>
            <p className="text-gray-500 text-xs mt-2 font-mono">
              // collected from hobbies and off-hours activity log.
            </p>
          </div>
        </div>
      </div>

      {/* --- FOOTER STATUS --- */}
      <div
        className="relative z-20 mt-12 animate-fade-in-up flex justify-center w-full"
        style={{ animationDelay: "400ms" }}
      >
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
          <Zap size={12} className="text-green-400 animate-pulse" />
          <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">
            STATUS: EXPLORING
            {/* The Dynamic Typing Dots */}
            <span className="typing-dots">
              <span className="dot" style={{ animationDelay: "0s" }}>
                .
              </span>
              <span className="dot" style={{ animationDelay: "0.3s" }}>
                .
              </span>
              <span className="dot" style={{ animationDelay: "0.6s" }}>
                .
              </span>
            </span>
          </span>
        </div>
      </div>

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
            animation: typing-dots 1.8s infinite; /* Adjusted duration for smoother look */
        }
      `}</style>
    </section>
  );
}
