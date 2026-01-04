import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import heroImage from "../src/assets/hero.jpg";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "Aspiring Engineer",
    "Problem Solver",
    "Innovator",
    "Creative Developer",
  ];
  const currentFullWord = words[wordIndex];
  const article = /^[aeiou]/i.test(currentFullWord) ? "an" : "a";

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentFullWord.substring(0, displayText.length + 1));
          if (displayText === currentFullWord)
            setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setDisplayText(currentFullWord.substring(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 150
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, currentFullWord]);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 1. MOBILE VIEW */}
      <div className="md:hidden flex flex-col items-center justify-center w-full px-6 relative z-10 gap-8 py-20">
        <div className="relative w-64 h-64 group animate-fade-in-scale">
          {/* ... image container code ... */}
          <div className="absolute inset-0 border border-dashed border-cyan-500/30 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-2 bg-gray-900 rounded-2xl border border-cyan-500/30 overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <img
              src={heroImage}
              alt="Anish Aryal"
              className="w-full h-full object-cover grayscale contrast-125 brightness-90 sepia-[.5] hue-rotate-[170deg]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-50 animate-scan"></div>
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black border border-cyan-500/50 px-4 py-1 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></div>
            <span className="text-[10px] font-mono text-cyan-300 tracking-wider">
              ONLINE
            </span>
          </div>
        </div>

        <div className="text-center w-full animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-2 opacity-70">
            <span className="text-cyan-500 font-mono text-xs">
              // IDENTITY_CONFIRMED
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">
            Anish <span className="text-cyan-400">Aryal</span>
          </h1>
          <div className="mb-6">
            <div className="h-8 text-lg text-gray-300 font-light flex items-center justify-center">
              I'm {article}{" "}
              <span className="text-cyan-300 font-mono border-b border-cyan-500/30 pb-0.5 mx-2">
                {displayText}
              </span>
              <span className="animate-pulse text-cyan-500">_</span>
            </div>
            <p className="text-sm text-gray-400 mt-2 font-mono tracking-wide">
              turning ideas into reality
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <Link
              to="/getintouch"
              className="w-full bg-cyan-900/20 border border-cyan-500/30 text-cyan-300 font-mono py-3.5 rounded hover:bg-cyan-500/10 active:scale-95 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
            >
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-sm"></span>{" "}
              INITIALIZE_CONTACT
            </Link>

            <a
              href="https://github.com/anisharyal09"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-transparent border border-white/10 text-gray-400 font-mono py-3 rounded hover:bg-white/5 active:scale-95 transition-all uppercase tracking-widest text-[10px] flex items-center justify-center gap-2"
            >
              <Github size={14} /> View_Schematics.git
            </a>
          </div>
        </div>
      </div>

      {/* --- 2. TABLET VIEW --- */}
      <div className="hidden md:flex lg:hidden w-full px-8 items-center justify-center gap-6 relative z-10">
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] pointer-events-none -z-10">
          {/* ... SVG path code ... */}
          <path
            d="M 50 100 C 200 100, 400 100, 550 100"
            stroke="#1e293b"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 50 100 C 200 100, 400 100, 550 100"
            stroke="url(#tabletGrad)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,10"
            className="animate-shuttle"
          />
          <defs>
            <linearGradient id="tabletGrad">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        <div className="w-1/2 text-left z-10 pl-2">
          {/* ... text and typing effect code ... */}
          <div className="font-mono text-xs text-cyan-500/70 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
            <span>./ROOT/USER/PROFILE</span>
          </div>
          <h1 className="text-4xl xl:text-5xl font-bold mb-4 tracking-tight text-white leading-tight">
            Anish <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Aryal
            </span>
          </h1>
          <div className="h-20 text-lg text-gray-300 font-light">
            I'm {article}{" "}
            <span className="text-cyan-400 font-mono font-bold">
              {displayText}
            </span>
            <span className="animate-pulse text-cyan-400">|</span>
            <p className="text-sm text-gray-400 mt-1">
              turning ideas into reality
            </p>
          </div>
          <div className="mt-4 flex flex-col xl:flex-row gap-3">
            <Link
              to="/getintouch"
              className="whitespace-nowrap text-center px-5 py-2.5 bg-cyan-900/20 border border-cyan-500/30 text-cyan-400 font-mono text-xs hover:bg-cyan-500/20 hover:border-cyan-400 transition-all uppercase tracking-wider"
            >
              &lt;Contact /&gt;
            </Link>

            <a
              href="https://github.com/anisharyal09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-5 py-2.5 bg-transparent border border-white/10 text-gray-400 font-mono text-xs hover:text-white hover:border-white/30 transition-all uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Github size={14} /> Schematics
            </a>
          </div>
        </div>

        <div className="w-1/2 max-w-[280px] z-10">
          {/* ... image display code ... */}
          <div className="relative bg-gray-900 p-1.5 rounded-lg border border-gray-700 shadow-xl">
            <div className="relative overflow-hidden rounded bg-black aspect-[3/4]">
              <img
                src={heroImage}
                alt="Anish Aryal"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 sepia-[.5] hue-rotate-[170deg]"
              />
              <div className="absolute inset-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-scan"></div>
              <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded border border-cyan-500/30">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[11px] text-cyan-400 font-mono">
                    ONLINE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 3. DESKTOP VIEW --- */}
      <div className="hidden lg:flex w-full max-w-7xl mx-auto px-12 xl:px-20 items-center justify-between relative z-10">
        {/* TEXT */}
        <div className="flex-shrink-0 z-20 w-[42%] animate-slide-in-left">
          {/* ... text and typing effect code ... */}
          <div className="font-mono text-xs text-cyan-500/70 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
            <span>./ROOT/USER/PROFILE</span>
          </div>
          <h1 className="text-6xl xl:text-8xl font-bold mb-6 tracking-tight text-white leading-[1.1]">
            Anish <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Aryal
            </span>
          </h1>

          <div className="mb-8">
            <div className="text-2xl text-gray-300 font-light flex items-center h-10">
              I'm {article}{" "}
              <span className="text-cyan-400 font-mono font-bold mx-2">
                {displayText}
              </span>
              <span className="animate-pulse text-cyan-400">|</span>
            </div>
            <p className="text-lg text-gray-400 mt-2 font-mono tracking-wide">
              turning ideas into reality
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <Link
              to="/getintouch"
              className="whitespace-nowrap px-8 py-3 bg-cyan-900/20 border border-cyan-500/30 text-cyan-400 font-mono text-sm hover:bg-cyan-500/20 hover:border-cyan-400 transition-all uppercase tracking-wider flex items-center justify-center"
            >
              &lt;Contact /&gt;
            </Link>

            <a
              href="https://github.com/anisharyal09"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border border-white/10 text-gray-400 font-mono text-sm hover:text-white hover:border-white/30 transition-all uppercase tracking-wider flex items-center gap-2"
            >
              <span>View_Schematics</span> <Github size={16} />
            </a>
          </div>
        </div>

        {/* MIDDLE: DECORATION */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none z-0 hidden lg:block">
          <div className="relative w-full h-full flex items-center justify-center group pointer-events-auto">
            <div className="absolute w-40 h-40 bg-cyan-500/5 blur-[60px] rounded-full group-hover:bg-cyan-500/10 transition-all duration-1000" />

            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 200"
              className="overflow-visible"
            >
              <defs>
                <linearGradient id="syncGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>

              {/* Synchronized Circuitry */}
              <g fill="none" strokeWidth="1.5" strokeLinecap="round">
                {/* --- INPUTS --- */}
                <text
                  x="65"
                  y="75"
                  className="fill-cyan-500/40 font-mono text-[5px] uppercase tracking-widest"
                >
                  SIG_SW
                </text>
                <path
                  d="M 70 80 L 150 80 L 185 95"
                  stroke="rgba(6, 182, 212, 0.05)"
                />
                <path
                  d="M 70 80 L 150 80 L 185 95"
                  stroke="url(#syncGrad)"
                  className="inp-packet"
                />

                <text
                  x="65"
                  y="130"
                  className="fill-cyan-500/40 font-mono text-[5px] uppercase tracking-widest"
                >
                  SIG_HW
                </text>
                <path
                  d="M 70 120 L 150 120 L 185 105"
                  stroke="rgba(6, 182, 212, 0.05)"
                />
                <path
                  d="M 70 120 L 150 120 L 185 105"
                  stroke="url(#syncGrad)"
                  className="inp-packet"
                />

                {/* --- OUTPUT --- */}
                <text
                  x="240"
                  y="90"
                  className="fill-cyan-500/40 font-mono text-[5px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  SYSTEM_OUTPUT
                </text>
                <path
                  d="M 215 100 L 330 100"
                  stroke="rgba(6, 182, 212, 0.05)"
                />
                <path
                  d="M 215 100 L 330 100"
                  stroke="url(#syncGrad)"
                  className="out-packet"
                />

                <circle cx="330" cy="100" r="2" className="node-status" />
              </g>

              {/* The AND Junction Box */}
              <g className="logic-core">
                <rect
                  x="185"
                  y="88"
                  width="30"
                  height="24"
                  rx="1"
                  fill="#000"
                  stroke="rgba(6, 182, 212, 0.3)"
                  strokeWidth="0.5"
                />
                <text
                  x="200"
                  y="103"
                  textAnchor="middle"
                  className="fill-cyan-500/40 font-mono text-[7px] font-bold tracking-[0.2em]"
                >
                  AND
                </text>
              </g>
            </svg>

            {/* Hover Overlay */}
            <div className="absolute bottom-12 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="bg-black/90 border-l-2 border-cyan-500 px-3 py-1.5 backdrop-blur-sm">
                <p className="font-mono text-[9px] text-cyan-400 tracking-widest uppercase">
                  Fusing HW & SW
                </p>
                <p className="text-[6px] text-gray-600 font-mono uppercase tracking-tighter mt-1">
                  Logic_State: 1
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="flex-shrink-0 z-20 w-[40%] max-w-[350px] xl:max-w-[400px] animate-slide-in-right">
          {/* ... image display code ... */}
          <div className="relative bg-gray-900 p-2 rounded-lg border border-gray-700 shadow-2xl">
            <div className="absolute -top-1 left-4 right-4 h-2 flex justify-between">
              {[...Array(6)].map((_, i) => (
                <div
                  key={`t${i}`}
                  className="w-2 h-3 -mt-2 bg-gray-600 rounded-t-sm"
                ></div>
              ))}
            </div>
            <div className="absolute -bottom-1 left-4 right-4 h-2 flex justify-between">
              {[...Array(6)].map((_, i) => (
                <div
                  key={`b${i}`}
                  className="w-2 h-3 -mb-2 bg-gray-600 rounded-b-sm"
                ></div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded bg-black aspect-[3/4] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-shadow duration-500">
              <img
                src={heroImage}
                alt="Anish Aryal"
                className="w-full h-full object-cover grayscale contrast-125 brightness-90 sepia-[.5] hue-rotate-[170deg] group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-scan"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur border-t border-cyan-900/50 p-3 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-mono">
                    STATUS
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-green-400 font-mono tracking-widest font-bold">
                      ONLINE
                    </span>
                  </div>
                </div>
                <div className="flex items-end gap-1 h-4">
                  <div className="w-1 bg-cyan-500 animate-[bounce_1s_infinite] h-2"></div>
                  <div className="w-1 bg-cyan-500 animate-[bounce_1.2s_infinite] h-4"></div>
                  <div className="w-1 bg-cyan-500 animate-[bounce_0.8s_infinite] h-3"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-3 font-mono text-[10px] text-gray-600 tracking-[0.2em]">
            IC-ARYAL-2025
          </div>
        </div>
      </div>

      {/* 4. BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black/50 to-transparent z-20 pointer-events-none"></div>

      <style>{`
    /* Input Packets: 0% to 45% */
    @keyframes input-flow {
      0% { stroke-dashoffset: 100; opacity: 0; }
      10% { opacity: 1; }
      45% { stroke-dashoffset: 0; opacity: 1; }
      46%, 100% { stroke-dashoffset: 0; opacity: 0; }
    }

    /* Logic Processing: 45% to 55% */
    @keyframes core-process {
      0%, 44% { filter: drop-shadow(0 0 0px #06b6d4); transform: scale(1); border-color: rgba(6, 182, 212, 0.2); }
      50% { filter: drop-shadow(0 0 10px #06b6d4); transform: scale(1.05); border-color: #06b6d4; }
      56%, 100% { filter: drop-shadow(0 0 0px #06b6d4); transform: scale(1); border-color: rgba(6, 182, 212, 0.2); }
    }

    /* Output Packet: 55% to 90% */
    @keyframes output-flow {
      0%, 54% { stroke-dashoffset: 100; opacity: 0; }
      60% { opacity: 1; }
      90% { stroke-dashoffset: 0; opacity: 1; }
      91%, 100% { stroke-dashoffset: 0; opacity: 0; }
    }

    /* Output Indicator Pulse: 90% to 100% */
    @keyframes output-node-pulse {
      0%, 89% { r: 1.5; fill: rgba(34, 211, 238, 0.2); }
      92% { r: 4; fill: #fff; filter: drop-shadow(0 0 8px #06b6d4); }
      100% { r: 2; fill: #06b6d4; }
    }

    .inp-packet {
      stroke-dasharray: 15 85;
      animation: input-flow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }

    .out-packet {
      stroke-dasharray: 20 80;
      animation: output-flow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }

    .logic-core {
      animation: core-process 3s ease-in-out infinite;
      transform-origin: center;
    }

    .node-status {
      animation: output-node-pulse 3s ease-in-out infinite;
    }
      `}</style>
    </section>
  );
}
