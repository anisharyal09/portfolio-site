import React, { useState, useEffect } from "react";
import { Menu, X, Cpu, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const navItems = ["Home", "Education", "Skills", "Analysis", "Extensions"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        open
          ? "bg-black border-white/5"
          : scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-cyan-900/30 py-4 shadow-lg"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 relative z-50">
        {/* --- LOGO --- */}
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setOpen(false)}
        >
          <div className="relative flex items-center justify-center w-10 h-10 bg-cyan-950/30 border border-cyan-500/30 rounded-lg group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
            <Cpu size={20} className="text-cyan-400" />
            <div className="absolute -top-px -left-px w-2 h-2 border-t border-l border-cyan-500 opacity-50"></div>
            <div className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-cyan-500 opacity-50"></div>
          </div>

          <div className="flex flex-col">
            <span className="text-white font-bold tracking-wide text-sm font-mono group-hover:text-cyan-400 transition-colors">
              ARYAL<span className="text-cyan-500">_</span>SYSTEMS
            </span>
            <span className="text-[10px] text-cyan-500 font-mono">v.4.0</span>
          </div>
        </Link>

        {/* --- DESKTOP NAV --- */}
        <div className="hidden lg:flex w-full absolute inset-x-0 justify-center pointer-events-none">
          <nav className="group flex items-center bg-[#1a1a1a]/70 backdrop-blur-sm p-2 rounded-full border border-white/5 shadow-[0_0_20px_rgba(6,182,212,0.4)] pointer-events-auto transition-all duration-300">
            {navItems.map((item) => (
              <Link
                key={item}
                to={"/" + item.toLowerCase()}
                className="px-4 py-2 mx-1 text-gray-300 text-sm font-mono tracking-wide rounded-full hover:bg-cyan-500/10 hover:text-white transition-colors duration-150 cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* --- RIGHT SIDE GROUP --- */}
        <div className="flex items-center gap-4">
          {/* Desktop/Tablet CTA */}
          <Link
            to="/getintouch"
            className="hidden md:block bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 hover:text-cyan-300 px-6 py-2.5 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] font-mono text-xs font-bold tracking-widest uppercase cursor-pointer"
          >
            Get in Touch
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-gray-200 hover:text-cyan-400 transition-colors relative z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE FULLSCREEN MENU DRAWER --- */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 transition-transform duration-300 lg:hidden flex flex-col items-center justify-start pt-24 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-lg mx-auto p-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item}
              to={"/" + item.toLowerCase()}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between py-4 border-b border-white/10 text-xl font-mono text-gray-300 hover:text-white transition-all cursor-pointer"
            >
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                {item}
              </span>
              <ChevronRight
                size={20}
                className="text-cyan-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              />
            </Link>
          ))}

          {/* Mobile CTA inside Drawer */}
          <Link
            to="/getintouch"
            onClick={() => setOpen(false)}
            className="mt-8 w-full bg-cyan-900/20 border border-cyan-500/50 text-cyan-400 font-mono font-bold py-4 rounded hover:bg-cyan-500/20 transition-all uppercase tracking-widest text-sm shadow-[0_0_15px_rgba(6,182,212,0.1)] text-center md:hidden cursor-pointer"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
