import React, { useState } from 'react'
import { useConsent } from './ConsentContext'
import { Play } from '../Icons'

// N'appelle YouTube qu'après consentement : avant, aucune requête ne part vers Google.
export default function YouTubeEmbed({ id, title, poster }) {
    const { choices, allow } = useConsent()
    const [autoplay, setAutoplay] = useState(false)

    if (!choices.youtube) {
        return (
            <div className="relative aspect-video w-full overflow-hidden bg-ink-raised">
                {poster && <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />}
                <div className="relative flex h-full flex-col items-start justify-end gap-5 p-6 sm:p-10">
                    <p className="max-w-md text-base leading-relaxed text-paper">
                        Cette vidéo est hébergée par YouTube. La lire autorise Google à déposer des cookies.
                    </p>
                    <button
                        type="button"
                        onClick={() => {
                            setAutoplay(true)
                            allow('youtube')
                        }}
                        className="btn-outline bg-ink/60"
                    >
                        <Play />
                        Autoriser YouTube et lire
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="aspect-video w-full bg-ink-raised">
            <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${id}${autoplay ? '?autoplay=1' : ''}`}
                title={title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}
