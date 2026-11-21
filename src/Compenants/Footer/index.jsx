import React from 'react'
import { Link } from 'react-router-dom'
import { FESTIVAL, NAV_LINKS } from '../../assets/Data/festival'
import { SocialIcon } from '../Icons'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="border-t border-line bg-ink">
            <div className="wrap grid gap-14 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
                <div className="lg:col-span-6">
                    <p className="display text-[clamp(3rem,7vw,6rem)] text-paper">
                        Ciné Action
                        <br />
                        <span className="text-mute-soft">Festival</span>
                    </p>
                    <p className="mt-6 max-w-sm text-base leading-relaxed text-mute">
                        Le festival du court métrage d'action, arts martiaux au cœur.
                    </p>
                </div>

                <nav aria-label="Pied de page" className="lg:col-span-3">
                    <h2 className="text-sm font-semibold text-paper">Le site</h2>
                    <ul className="mt-5 space-y-3">
                        {[...NAV_LINKS, { to: '/inscription', label: 'Inscription' }, { to: '/connexion', label: 'Connexion' }].map((link) => (
                            <li key={link.to}>
                                <Link to={link.to} className="text-base text-mute transition-colors duration-150 hover:text-paper">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="lg:col-span-3">
                    <h2 className="text-sm font-semibold text-paper">Suivre le festival</h2>
                    <ul className="mt-5 space-y-3">
                        {FESTIVAL.social.map((s) => (
                            <li key={s.id}>
                                <a
                                    href={s.href}
                                    className="inline-flex items-center gap-3 text-base text-mute transition-colors duration-150 hover:text-paper"
                                >
                                    <SocialIcon id={s.id} className="h-4 w-4" />
                                    {s.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-line">
                <div className="wrap flex flex-col gap-4 py-6 text-sm text-mute-soft md:flex-row md:items-center md:justify-between">
                    <p>© {year} {FESTIVAL.name}</p>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                        <li>
                            <Link to="/mentions-legales" className="transition-colors duration-150 hover:text-paper">Mentions légales</Link>
                        </li>
                        <li>
                            <Link to="/confidentialite" className="transition-colors duration-150 hover:text-paper">Politique de confidentialité</Link>
                        </li>
                        <li>
                            <Link to="/a_venir" className="transition-colors duration-150 hover:text-paper">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
