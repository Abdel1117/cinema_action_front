import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../Compenants/PageHeader'
import { ArrowRight, ArrowUpRight, SocialIcon } from '../../Compenants/Icons'
import { FESTIVAL } from '../../assets/Data/festival'

const DEFAULT_LEAD =
    'Le formulaire de contact arrive bientôt. En attendant, retrouvez le festival et écrivez-nous sur les réseaux.'

export default function A_VENIR({ title = 'Contact', lead = DEFAULT_LEAD }) {
    return (
        <main id="contenu">
            <PageHeader title={title} lead={lead} />

            <section aria-labelledby="reseaux-title" className="wrap py-16 lg:py-24">
                <h2 id="reseaux-title" className="sr-only">
                    Réseaux sociaux
                </h2>
                <ul className="border-t border-line">
                    {FESTIVAL.social.map((s) => (
                        <li key={s.id} className="border-b border-line">
                            <a
                                href={s.href}
                                className="group flex items-center justify-between gap-6 py-7 transition-colors duration-150 hover:text-mute lg:py-9"
                            >
                                <span className="flex items-center gap-5 sm:gap-8">
                                    <SocialIcon id={s.id} className="h-7 w-7 shrink-0 sm:h-9 sm:w-9" />
                                    <span className="display text-[clamp(2.5rem,7vw,5.5rem)]">{s.label}</span>
                                </span>
                                <ArrowUpRight className="h-7 w-7 shrink-0 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="mt-16 flex flex-col gap-3 sm:flex-row">
                    <Link to="/faq" className="btn-outline">
                        Consulter la FAQ
                        <ArrowRight />
                    </Link>
                    <Link to="/" className="btn inline-flex text-mute hover:text-paper">
                        Retour à l'accueil
                    </Link>
                </div>
            </section>
        </main>
    )
}
