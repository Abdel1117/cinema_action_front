import React from 'react'
import { FESTIVAL } from '../../assets/Data/festival'

// Mention visible tant que FESTIVAL.provisional vaut true.
export default function Provisional({ children = "Provisoire, en cours de validation par l'organisation.", className = '', tone = 'dark' }) {
    if (!FESTIVAL.provisional) return null
    const colors = tone === 'light' ? 'border-paper-line text-mute-ink' : 'border-line-strong text-mute'
    return <p className={`inline-block border px-3 py-1.5 text-sm ${colors} ${className}`}>{children}</p>
}

export function editionLabel() {
    const { dates, venue } = FESTIVAL.edition
    if (dates && venue) return `${dates} · ${venue}`
    if (dates) return `${dates} · lieu à annoncer`
    if (venue) return `Dates à annoncer · ${venue}`
    return 'Dates et lieu à annoncer'
}
