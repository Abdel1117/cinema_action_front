// Faits du festival utilisés sur tout le site.
// PROVISOIRE : les valeurs marquées « à confirmer » doivent être validées par l'organisation.

export const FESTIVAL = {
    name: "Ciné Action Festival",
    // Affiche les mentions « provisoire » sur le site. Passer à false une fois le règlement et les dates validés.
    provisional: true,
    // À confirmer : dates et lieu de la prochaine édition (null = « à annoncer »).
    edition: { dates: null, venue: null },
    // À confirmer : la page À propos dit 2 min 30, l'ancienne liste d'étapes disait 2 min 20.
    filmDuration: "2 min 30",
    // À confirmer : date d'ouverture des inscriptions (le compte à rebours s'y réfère).
    registrationOpens: "2027-02-01T10:00:00+01:00",
    // À confirmer : liens des réseaux sociaux (null = « bientôt », affiché sans lien).
    social: [
        { id: "instagram", label: "Instagram", href: null },
        { id: "youtube", label: "YouTube", href: null },
        { id: "facebook", label: "Facebook", href: null },
        { id: "x", label: "X (Twitter)", href: null },
    ],
};

export const NAV_LINKS = [
    { to: "/about", label: "Le festival" },
    { to: "/participer", label: "Participer" },
    { to: "/faq", label: "FAQ" },
    { to: "/a_venir", label: "Contact" },
];

// Les quatre pôles de la semaine (texte réel de la page À propos, reformulé).
export const STRANDS = [
    {
        title: "Forum",
        lead: "Les métiers de l'ombre",
        text: "Rencontres avec celles et ceux qui fabriquent l'action sans apparaître à l'écran : coordinateurs, cascadeurs, régleurs, techniciens.",
    },
    {
        title: "Exposition",
        lead: "Une cinématographie du monde",
        text: "Une exposition consacrée à l'une des nombreuses industries cinématographiques du monde et à sa manière de filmer l'action.",
    },
    {
        title: "Démonstrations",
        lead: "Une journée d'initiation",
        text: "Une journée pour voir comment se construit une scène d'action, puis s'y essayer, encadré par des professionnels.",
    },
    {
        title: "Gala",
        lead: "La soirée de clôture",
        text: "Projection des courts métrages finalistes en compétition et remise des prix.",
    },
];

// Les cinq étapes du concours (texte réel de la page À propos).
export const STEPS = [
    {
        title: "Inspiration",
        text: "Trouvez la bonne idée et les talents pour vous accompagner dans cette aventure.",
    },
    {
        title: "Inscription",
        text: "Créez un compte sur le site en quelques secondes pour recevoir toutes les informations sur le festival.",
    },
    {
        title: "Réalisation",
        text: "Préparez votre projet, organisez votre tournage et finalisez votre film, en respectant la durée et le thème imposé.",
    },
    {
        title: "Participation",
        text: "Envoyez votre film depuis votre espace personnel avant la date limite, puis complétez les informations sur l'œuvre, les sous-titres et l'équipe.",
    },
    {
        title: "Confirmation",
        text: "Une fois votre participation validée, vous recevez un e-mail avec la date de diffusion. Ensuite, c'est à vous de jouer.",
    },
];

// Les trois métiers récompensés (texte réel : « ceux qui les coordonnent, ceux qui les filment et ceux qui les font »).
export const CRAFTS = [
    {
        verb: "Coordonner",
        who: "Chorégraphes de combat et coordinateurs de cascades",
        text: "Ceux qui conçoivent l'action, règlent chaque enchaînement et garantissent la sécurité de toute l'équipe.",
    },
    {
        verb: "Filmer",
        who: "Réalisateurs, chefs opérateurs et cadreurs",
        text: "Ceux qui trouvent l'axe, le rythme et le montage qui rendent un coup lisible et une chute spectaculaire.",
    },
    {
        verb: "Faire",
        who: "Cascadeurs, combattants et comédiens",
        text: "Ceux qui exécutent l'action devant la caméra, prise après prise.",
    },
];
