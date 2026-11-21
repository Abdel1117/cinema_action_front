import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../Compenants/PageHeader'
import Provisional from '../../Compenants/Provisional'
import YouTubeEmbed from '../../Compenants/Cookies/YouTubeEmbed'
import still from '../../assets/stills/reel-116.jpg'
import { ArrowRight } from '../../Compenants/Icons'
import { FESTIVAL } from '../../assets/Data/festival'

// PROVISOIRE : conditions et spécifications rédigées comme base de travail, à valider dans le règlement officiel.
const RULES = [
    ['Durée', `${FESTIVAL.filmDuration} maximum, génériques compris. Un film plus long n'est pas retenu.`],
    ['Thème', 'Imposé et identique pour tous. Il est dévoilé à l\'ouverture des inscriptions.'],
    ['Pour qui', 'Ouvert à toutes et à tous, jeunes espoirs et talents confirmés. Les mineurs participent avec l\'accord d\'un représentant légal.'],
    ['En équipe', 'Seul ou en collectif. Une personne crée le compte et reste le contact principal du film.'],
    ['Un film', 'Un seul film par personne inscrite, réalisé spécialement pour le concours.'],
    ['Sécurité', 'Combats et cascades répétés et encadrés par une personne expérimentée. Armes réelles interdites sur le tournage.'],
    ['Droits', 'Musiques, images et marques utilisées doivent être libres de droits ou autorisées par écrit.'],
]

const SPECS = [
    {
        title: 'Vidéo',
        rows: [
            ['Fichier', 'MP4 ou MOV'],
            ['Codec', 'H.264 ou Apple ProRes 422'],
            ['Définition', '1920 × 1080 minimum, 4K accepté'],
            ['Cadence', '24, 25 ou 30 images/s, constante'],
            ['Format', '16:9, ou 2,39:1 avec bandes noires'],
        ],
    },
    {
        title: 'Son',
        rows: [
            ['Canaux', 'Stéréo 2.0'],
            ['Échantillonnage', '48 kHz, 24 bits'],
            ['Niveau', '-23 LUFS intégrés (EBU R128)'],
            ['Crête', '-1 dBTP maximum'],
            ['Langue', 'Libre, sous-titrée en français'],
        ],
    },
    {
        title: 'Sous-titres',
        rows: [
            ['Fichier', '.srt séparé, non incrusté'],
            ['Langues', 'Français obligatoire, anglais conseillé'],
            ['Encodage', 'UTF-8'],
            ['Lignes', '2 lignes maximum'],
            ['Longueur', '42 caractères par ligne maximum'],
        ],
    },
]

export default function Participer() {
    return (
        <main id="contenu">
            <PageHeader
                title="Participer"
                lead={`Un court métrage d'action de ${FESTIVAL.filmDuration}, sur un thème imposé. Voici ce qu'il faut savoir avant de tourner.`}
            >
                <Link to="/inscription" className="btn-primary mt-8">
                    S'inscrire au concours
                    <ArrowRight />
                </Link>
            </PageHeader>

            <section aria-labelledby="regles-title" className="wrap py-20 lg:py-32">
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32">
                            <h2 id="regles-title" className="display text-[clamp(2.25rem,4.5vw,4rem)]">
                                Les conditions
                            </h2>
                            <p className="mt-5 max-w-sm text-base leading-relaxed text-mute">
                                L'essentiel du règlement. Le règlement complet fait foi et doit être accepté lors de
                                l'inscription.
                            </p>
                            <Provisional className="mt-6">Règlement provisoire, en cours de validation par l'organisation.</Provisional>
                        </div>
                    </div>
                    <dl className="border-t border-line lg:col-span-8">
                        {RULES.map(([term, text]) => (
                            <div key={term} className="grid gap-2 border-b border-line py-6 sm:grid-cols-8 sm:gap-8 lg:py-8">
                                <dt className="text-lg font-semibold text-paper sm:col-span-2">{term}</dt>
                                <dd className="max-w-prose text-lg leading-relaxed text-mute sm:col-span-6">{text}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            <section aria-labelledby="specs-title" className="on-paper bg-paper text-ink">
                <div className="wrap py-20 lg:py-32">
                    <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
                        <h2 id="specs-title" className="display text-[clamp(2.25rem,4.5vw,4rem)] lg:col-span-7">
                            Spécifications techniques
                        </h2>
                        <div className="lg:col-span-5">
                            <p className="text-base leading-relaxed text-mute-ink">
                                Un fichier conforme passe directement en projection. Les valeurs définitives figurent dans
                                le règlement officiel.
                            </p>
                            <Provisional tone="light" className="mt-4">Spécifications provisoires, en cours de validation.</Provisional>
                        </div>
                    </div>
                    <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
                        {SPECS.map((group) => (
                            <section key={group.title} aria-labelledby={`spec-${group.title}`}>
                                <h3 id={`spec-${group.title}`} className="border-b border-ink pb-4 text-2xl font-semibold">
                                    {group.title}
                                </h3>
                                <dl>
                                    {group.rows.map(([term, value]) => (
                                        <div key={term} className="border-b border-paper-line py-4">
                                            <dt className="text-sm text-mute-ink">{term}</dt>
                                            <dd className="mt-1 text-base font-medium">{value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </section>
                        ))}
                    </div>
                </div>
            </section>

            <section aria-labelledby="exemple-title" className="wrap py-20 lg:py-32">
                <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
                    <h2 id="exemple-title" className="display text-[clamp(2.25rem,4.5vw,4rem)] lg:col-span-7">
                        Un exemple pour vous aider
                    </h2>
                    <p className="text-base leading-relaxed text-mute lg:col-span-5">
                        Rythme, lisibilité des coups, travail de la caméra : regardez comment l'action se construit avant
                        d'écrire la vôtre.
                    </p>
                </div>
                <figure className="mt-10">
                    <YouTubeEmbed id="53rv31Bc5HM" title="Présentation de Serge Crozon" poster={still} />
                    <figcaption className="mt-3 border-t border-line pt-3 text-sm text-mute">
                        Présentation de Serge Crozon, sur YouTube.
                    </figcaption>
                </figure>
            </section>

            <section aria-labelledby="pret-title" className="border-t border-line">
                <div className="wrap flex flex-col gap-8 py-20 lg:flex-row lg:items-end lg:justify-between lg:py-28">
                    <h2 id="pret-title" className="display text-[clamp(3rem,7vw,6rem)]">
                        Prêt à tourner ?
                    </h2>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
                        <Link to="/inscription" className="btn-primary">
                            S'inscrire au concours
                            <ArrowRight />
                        </Link>
                        <Link to="/faq" className="link-arrow text-paper hover:text-mute">
                            Questions fréquentes
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
