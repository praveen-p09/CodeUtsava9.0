import React from "react";
import { Link } from "react-router-dom";
import { FiDownload as Download, FiMessageSquare as MessageSquare } from "react-icons/fi";

const NavItem = ({ children, to = "#" }) => (
  <Link
    to={to}
    className="px-4 py-2 rounded-md text-sm tracking-wide transition hover:opacity-90"
  >
    {children}
  </Link>
);

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 p-[1px] rounded-2xl" style={{ backgroundImage: "var(--brand-grad)" }}>
          <nav className="rounded-[14px] bg-black/70 border border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,.35)]">
            <div className="flex items-center justify-between px-4 py-3">
              {/* left: logo */}
              <Link to="/" className="font-arcade text-lg drop-shadow">
                <span className="bg-black/40 px-3 py-2 rounded-md border border-white/10">CC</span>
              </Link>

              {/* center: nav */}
              <div className="hidden md:flex items-center gap-2 bg-white/5 rounded-xl px-2 py-1">
                <NavItem to="/">HOME</NavItem>
                <NavItem to="/about">ABOUT US</NavItem>
                <NavItem to="/faq">FAQ</NavItem>
                <NavItem to="/events">EVENTS</NavItem> {/* 👈 This will load EventsPage */}
                <NavItem to="/contact">CONTACT US</NavItem>
                <NavItem to="/team">TEAM</NavItem>
              </div>

              {/* right: actions */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 text-white font-semibold px-4 py-2 rounded-xl transition hover:opacity-90"
                  style={{ background: "var(--color-accent)" }}
                >
                  <MessageSquare className="shrink-0" /> FEEDBACK
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-black font-semibold px-4 py-2 rounded-xl transition hover:opacity-90"
                  style={{ background: "var(--color-accent-2)" }}
                >
                  <Download className="shrink-0" /> BROCHURE
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
