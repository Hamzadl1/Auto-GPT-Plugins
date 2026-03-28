"use client";

import { FOOTER_COLUMNS, ACCREDITATIONS } from "@/lib/constants";

export default function Footer() {
  const columns = [
    FOOTER_COLUMNS.institution,
    FOOTER_COLUMNS.academic,
    FOOTER_COLUMNS.admissions,
  ];

  return (
    <footer className="bg-aui-green-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="space-y-4">
            <h3 className="text-white font-display text-xl font-bold">
              Al Akhawayn University
            </h3>
            <p className="text-sm text-white/60 font-body leading-relaxed">
              Université publique fondée par Dahir Royal. Diplôme d&apos;État
              reconnu au Maroc et à l&apos;international.
            </p>
            {/* Accreditation logos */}
            <div className="flex items-center gap-4 pt-2">
              {ACCREDITATIONS.map((acc) => (
                <div
                  key={acc.name}
                  className="text-xs text-white/40 font-body font-semibold"
                >
                  {acc.name}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-body">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors font-body"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-xs text-white/40 font-body text-center">
            © Al Akhawayn University 2026 · Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
