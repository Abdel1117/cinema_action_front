import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../../assets/Data/festival'
import { Close, Menu } from '../Icons'

export function Logotype({ className = '' }) {
    return (
        <Link
            to="/"
            className={`font-display text-[1.375rem] uppercase leading-none tracking-[0.02em] text-paper ${className}`}
        >
            Ciné Action <span className="text-mute">Festival</span>
        </Link>
    )
}

export default function Header() {
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const overlay = location.pathname === '/'

    useEffect(() => {
        setOpen(false)
    }, [location.pathname])

    useEffect(() => {
        if (!open) return undefined
        const onKey = (e) => {
            if (e.key === 'Escape') setOpen(false)
        }
        document.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [open])

    const linkClass = ({ isActive }) =>
        `relative py-2 text-[0.9375rem] font-medium transition-colors duration-150 hover:text-paper ${
            isActive ? 'text-paper after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-signal' : 'text-paper/80'
        }`

    return (
        <header
            className={
                overlay
                    ? 'absolute inset-x-0 top-0 z-30'
                    : 'sticky top-0 z-30 border-b border-line bg-ink'
            }
        >
            <a
                href="#contenu"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
            >
                Aller au contenu
            </a>
            <div className="wrap flex h-20 items-center justify-between gap-8 lg:h-24">
                <Logotype />

                <nav aria-label="Navigation principale" className="hidden lg:block">
                    <ul className="flex items-center gap-9">
                        {NAV_LINKS.map((link) => (
                            <li key={link.to}>
                                <NavLink to={link.to} className={linkClass}>
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden items-center gap-7 lg:flex">
                    <NavLink to="/connexion" className={linkClass}>
                        Connexion
                    </NavLink>
                    <Link
                        to="/inscription"
                        className="inline-flex h-11 items-center bg-signal px-5 text-[0.9375rem] font-semibold text-white transition-colors duration-150 hover:bg-signal-hover"
                    >
                        S'inscrire
                    </Link>
                </div>

                <button
                    type="button"
                    className="-mr-2 inline-flex h-11 items-center gap-2 px-2 text-[0.9375rem] font-medium text-paper lg:hidden"
                    aria-expanded={open}
                    aria-controls="menu-mobile"
                    onClick={() => setOpen(true)}
                >
                    <Menu />
                    Menu
                </button>
            </div>

            {open && (
                <div
                    id="menu-mobile"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menu"
                    className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink lg:hidden"
                >
                    <div className="wrap flex h-20 shrink-0 items-center justify-between">
                        <Logotype />
                        <button
                            type="button"
                            className="-mr-2 inline-flex h-11 items-center gap-2 px-2 text-[0.9375rem] font-medium text-paper"
                            onClick={() => setOpen(false)}
                            autoFocus
                        >
                            <Close />
                            Fermer
                        </button>
                    </div>
                    <nav aria-label="Navigation principale" className="wrap mt-6 flex-1">
                        <ul className="border-t border-line">
                            {[{ to: '/', label: 'Accueil' }, ...NAV_LINKS].map((link) => (
                                <li key={link.to} className="border-b border-line">
                                    <NavLink
                                        to={link.to}
                                        end
                                        className={({ isActive }) =>
                                            `display block py-5 text-[2.75rem] ${isActive ? 'text-signal-text' : 'text-paper'}`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="wrap grid shrink-0 grid-cols-2 gap-3 py-8">
                        <Link to="/connexion" className="btn-outline">
                            Connexion
                        </Link>
                        <Link to="/inscription" className="btn-primary">
                            S'inscrire
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}
