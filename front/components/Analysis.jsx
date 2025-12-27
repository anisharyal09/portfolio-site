import React from "react";
import { FlaskConical, Loader2, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Research() {
  return (
    <section className="min-h-screen w-full bg-black relative overflow-hidden flex flex-col items-center justify-center">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px]"></div>
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 max-w-2xl px-6 text-center">
        {/* Icon Container */}
        <div className="mx-auto mb-8 w-20 h-20 rounded-2xl bg-gray-900/50 border border-cyan-500/20 flex items-center justify-center relative group">
          <div className="absolute inset-0 bg-cyan-500/10 blur-xl rounded-full animate-pulse"></div>
          <FlaskConical size={32} className="text-cyan-400 relative z-10" />
          <div className="absolute inset-0 border border-cyan-500/30 rounded-2xl animate-[spin_10s_linear_infinite]"></div>
        </div>
        
        {/* Title & Description */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/20 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] tracking-widest uppercase mb-6">
          <Loader2 size={12} className="animate-spin" />
          <span>Status: Knowledge_Acquisition</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Analysis <span className="text-cyan-500">Center</span>
        </h1>

        <p className="text-gray-400 font-mono text-sm leading-relaxed mb-10 max-w-lg mx-auto">
          This module is currently under a{" "}
          <span className="text-gray-200">learning and exploring phase</span>.
          Technical whitepapers and architectural studies will be documented as
          system knowledge expands.
        </p>

        {/* Action Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-cyan-500/50 px-6 py-3 rounded-lg font-mono text-xs transition-all duration-300 group"
        >
          <ChevronLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform text-cyan-500"
          />
          RETURN_TO_MAIN_SYSTEM
        </Link>
      </div>

      {/* Footer System Code */}
      <div className="absolute bottom-8 left-0 w-full text-center">
        <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em]">
          // Learning...
        </p>
      </div>
    </section>
  );
}
