import { FOOTER_COLUMNS } from "../../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-aui-green-dark text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14">
        <div className="mb-10">
          <p className="font-display font-bold text-lg mb-2">
            Al Akhawayn University
          </p>
          <p className="text-white/50 text-sm">
            Université publique · Diplôme d'État · NECHE · ABET · EPAS
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold tracking-wider text-white/40 mb-4 uppercase">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                      {...(link.href.startsWith("http") || link.href.startsWith("mailto:")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-white/30 text-xs">
            © Al Akhawayn University 2026 · Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
