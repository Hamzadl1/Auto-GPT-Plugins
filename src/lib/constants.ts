export const FORM_FIELDS = [
  { name: "firstName", label: "PRÉNOM", placeholder: "Prénom", type: "text" as const },
  { name: "email", label: "EMAIL", placeholder: "Email", type: "email" as const },
  { name: "whatsapp", label: "WHATSAPP", placeholder: "Ton numéro WhatsApp", type: "tel" as const },
  {
    name: "interest",
    label: "FILIÈRE QUI T'INTÉRESSE",
    type: "select" as const,
    options: [
      "Business & Management",
      "Ingénierie & Tech (CS, AI, Data, Énergie)",
      "Sciences Humaines & Communication",
      "Je ne sais pas encore",
    ],
  },
] as const;

export const HERO_BADGES = [
  { icon: "Globe", text: "100% en anglais" },
  { icon: "Plane", text: "72% en échange international" },
  { icon: "Mountain", text: "Campus résidentiel à Ifrane" },
];

export const GALLERY_ITEMS = [
  { span: "col-span-2 row-span-2", alt: "Étudiants en cours", caption: "100% en anglais, dès le premier jour" },
  { span: "col-span-1", alt: "Club étudiant", caption: "60+ clubs étudiants" },
  { span: "col-span-1", alt: "Sport campus", caption: "Sport, compétitions, team spirit" },
  { span: "col-span-2", alt: "Campus panoramique", caption: "Ton campus. 4 ans ici." },
  { span: "col-span-1", alt: "Échange international", caption: "Semestre à l'étranger" },
  { span: "col-span-1", alt: "Bibliothèque", caption: "Les résultats se construisent ici" },
];

export const TESTIMONIALS = [
  {
    initials: "YK",
    name: "Yassine",
    program: "Business Administration, 4ème année",
    exchange: { flag: "🇫🇷", place: "Sciences Po Paris" },
    quote: "J'ai hésité entre AUI et partir en France. Finalement j'ai eu mon semestre à Sciences Po Paris ET un diplôme d'État marocain. Best of both worlds.",
  },
  {
    initials: "SB",
    name: "Salma",
    program: "Computer Science, 3ème année",
    exchange: { flag: "🇲🇦", place: "Ifrane Campus" },
    quote: "Quand je suis arrivée, mon anglais était moyen. Après deux ans ici, je pense en anglais. Le campus t'immerge complètement.",
  },
  {
    initials: "KM",
    name: "Karim",
    program: "General Engineering, diplômé 2024",
    exchange: { flag: "🇪🇸", place: "IE Madrid" },
    quote: "Le réseau AUI, c'est un truc que tu comprends après. Mes potes de promo sont à Barcelone, Montréal, Dubaï. On s'entraide encore.",
  },
];

export const DESTINATIONS = [
  { flag: "🇫🇷", name: "Sciences Po Paris" },
  { flag: "🇪🇸", name: "IE Madrid" },
  { flag: "🇨🇦", name: "McGill University" },
  { flag: "🇺🇸", name: "UC Berkeley" },
  { flag: "🇬🇧", name: "University of Edinburgh" },
  { flag: "🇩🇪", name: "TU Munich" },
  { flag: "🇰🇷", name: "Yonsei University" },
  { flag: "🇧🇷", name: "USP São Paulo" },
];

export const PROGRAMS = [
  {
    label: "BUSINESS",
    title: "Business & Management",
    accreditation: "EPAS",
    description: "Finance, marketing digital, management international, supply chain, entrepreneuriat, FinTech. Programme accrédité EPAS (EFMD).",
    impact: "→ Tu sors prêt pour la banque, le conseil, la tech ou ta propre boîte.",
  },
  {
    label: "ENGINEERING",
    title: "Ingénierie & Technologie",
    accreditation: "ABET",
    description: "Computer Science, General Engineering, Engineering & Management Sciences. Certifiés ABET. Spécialisations en AI, Data Analytics, Énergies Renouvelables.",
    impact: "→ Tu codes, tu construis, tu innoves. Et ton diplôme est reconnu partout.",
  },
  {
    label: "HUMANITIES",
    title: "Sciences Humaines & Sociales",
    accreditation: null,
    description: "Communication, études internationales, diplomatie, développement humain, médias digitaux.",
    impact: "→ Tu comprends le monde, tu sais en parler, et tu sais le changer.",
  },
];

export const LIFE_BLOCKS = [
  {
    icon: "Users",
    title: "60+ clubs",
    text: "Entrepreneuriat, débat, musique, photo, théâtre, robotique, sport, solidarité. Tu trouveras ta tribu.",
  },
  {
    icon: "Trophy",
    title: "Sport & compétitions",
    text: "Terrains de foot, basket, tennis, piscine, salle de sport. Des compétitions inter-universitaires. Le campus vit.",
  },
  {
    icon: "Home",
    title: "Tu vis sur campus",
    text: "Chambre, wifi, resto, bibliothèque ouverte tard — tout à 5 minutes à pied. Pas de trajet, pas de perte de temps.",
  },
  {
    icon: "Heart",
    title: "Ta communauté",
    text: "4,500+ étudiants. 30+ nationalités. Des amitiés qui durent toute la vie. Tu fais partie d'un réseau avant même d'être diplômé.",
  },
];

export const STATS = [
  { value: 4500, suffix: "+", label: "étudiants" },
  { value: 400, suffix: "+", label: "universités partenaires" },
  { value: 72, suffix: "%", label: "en échange" },
  { value: 30, suffix: "+", label: "nationalités" },
  { value: 95, suffix: "%", label: "en poste à 12 mois" },
];

export const FAQ_ITEMS = [
  {
    q: "Mon anglais n'est pas top. Je peux quand même postuler ?",
    a: "Oui. Un niveau correct est demandé à l'entrée, mais AUI propose un Intensive English Program pour ceux qui ont besoin de se renforcer. Et en quelques mois d'immersion sur un campus 100% anglais, ton niveau explose.",
  },
  {
    q: "Ifrane, c'est pas trop isolé ?",
    a: "Le campus est un monde en soi — résidences, sport, clubs, bibliothèque, événements. Tu ne t'ennuieras pas. Et Fès est à 1h, Meknès à 45 min. Des navettes régulières sont organisées.",
  },
  {
    q: "C'est cher ?",
    a: "AUI est une université publique, pas une école privée. Les frais sont compétitifs. Et surtout, des bourses de mérite sont attribuées chaque année sur dossier. Remplis le formulaire pour en savoir plus — un conseiller t'expliquera les options.",
  },
  {
    q: "Quel diplôme j'obtiens ?",
    a: "Un diplôme d'État délivré par une université publique marocaine, renforcé par des accréditations internationales (NECHE, ABET, EPAS). Il est reconnu au Maroc et accepté sans équivalence dans la majorité des pays.",
  },
  {
    q: "Je peux vraiment partir en échange ?",
    a: "72% des étudiants partent. Plus de 400 universités partenaires dans 50+ pays. Sciences Po, IE Madrid, McGill, et bien d'autres. Ton échange est intégré à ton cursus — tes crédits comptent.",
  },
  {
    q: "Comment postuler ?",
    a: "Remplis le formulaire en haut de cette page. On t'envoie le guide d'admission complet et un conseiller te recontacte sous 24h pour t'accompagner. C'est gratuit, c'est sans engagement.",
  },
];

export const NAV_LINKS = [
  { label: "La vie à AUI", href: "#campus-life" },
  { label: "Programmes", href: "#programs" },
  { label: "Échange international", href: "#exchange" },
  { label: "Admissions", href: "#hero" },
];

export const FOOTER_COLUMNS = [
  {
    title: "LA VIE À AUI",
    links: [
      { label: "Campus & résidences", href: "#campus-life" },
      { label: "Clubs & sport", href: "#campus-life" },
      { label: "Échange international", href: "#exchange" },
    ],
  },
  {
    title: "PROGRAMMES",
    links: [
      { label: "Business & Management", href: "#programs" },
      { label: "Ingénierie & Tech", href: "#programs" },
      { label: "Sciences Humaines", href: "#programs" },
    ],
  },
  {
    title: "ADMISSIONS",
    links: [
      { label: "Je postule", href: "#hero" },
      { label: "Contact admissions", href: "mailto:admissions@aui.ma" },
      { label: "WhatsApp", href: "https://wa.me/212535862000" },
    ],
  },
];
