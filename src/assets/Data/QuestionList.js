// PROVISOIRE : réponses rédigées comme base de travail, à valider par l'organisation.

export const QuestionGroups = [
    {
        id: "concours",
        title: "Le concours",
        questions: [
            {
                id: "qui",
                question: "Qui peut participer ?",
                reponse: "Le concours est ouvert à toutes et à tous, jeunes espoirs comme talents confirmés, seuls ou en équipe. Si vous êtes un collectif, une seule personne crée le compte et devient le contact principal du film.",
            },
            {
                id: "mineur",
                question: "Je suis mineur, puis-je m'inscrire ?",
                reponse: "Oui, avec l'accord écrit d'un parent ou d'un représentant légal, qui vous sera demandé lors de l'envoi du film.",
            },
            {
                id: "nombre",
                question: "Combien de films puis-je présenter ?",
                reponse: "Un film par personne inscrite. Vous pouvez en revanche apparaître dans l'équipe d'autres films en compétition.",
            },
            {
                id: "prix",
                question: "Qu'est-ce qui est récompensé ?",
                reponse: "Le festival met en lumière les métiers de l'action : les prix distinguent ceux qui coordonnent l'action, ceux qui la filment et ceux qui l'exécutent.",
            },
        ],
    },
    {
        id: "film",
        title: "Le film",
        questions: [
            {
                id: "duree",
                question: "Quelle doit être la durée du film ?",
                reponse: "2 min 30 au maximum, génériques compris. Un film plus long ne pourra pas être retenu.",
            },
            {
                id: "theme",
                question: "Quand le thème imposé est-il annoncé ?",
                reponse: "Le thème est dévoilé à l'ouverture des inscriptions et envoyé par e-mail à toutes les personnes inscrites.",
            },
            {
                id: "arts-martiaux",
                question: "Mon film doit-il obligatoirement contenir des arts martiaux ?",
                reponse: "Les arts martiaux sont au cœur du festival, mais toute forme d'action est la bienvenue : combat, cascade, poursuite. Le jury regarde avant tout la qualité de l'action et la façon dont elle sert le thème.",
            },
            {
                id: "musique",
                question: "Puis-je utiliser une musique existante ?",
                reponse: "Seulement si vous en détenez les droits ou si elle est libre de droits. Gardez la preuve des autorisations : elle pourra vous être demandée.",
            },
            {
                id: "securite",
                question: "Quelles règles de sécurité sur le tournage ?",
                reponse: "Les scènes de combat et de cascade doivent être répétées et encadrées par une personne expérimentée. Les armes réelles sont interdites ; utilisez des accessoires factices.",
            },
        ],
    },
    {
        id: "inscription",
        title: "Inscription et envoi",
        questions: [
            {
                id: "payant",
                question: "L'inscription est-elle payante ?",
                reponse: "Les modalités seront précisées à l'ouverture des inscriptions. Créez votre compte dès maintenant pour être prévenu.",
            },
            {
                id: "envoi",
                question: "Comment envoyer mon film ?",
                reponse: "Depuis votre espace personnel, avant la date limite. Vous complétez ensuite les informations sur l'œuvre, les sous-titres et l'équipe.",
            },
            {
                id: "confirmation",
                question: "Comment savoir si mon film est accepté ?",
                reponse: "Une fois votre participation validée, vous recevez un e-mail qui vous indique la date de diffusion de votre film.",
            },
        ],
    },
];
