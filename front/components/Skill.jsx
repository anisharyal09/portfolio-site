import React from "react";
import {
  Cpu,
  Brain,
  Layout,
  Terminal,
  Zap,
  Code2,
  Network,
} from "lucide-react";

// --- REUSABLE CARD COMPONENT ---
const SkillModule = ({
  title,
  icon: Icon,
  description,
  children,
  align = "left",
}) => (
  <div
    className={`relative group z-20 flex flex-col h-full animate-fade-in-up ${
      align === "right" ? "lg:items-end" : ""
    }`}
  >
    {/* Header */}
    <div
      className={`flex items-center gap-3 mb-4 border-b border-cyan-900/50 pb-2 ${
        align === "right" ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="p-2 bg-cyan-950/30 border border-cyan-500/30 rounded-lg group-hover:border-cyan-400 transition-colors">
        <Icon size={20} className="text-cyan-400" />
      </div>
      <h3 className="text-lg text-white font-mono tracking-wider font-bold">
        {title}
      </h3>
    </div>

    {/* Content Box */}
    <div className="relative flex-1 w-full bg-gray-950/80 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden p-6 transition-all duration-500 group-hover:border-cyan-500/40 group-hover:bg-gray-900/60 shadow-lg flex flex-col">
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-600/50"></div>

      {/* Description */}
      <p
        className={`text-gray-400 text-sm mb-6 font-light leading-relaxed ${
          align === "right" ? "lg:text-right" : ""
        }`}
      >
        {description}
      </p>

      {/* Skills Container */}
      <div
        className={`flex flex-col gap-3 relative z-10 mt-auto ${
          align === "right" ? "items-end" : ""
        }`}
      >
        {children}
      </div>
    </div>
  </div>
);

// --- SKILL NODE ITEM ---
const TechNode = ({ name, type = "core" }) => {
  // Green for Core (Native), Cyan for Stack (Architect)
  const isCore = type === "core";

  return (
    <div className="group/item flex items-center gap-3 w-full p-3 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-900/10 transition-all duration-300">
      {/* Status Light */}
      <div
        className={`w-2 h-2 rounded-full ${
          isCore
            ? "bg-green-500 shadow-[0_0_8px_#22c55e]"
            : "bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
        } animate-pulse`}
      ></div>

      {/* Name */}
      <span className="font-mono text-sm text-gray-200 tracking-wide group-hover/item:text-white transition-colors">
        {name}
      </span>

      {/* Badge */}
      <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">
          {isCore ? "// LOGIC" : "// BUILD"}
        </span>
      </div>
    </div>
  );
};

export default function Skill() {
  return (
    <section className="min-h-screen w-full text-white relative overflow-hidden py-32 flex flex-col items-center justify-center">
      {/* =========================================
          1. TOP FADE
         ========================================= */}
      <div className="absolute top-0 left-0 w-full h-45 bg-gradient-to-b from-black/50 to-transparent z-20 pointer-events-none"></div>

      {/* =========================================
          2. MAIN CONTENT
         ========================================= */}

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-20 w-full mb-12">
        {/* HEADER */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-cyan-500 font-mono text-xs tracking-widest mb-3 uppercase">
            <Terminal size={14} />
            <span>// System_Capabilities</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Stack
            </span>
          </h2>
          <div className="relative h-px w-full max-w-[200px] bg-gray-800 mx-auto mt-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-1/2 animate-shuttle"></div>
          </div>
        </div>

        {/* 3-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch relative">
          {/* Decorative Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-cyan-900/30 to-transparent -z-10"></div>

          {/* THE FOUNDATION (Native Logic) */}
          <SkillModule
            title="Logic Core"
            icon={Code2}
            description="My engineering foundation. This is where I grasp the raw logic, memory management, and algorithmic thinking that underpins all software."
          >
            <TechNode name="C / C++" type="core" />
            <TechNode name="JavaScript (ES6+)" type="core" />
          </SkillModule>

          {/* THE ACCELERATOR (AI) */}
          <div className="lg:-mt-6 flex flex-col">
            <div className="relative group z-20 h-full">
              <div className="absolute inset-0 bg-cyan-500/5 blur-[40px] rounded-full"></div>
              <SkillModule
                title="AI Powered"
                icon={Brain}
                description="My multiplier. I don't just code; I orchestrate. Using AI to accelerate debugging and implementation, allowing me to focus on the 'What' and 'Why'."
              >
                <div className="bg-black/40 border border-cyan-500/20 p-4 rounded-lg font-mono text-xs text-gray-400 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Zap size={14} className="text-yellow-400" />
                    <span className="text-gray-300">Rapid Prototyping</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Terminal size={14} className="text-blue-400" />
                    <span className="text-gray-300">Complex Debugging</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Network size={14} className="text-purple-400" />
                    <span className="text-gray-300">Architecture Planning</span>
                  </div>
                </div>
              </SkillModule>
            </div>
          </div>

          {/* THE ARSENAL (Modern Stack) */}
          <SkillModule
            title="Production Stack"
            icon={Layout}
            align="right"
            description="The tools I use to ship products. I understand the architecture deeply and leverage modern workflows to turn ideas into deployed reality."
          >
            <TechNode name="React.js" type="stack" />
            <TechNode name="Tailwind CSS" type="stack" />
          </SkillModule>
        </div>
      </div>

      {/* FOOTER STATUS */}
      <div
        className="relative z-20 mt-12 animate-fade-in-up"
        style={{ animationDelay: "400ms" }}
      >
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
          <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">
            Status: Constantly Upgrading
          </span>
        </div>
      </div>

      {/* =========================================
          3. BOTTOM FADE 
         ========================================= */}
      <div className="absolute bottom-0 left-0 w-full h-45 bg-gradient-to-t from-black/50 to-transparent z-20 pointer-events-none"></div>

      {/* ANIMATIONS */}
      <style jsx>{`
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
        @keyframes shuttle {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-shuttle {
          animation: shuttle 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}
