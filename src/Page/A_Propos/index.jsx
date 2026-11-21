import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../Compenants/PageHeader'
import { ArrowRight } from '../../Compenants/Icons'
import { FESTIVAL, STRANDS } from '../../assets/Data/festival'
import reel from '../../assets/video/Serge_Crozon_presentation.mp4'
import poster from '../../assets/stills/reel-20.jpg'
import stillTatami from '../../assets/stills/reel-116.jpg'
import stillGym from '../../assets/stills/reel-136.jpg'

export default function About() {
    return (
        <main id="contenu">
            <PageHeader
                title="Le festival"
                lead="Une semaine entièrement consacrée au cinéma d'action, avec les arts martiaux au cœur, et un concours de courts métrages ouvert à toutes et à tous."
            />

            <section aria-labelledby="quoi-title" className="wrap py-20 lg:py-32">
                <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
                    <figure className="lg:col-span-5">
                        <img src={stillTatami} alt="Deux combattants répètent un enchaînement sur un tatami vert." className="aspect-[4/3] w-full object-cover" />
                        <figcaption className="mt-3 border-t border-line pt-3 text-sm text-mute">
                            Répétition sur tatami. Extrait du showreel de Serge Crozon.
                        </figcaption>
                    </figure>

                    <div className="lg:col-span-6 lg:col-start-7">
                        <h2 id="quoi-title" className="display text-[clamp(2.25rem,4.5vw,4rem)]">
                            Qu'est-ce que c'est ?
                        </h2>
                        <div className="mt-8 max-w-prose space-y-6 text-lg leading-relaxed text-paper/85">
                            <p>
                                Le Ciné Action Festival est une organisation exclusivement tournée vers le cinéma d'action.
                                L'événement se déroule sur une semaine, autour de quatre pôles bien distincts : un forum des
                                métiers de l'ombre du cinéma, une exposition sur l'une des nombreuses industries
                                cinématographiques du monde, une journée de démonstration et d'initiation aux scènes d'action,
                                et une soirée de gala en clôture, avec la projection des courts métrages finalistes en
                                compétition.
                            </p>
                            <p>
                                Le festival a vocation à mettre en lumière les métiers de la cascade, en remettant des prix à
                                ceux qui coordonnent l'action, à ceux qui la filment et à ceux qui la font.
                            </p>
                            <p>
                                Le principe du concours : réaliser un film d'action court, d'une durée de{' '}
                                {FESTIVAL.filmDuration}, sur un thème imposé. Il est ouvert à toutes et à tous, jeunes espoirs
                                et talents confirmés, autour d'une même passion : le cinéma d'action.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section aria-labelledby="poles-title" className="border-t border-line">
                <div className="wrap py-20 lg:py-32">
                    <h2 id="poles-title" className="display text-[clamp(2.25rem,4.5vw,4rem)]">
                        Quatre pôles
                    </h2>
                    <ul className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
                        {STRANDS.map((strand) => (
                            <li key={strand.title} className="bg-ink p-8 lg:p-12">
                                <h3 className="display text-[clamp(2.5rem,4vw,3.5rem)]">{strand.title}</h3>
                                <p className="mt-6 text-lg font-semibold text-paper">{strand.lead}</p>
                                <p className="mt-2 max-w-prose text-base leading-relaxed text-mute">{strand.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section aria-labelledby="reel-title" className="border-t border-line">
                <div className="wrap py-20 lg:py-32">
                    <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
                        <h2 id="reel-title" className="display text-[clamp(2.25rem,4.5vw,4rem)] lg:col-span-7">
                            Le showreel de Serge Crozon
                        </h2>
                        <p className="text-base leading-relaxed text-mute lg:col-span-5">
                            Combats, chutes, poursuites : un aperçu du travail de cascade que le festival veut mettre en
                            lumière. Vidéo avec le son.
                        </p>
                    </div>
                    <figure className="mt-10">
                        <video className="aspect-video w-full bg-ink-raised" src={reel} poster={poster} controls preload="none" playsInline>
                            Votre navigateur ne peut pas lire cette vidéo.
                        </video>
                        <figcaption className="mt-3 border-t border-line pt-3 text-sm text-mute">
                            Showreel de Serge Crozon, 2 min 30.
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section aria-labelledby="questions-title" className="on-paper bg-paper text-ink">
                <div className="wrap grid gap-10 py-20 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-24">
                    <img src={stillGym} alt="" className="aspect-video w-full object-cover lg:col-span-5" loading="lazy" />
                    <div className="lg:col-span-6 lg:col-start-7">
                        <h2 id="questions-title" className="display text-[clamp(2.5rem,5vw,4.5rem)]">
                            D'autres questions ?
                        </h2>
                        <p className="mt-5 max-w-prose text-lg leading-relaxed text-mute-ink">
                            Durée, thème, droits musicaux, sécurité sur le tournage : les réponses sont dans la foire aux
                            questions.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link to="/faq" className="btn-dark">
                                Consulter la FAQ
                                <ArrowRight />
                            </Link>
                            <Link to="/participer" className="btn-outline-dark">
                                Conditions de participation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
