import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Akhawayn University — Admissions Parents | Fall 2026",
  description:
    "Découvrez pourquoi Al Akhawayn University est le meilleur choix pour votre enfant. Université publique, diplôme d'État, accréditations NECHE, ABET, EPAS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
