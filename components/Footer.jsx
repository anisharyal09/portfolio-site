import React from "react";
import { Code, Copyright } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer({ onShowPolicies }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black py-8 border-t border-cyan-900/50 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        
        {/* === LEFT: BRANDING / COPYRIGHT === */}
        <div className="flex items-center gap-2 text-gray-500 font-mono text-xs">
          <Copyright size={14} className="text-cyan-400" />
          <span>{currentYear} ANISH ARYAL // ARYAL_SYSTEMS</span>
        </div>

        {/* === RIGHT: UTILITY BAR === */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-gray-600">
          
          {/* 1. UTILITY LINK 1: Contact Module */}
          <Link
            to="/getintouch"
            className="font-mono text-[10px] uppercase tracking-wider hover:text-white transition-colors"
          >
            Contact Module
          </Link>

          <span className="text-gray-700 hidden sm:block">|</span>

          {/* 2. UTILITY LINK 2: System Policies*/}
          <a
            // Prevent the browser from trying to navigate away
            onClick={(e) => {
              e.preventDefault();
              onShowPolicies();
            }}
            className="font-mono text-[10px] uppercase tracking-wider hover:text-white transition-colors cursor-pointer"
          >
            System Policies
          </a>

          <span className="text-gray-700 hidden sm:block">|</span>

          {/* 3. BUILD INFO / CREDITS */}
          <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-gray-400">
            Built with
            <Code size={12} className="text-cyan-400" />
            React & Tailwind, aided by Gemini
          </span>
        </div>
      </div>
    </footer>
  );
}
