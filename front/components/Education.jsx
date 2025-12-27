import React, { useState } from "react";
import { Zap } from "lucide-react";

const educationData = [
  {
    id: 1,
    year: "2022",
    title: "TENTH GRADED",
    institution: "Gandaki E.B.S, Tamghas",
    gpa: "3.70 GPA",
    status: "COMPLETED",
  },
  {
    id: 2,
    year: "2024",
    title: "PLUS TWO (12)",
    institution: "Kanti Sec. School, Butwal",
    gpa: "3.84 GPA",
    status: "COMPLETED",
  },
  {
    id: 3,
    year: "2024 - 2028",
    title: (
      <>
        ELECTRONICS, COMMUNICATION <br className="hidden lg:block" />&
        INFORMATION ENGINEERING
      </>
    ),
    institution: "IOE, Pulchowk Campus",
    gpa: "RUNNING",
    status: "IN_PROGRESS",
  },
];

const EducationCard = ({ data, index }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div
      className="relative group w-full md:max-w-xl lg:max-w-sm flex flex-col animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Connector (Desktop only) */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-transparent to-cyan-500/50 hidden lg:block"></div>
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-500 rounded-full hidden lg:block shadow-[0_0_10px_#06b6d4]"></div>

      {/* CARD BODY */}
      <div className="relative h-full bg-black/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col">
        {/* Header */}
        <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex justify-between items-center">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
          </div>
          <span className="text-[10px] font-mono text-gray-500">
            SYS_ID_{data.id.toString().padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

          <h3 className="text-3xl font-bold text-white mb-2 tracking-tight z-10 font-mono">
            {data.year}
          </h3>
          <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-4 leading-snug z-10 min-h-[3.5rem] flex items-center">
            {data.title}
          </h4>

          <div className="mt-auto z-10">
            <p className="text-gray-400 text-sm font-mono border-l-2 border-gray-700 pl-3 mb-6">
              {data.institution}
            </p>

            {/* IMPLICIT SPOILER */}
            <div
              className="relative overflow-hidden rounded bg-black/40 border border-white/5 group-hover:border-white/10 transition-colors cursor-pointer select-none"
              onClick={() => setIsRevealed(!isRevealed)}
            >
              {!isRevealed ? (
                <div className="py-2 px-3 flex items-center justify-between group/spoiler hover:bg-white/5 transition-colors opacity-60 hover:opacity-100">
                  <span className="text-[10px] text-gray-600 font-mono uppercase tracking-widest">
                    [ View_Data ]
                  </span>
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full group-hover/spoiler:bg-cyan-800 transition-colors"></span>
                </div>
              ) : (
                <div className="py-2 px-3 bg-white/5 border-t border-white/10 relative animate-quick-fade-in">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-[10px] text-gray-500">DATA:</span>
                    <span className="text-sm font-medium text-cyan-200/80 tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.05)]">
                      {data.gpa}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Education() {
  return (
    <section className="relative w-full py-32">
      {/* =========================================
          1. TOP FADE
         ========================================= */}
      <div className="absolute top-0 left-0 w-full h-45 bg-gradient-to-b from-black/50 to-transparent z-20 pointer-events-none"></div>

      {/* =========================================
          2. CONTENT
         ========================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 w-full animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4 opacity-70">
            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
            <span className="text-cyan-500 font-mono text-xs tracking-widest">
              ./ROOT/USER/ACADEMICS
            </span>
            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Education
            </span>
          </h2>

          <div className="relative h-px w-full max-w-[200px] bg-gray-800 mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-1/2 animate-shuttle"></div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 w-full justify-center items-center lg:items-stretch">
          {educationData.map((item, index) => (
            <EducationCard key={item.id} data={item} index={index} />
          ))}
        </div>
      </div>

      {/* =========================================
          3. BOTTOM FADE
         ========================================= */}
      <div className="absolute bottom-0 left-0 w-full h-45 bg-gradient-to-t from-black/50 to-transparent z-20 pointer-events-none"></div>

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
