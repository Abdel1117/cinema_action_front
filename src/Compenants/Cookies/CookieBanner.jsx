import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useConsent } from './ConsentContext'

function Switch({ id, checked, onChange, disabled, labelledBy, describedBy }) {
    return (
        <button
            id={id}
            type="button"
            role="switch"
            aria-checked={checked}
            aria-labelledby={labelledBy}
            aria-describedby={describedBy}
            disabled={disabled}
            onClick={() => onChange && onChange(!checked)}
            className={`relative inline-flex h-7 w-12 shrink-0 items-center border transition-colors duration-200 disabled:cursor-not-allowed ${
                checked ? 'border-paper bg-paper' : 'border-line-strong bg-ink hover:border-mute-soft'
            } ${disabled ? 'opacity-60' : ''}`}
        >
            <span
                aria-hidden="true"
                className={`absolute top-1/2 h-[1.125rem] w-[1.125rem] -translate-y-1/2 transition-[left,background-color] duration-200 ease-out ${
                    checked ? 'left-[1.5rem] bg-ink' : 'left-[0.25rem] bg-mute-soft'
                }`}
            />
        </button>
    )
}

export default function CookieBanner() {
    const { panel, decided, choices, acceptAll, refuseAll, save, openSettings, backToBanner } = useConsent()
    const [youtube, setYoutube] = useState(choices.youtube)
    const titleRef = useRef(null)
    const settings = panel === 'settings'

    useEffect(() => {
        if (settings) {
            setYoutube(choices.youtube)
            if (titleRef.current) titleRef.current.focus()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settings])

    useEffect(() => {
        if (!settings) return undefined
        const onKey = (e) => {
            if (e.key === 'Escape') backToBanner()
        }
        document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [settings, backToBanner])

    if (panel === 'closed') return null

    return (
        <section
            aria-labelledby="cookies-title"
            className="cookie-in fixed inset-x-0 bottom-0 z-[35] p-3 sm:p-4 lg:inset-x-auto lg:bottom-6 lg:right-6 lg:p-0"
        >
            <div className="max-h-[85svh] overflow-y-auto border border-line-strong bg-ink-raised p-6 sm:p-8 lg:w-[31rem]">
                <h2 id="cookies-title" ref={titleRef} tabIndex={-1} className="text-xl font-semibold text-paper focus:outline-none">
                    {settings ? 'Personnaliser les cookies' : 'Vos choix sur les cookies'}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-mute">
                    Nous n'utilisons ni cookies publicitaires ni mesure d'audience. Seules les vidéos YouTube intégrées au
                    site peuvent déposer des cookies de Google. Votre choix est conservé six mois.{' '}
                    <Link to="/confidentialite" className="text-paper underline hover:text-mute">
                        Confidentialité
                    </Link>
                </p>

                {settings && (
                    <ul className="mt-6 border-t border-line">
                        <li className="flex items-start justify-between gap-6 border-b border-line py-5">
                            <div>
                                <p id="cookie-necessaires" className="font-semibold text-paper">
                                    Strictement nécessaires
                                </p>
                                <p id="cookie-necessaires-desc" className="mt-1 text-sm leading-relaxed text-mute">
                                    Mémorisent vos choix sur ce site. Toujours actifs.
                                </p>
                            </div>
                            <Switch checked disabled labelledBy="cookie-necessaires" describedBy="cookie-necessaires-desc" />
                        </li>
                        <li className="flex items-start justify-between gap-6 border-b border-line py-5">
                            <div>
                                <p id="cookie-youtube" className="font-semibold text-paper">
                                    Vidéos YouTube
                                </p>
                                <p id="cookie-youtube-desc" className="mt-1 text-sm leading-relaxed text-mute">
                                    Permettent de lire les vidéos hébergées sur YouTube. Google peut alors déposer des
                                    cookies et suivre votre navigation.
                                </p>
                            </div>
                            <Switch
                                checked={youtube}
                                onChange={setYoutube}
                                labelledBy="cookie-youtube"
                                describedBy="cookie-youtube-desc"
                            />
                        </li>
                    </ul>
                )}

                <div className="mt-6 grid grid-cols-2 gap-3">
                    <button type="button" onClick={refuseAll} className="btn-outline px-4">
                        Tout refuser
                    </button>
                    <button type="button" onClick={acceptAll} className="btn-outline px-4">
                        Tout accepter
                    </button>
                    {settings ? (
                        <button
                            type="button"
                            onClick={() => save({ youtube })}
                            className="btn col-span-2 bg-paper text-ink hover:bg-paper-line"
                        >
                            Enregistrer mes choix
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={openSettings}
                            className="col-span-2 justify-self-start py-2 text-sm font-semibold text-paper underline underline-offset-[0.3em] hover:text-mute"
                        >
                            Personnaliser
                        </button>
                    )}
                </div>
                {settings && decided && (
                    <p className="mt-4 text-sm text-mute-soft">Échap pour fermer sans modifier.</p>
                )}
            </div>
        </section>
    )
}
