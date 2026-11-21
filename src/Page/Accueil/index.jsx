import React from 'react'
import { Link } from 'react-router-dom'
import Heros from '../../Compenants/Heros'
import { ArrowRight } from '../../Compenants/Icons'
import { CRAFTS, FESTIVAL, STEPS, STRANDS } from '../../assets/Data/festival'
import stillForum from '../../assets/stills/reel-108.jpg'
import stillExpo from '../../assets/stills/reel-48.jpg'
import stillDemo from '../../assets/stills/reel-116.jpg'
import stillGala from '../../assets/stills/reel-64.jpg'

const STRAND_IMAGES = [stillForum, stillExpo, stillDemo, stillGala]

export default function Accueil() {
    return (
        <main id="contenu">
            <Heros />

            <section aria-labelledby="intro-title" className="wrap py-24 lg:py-36">
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
                    <h2 id="intro-title" className="display text-[clamp(2.5rem,5.6vw,5.25rem)] lg:col-span-8">
                        Un festival pour celles et ceux qui coordonnent, filment et font l'action.
                    </h2>
                    <div className="self-end lg:col-span-4">
                        <p className="text-lg leading-relaxed text-mute">
                            Pendant une semaine, le Ciné Action Festival met en lumière les métiers de la cascade et du
                            combat à l'écran. En son cœur, un concours de courts métrages d'action dont les finalistes
                            sont projetés lors de la soirée de gala.
                        </p>
                        <Link to="/about" className="link-arrow mt-6 text-paper hover:text-mute">
                            Le festival en détail
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section aria-labelledby="semaine-title" className="wrap pb-24 lg:pb-36">
                <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8">
                    <h2 id="semaine-title" className="display text-[clamp(2.25rem,4.5vw,4rem)]">
                        Une semaine, quatre temps
                    </h2>
                    <p className="text-sm text-mute-soft">Images extraites du showreel de Serge Crozon</p>
                </div>
                <ol>
                    {STRANDS.map((strand, i) => (
                        <li key={strand.title} className="grid gap-6 border-b border-line py-8 md:grid-cols-12 md:gap-8 lg:py-10">
                            <h3 className="display text-[clamp(2.5rem,4vw,3.75rem)] md:col-span-4">{strand.title}</h3>
                            <div className="md:col-span-8 lg:col-span-4">
                                <p className="text-lg font-semibold text-paper">{strand.lead}</p>
                                <p className="mt-3 max-w-prose text-base leading-relaxed text-mute">{strand.text}</p>
                            </div>
                            <img
                                src={STRAND_IMAGES[i]}
                                alt=""
                                loading="lazy"
                                className="aspect-video w-full object-cover md:col-span-8 md:col-start-5 lg:col-span-4 lg:col-start-auto"
                            />
                        </li>
                    ))}
                </ol>
            </section>

            <section aria-labelledby="concours-title" className="on-paper bg-paper text-ink">
                <div className="wrap py-24 lg:py-32">
                    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
                        <h2 id="concours-title" className="display text-[clamp(3.5rem,9vw,8rem)] lg:col-span-6">
                            Le concours
                        </h2>
                        <p className="self-end text-lg leading-relaxed text-mute-ink lg:col-span-6 lg:pb-3 xl:col-span-5 xl:col-start-8">
                            Réalisez un court métrage d'action de {FESTIVAL.filmDuration} sur un thème imposé. Le concours est
                            ouvert à toutes et à tous, jeunes espoirs et talents confirmés, autour d'une même passion : le
                            cinéma d'action.
                        </p>
                    </div>

                    <dl className="mt-16 grid gap-px border border-paper-line bg-paper-line sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            ['Durée', `${FESTIVAL.filmDuration} maximum`],
                            ['Thème', 'Imposé, dévoilé à l\'ouverture'],
                            ['Pour qui', 'Toutes et tous, seul ou en équipe'],
                            ['Envoi', 'Depuis votre espace personnel'],
                        ].map(([term, value]) => (
                            <div key={term} className="bg-paper p-6">
                                <dt className="text-sm text-mute-ink">{term}</dt>
                                <dd className="mt-2 text-xl font-semibold leading-snug">{value}</dd>
                            </div>
                        ))}
                    </dl>

                    <h3 className="mt-20 text-sm font-semibold">Les cinq étapes</h3>
                    <ol className="mt-6 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
                        {STEPS.map((step, i) => (
                            <li key={step.title} className="border-t border-ink pt-5">
                                <span className="font-display text-[3.5rem] leading-none text-signal">{i + 1}</span>
                                <h4 className="mt-4 text-xl font-semibold">{step.title}</h4>
                                <p className="mt-2 text-base leading-relaxed text-mute-ink">{step.text}</p>
                            </li>
                        ))}
                    </ol>

                    <div className="mt-16 flex flex-col gap-3 sm:flex-row">
                        <Link to="/inscription" className="btn-primary">
                            S'inscrire au concours
                            <ArrowRight />
                        </Link>
                        <Link to="/participer" className="btn-outline-dark">
                            Lire les conditions de participation
                        </Link>
                    </div>
                </div>
            </section>

            <section aria-labelledby="metiers-title" className="wrap py-24 lg:py-36">
                <h2 id="metiers-title" className="max-w-3xl text-xl font-semibold leading-snug text-paper sm:text-2xl">
                    Le festival récompense ceux qui coordonnent l'action, ceux qui la filment et ceux qui la font.
                </h2>
                <ul className="mt-12 border-t border-line">
                    {CRAFTS.map((craft) => (
                        <li key={craft.verb} className="grid gap-4 border-b border-line py-8 lg:grid-cols-12 lg:items-end lg:gap-8 lg:py-10">
                            <p className="display text-[clamp(3.5rem,9.5vw,8.5rem)] leading-[0.82] lg:col-span-7" aria-hidden="true">
                                {craft.verb}
                            </p>
                            <div className="lg:col-span-5 lg:pb-3">
                                <h3 className="text-lg font-semibold text-paper">
                                    <span className="sr-only">{craft.verb} : </span>
                                    {craft.who}
                                </h3>
                                <p className="mt-2 max-w-prose text-base leading-relaxed text-mute">{craft.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section aria-labelledby="gala-title" className="bg-signal text-white">
                <div className="wrap grid gap-10 py-20 lg:grid-cols-12 lg:items-end lg:gap-8 lg:py-28">
                    <h2 id="gala-title" className="display text-[clamp(3rem,7.5vw,6.5rem)] lg:col-span-7">
                        Votre film sur grand écran
                    </h2>
                    <div className="lg:col-span-5">
                        <p className="text-lg leading-relaxed text-white">
                            Les courts métrages finalistes sont projetés en compétition lors de la soirée de gala, en clôture
                            du festival.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
                            <Link to="/inscription" className="btn-dark">
                                Créer mon compte
                                <ArrowRight />
                            </Link>
                            <Link to="/faq" className="link-arrow text-white hover:text-white/80">
                                Questions fréquentes
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
