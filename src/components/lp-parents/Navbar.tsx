"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-aui-green-dark/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="text-white font-display text-xl font-bold tracking-tight">
          AUI
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 hover:text-white transition-colors font-body"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={scrollToForm}
          className={`hidden lg:block text-sm font-semibold px-5 py-2.5 rounded-xl transition-all ${
            scrolled
              ? "bg-white text-aui-green-dark hover:bg-aui-cream"
              : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
          }`}
        >
          Demander le guide d&apos;admission
        </button>

        {/* Mobile: CTA + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={scrollToForm}
            className="text-xs font-semibold px-4 py-2 rounded-lg bg-white text-aui-green-dark"
          >
            Guide
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-1"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-aui-green-dark/95 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/80 hover:text-white py-2 text-sm font-body"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
