import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import showreel from '../../assets/video/showreel-loop.mp4'
import poster from '../../assets/stills/reel-20.jpg'
import { FESTIVAL } from '../../assets/Data/festival'
import TimeStamp from '../TimeStamp'
import { ArrowRight, Pause, Play } from '../Icons'

export default function Heros() {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (reduce) return
        const attempt = video.play()
        if (attempt && typeof attempt.catch === 'function') attempt.catch(() => setPlaying(false))
    }, [])

    const toggle = () => {
        const video = videoRef.current
        if (!video) return
        if (video.paused) video.play()
        else video.pause()
    }

    return (
        <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink">
            <video
                ref={videoRef}
                className="absolute inset-0 -z-20 h-full w-full object-cover"
                src={showreel}
                poster={poster}
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                tabIndex={-1}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
            />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/40 lg:bg-transparent" />
            <div
                aria-hidden="true"
                className="hero-scrim absolute inset-0 -z-10"
            />

            <div className="wrap mt-auto pb-8 pt-32 lg:pb-10">
                <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-8">
                        <h1 id="hero-title" className="display text-[clamp(4rem,13vw,11.875rem)] leading-[0.9]">
                            <span className="rise-line" style={{ '--i': 0 }}>
                                <span>Ciné Action</span>
                            </span>
                            <span className="rise-line" style={{ '--i': 1 }}>
                                <span>Festival</span>
                            </span>
                        </h1>
                        <p className="fade-up mt-7 max-w-[36rem] text-lg leading-relaxed text-paper/85 sm:text-xl" style={{ '--d': '550ms' }}>
                            Le festival du court métrage d'action, arts martiaux au cœur. {FESTIVAL.filmDuration}, un thème
                            imposé, ouvert à toutes et à tous.
                        </p>
                        <div className="fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={{ '--d': '700ms' }}>
                            <Link to="/inscription" className="btn-primary">
                                S'inscrire au concours
                                <ArrowRight />
                            </Link>
                            <Link to="/about" className="btn-outline">
                                Découvrir le festival
                            </Link>
                        </div>
                    </div>

                    <TimeStamp className="fade-up lg:col-span-4" />
                </div>

                <div className="mt-12 flex items-center justify-between gap-6 border-t border-paper/20 pt-4 text-sm text-mute">
                    <p>Images : showreel de Serge Crozon</p>
                    <button
                        type="button"
                        onClick={toggle}
                        className="-mr-2 inline-flex h-10 items-center gap-2 px-2 font-medium text-paper/85 transition-colors duration-150 hover:text-paper"
                    >
                        {playing ? <Pause /> : <Play />}
                        {playing ? 'Pause' : 'Lecture'}
                        <span className="sr-only"> de la vidéo d'arrière-plan</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
