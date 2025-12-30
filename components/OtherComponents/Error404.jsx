import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, Send, Zap } from 'lucide-react';

export default function Error404() {
  return (
    <section className="relative w-full min-h-screen pt-24 pb-16 flex flex-col items-center justify-center text-center bg-black overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black to-indigo-900/10 opacity-70"></div>
      
      {/* Subtle Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

      {/* --- MAIN ERROR CONTENT --- */}
      <div className="relative z-10 w-full max-w-xl p-8 bg-gray-950/70 border border-red-500/20 rounded-lg shadow-[0_0_40px_rgba(239,68,68,0.2)]">
        
        {/* --- ERROR CODE DISPLAY --- */}
        <div className="inline-flex items-center gap-2 text-red-500 font-mono text-xl tracking-widest mb-4 uppercase typewriter-text">
            <AlertTriangle size={24} className="fill-red-500/30"/>
            <span>// ERROR: 404</span>
        </div>

        {/* --- MESSAGE --- */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4">
          <span className="text-red-500 opacity-80">FILE</span> NOT FOUND
        </h1>
        
        <p className="text-gray-400 mt-6 mb-8 max-w-md mx-auto font-mono text-sm">
          ACCESS DENIED: The system was unable to locate the requested data stream. 
          The specified path does not exist on the current network architecture.
        </p>

        {/* --- ACTIONS --- */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            
            <Link
              to="/"
              className="px-6 py-3 bg-cyan-900/40 border border-cyan-500/50 text-cyan-400 font-mono text-xs hover:bg-cyan-500/20 active:scale-[.98] transition-all uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Home size={16} /> RETURN_TO_ROOT
            </Link>

            <Link
              to="/getintouch"
              className="px-6 py-3 bg-gray-700/40 border border-white/20 text-gray-300 font-mono text-xs hover:bg-gray-700/60 active:scale-[.98] transition-all uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Send size={16} /> REPORT_ISSUE
            </Link>
        </div>
      </div>
      
      {/* --- FOOTER STATUS --- */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 cursor-default">
          <Zap size={12} className="text-yellow-400 animate-pulse" />
          <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">
            SYSTEM_STATUS: ERROR_DETECTED
          </span>
      </div>
    </section>
  );
}