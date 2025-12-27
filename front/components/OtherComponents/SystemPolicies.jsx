// NOTE: The policies are mentioned for just, but applied after integrating backend, no data is collected until the backend is integrated.

import React from "react";
import {
  Shield,
  FileText,
  Lock,
  ChevronRight,
  ChevronLeft,
  Cpu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

// PolicyContent Helper Component
const PolicyContent = ({ id, title, content }) => (
  <div id={id} className="pt-8 border-t border-gray-800/50">
    <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
      {title}
    </h2>
    <div className="text-gray-400 font-mono text-sm leading-relaxed">
      {content}
    </div>
  </div>
);

// Policy Data
const policySections = [
  {
    id: "privacy",
    icon: Lock,
    title: "Privacy Policy",
    description:
      "Our commitment to protecting your data and maintaining anonymity.",
    status: "ACTIVE / v0.0",
  },
  {
    id: "terms",
    icon: FileText,
    title: "Terms of Use",
    description:
      "Simple rules for using the system and intellectual property rights.",
    status: "ACTIVE / v0.0",
  },
  {
    id: "security",
    icon: Shield,
    title: "Security & Integrity",
    description: "How we protect the system and ensure data safety.",
    status: "ACTIVE / v0.0",
  },
];

// SystemPolicies Main Component
export default function SystemPolicies({ onClose }) {
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-16 pb-16">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-6 right-6 z-[101] text-white hover:text-red-400 transition-colors bg-gray-900/50 p-2 rounded-full border border-white/10"
        >
          <X size={24} />
        </button>

        {/* === HEADER BLOCK === */}
        <div className="border-b border-cyan-700/50 pb-6 mb-10 mt-8">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-2">
            <Cpu size={16} />
            <span>./SYSTEM/PROTOCOLS</span>
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">
            System <span className="text-cyan-400">Policies</span>
          </h1>
          <p className="mt-2 text-gray-500 font-mono text-sm">
            Core rules and frameworks for system interaction.
          </p>
        </div>

        {/* === POLICY NAVIGATION/INDEX === */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {policySections.map((section) => (
            <div
              key={section.id}
              onClick={() => handleScrollToSection(section.id)}
              className="group bg-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 p-5 rounded-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
            >
              <section.icon
                size={24}
                className="text-cyan-400 mb-3 group-hover:text-white transition-colors"
              />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                {section.title}
              </h3>
              <p className="text-xs text-gray-400 font-mono leading-relaxed">
                {section.description}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[10px] font-mono text-green-400">
                  STATUS: {section.status}
                </span>
                <ChevronRight
                  size={14}
                  className="text-cyan-500 transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </div>
          ))}
        </div>

        {/* --- DYNAMIC POLICY CONTENT SECTIONS --- */}
        <div className="space-y-12">
          {/* 1. PRIVACY POLICY */}
          <PolicyContent
            id="privacy"
            title="A. Privacy Policy"
            content={
              <>
                <p className="mb-4 text-red-400 font-extrabold tracking-wide">
                  // CRITICAL WARNING: NO PERSONAL DATA IS COLLECTED.
                </p>
                <p className="mb-4">
                  <strong className="text-gray-200">
                    [2.1] Data Collection:
                  </strong>{" "}
                  This system does not collect or log personal data, including
                  IP addresses, specific locations, or user identification
                  beyond anonymous session time. We only log anonymous
                  interaction to ensure site function and optimize speed.
                </p>
                <p className="mb-4">
                  <strong className="text-gray-200">[2.2] Cookie Usage:</strong>{" "}
                  We use minimal, essential cookies only to remember basic
                  preferences and maintain session stability. This data is never
                  shared.
                </p>
                <p className="mb-4">
                  <strong className="text-gray-200">
                    [2.3] Contact Module:
                  </strong>{" "}
                  If you use the 'Get in Touch' form, the name and email you
                  provide, will be stored, only for the purpose of replying to
                  your message.
                </p>
              </>
            }
          />

          {/* 2. TERMS OF USE */}
          <PolicyContent
            id="terms"
            title="B. Terms of Use"
            content={
              <>
                <p className="mb-4">
                  <strong className="text-gray-200">
                    [3.1] System Access:
                  </strong>{" "}
                  You can access this system "as is." We do not guarantee
                  constant uptime and may perform maintenance at any time.
                </p>
                <p className="mb-4">
                  <strong className="text-gray-200">
                    [3.2] Unauthorized Use:
                  </strong>{" "}
                  Do not attempt to modify or hack the system. Any malicious
                  activity is logged and strictly prohibited.
                </p>
                <p className="mb-4">
                  <strong className="text-gray-200">
                    [3.3] Intellectual Property:
                  </strong>{" "}
                  All unique code and custom design elements belong to Anish
                  Aryal ({new Date().getFullYear()}). This system utilizes and
                  credits open-source libraries, including React, Tailwind CSS,
                  Lucide Icons, under their respective licenses. Reproduction of
                  custom work requires explicit written permission.
                </p>
              </>
            }
          />

          {/* 3. SECURITY PROTOCOL */}
          <PolicyContent
            id="security"
            title="C. Security & Integrity"
            content={
              <>
                <p className="mb-4">
                  <strong className="text-gray-200">[5.1] Transmission:</strong>{" "}
                  Data sent through the contact form is encrypted using secure
                  TLS/SSL protocols.
                </p>
                <p className="mb-4">
                  <strong className="text-gray-200">
                    [5.2] Vulnerabilities:
                  </strong>{" "}
                  We check for and patch security issues regularly.
                </p>
                <p className="mb-4">
                  <strong className="text-gray-200">
                    [5.3] Responsibility:
                  </strong>{" "}
                  You are responsible for securing your own device. We are not
                  liable for any issues on your end.
                </p>
              </>
            }
          />
        </div>

        {/* Action Button */}
        <div>
          <div className="mt-16 text-center">
            <button
              onClick={() => handleScrollToSection("privacy")}
              className="inline-flex items-center gap-2 text-cyan-500 font-mono text-sm hover:text-white transition-colors"
            >
              <ChevronRight size={16} className="rotate-[-90deg]" />
              RETURN TO SYSTEM INDEX
            </button>
          </div>

          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-white bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-cyan-500/50 px-6 py-3 rounded-lg font-mono text-xs transition-all duration-300 group"
          >
            <ChevronLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform text-cyan-500"
            />
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
