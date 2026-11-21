import React from 'react'

// Icônes dessinées à la main : trait de 1.75 sur une grille de 24, coins carrés.
const stroke = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'square',
    strokeLinejoin: 'miter',
}

export function ArrowRight({ className = 'h-5 w-5' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
            <path d="M4 12h15M13 6l6 6-6 6" />
        </svg>
    )
}

export function ArrowUpRight({ className = 'h-4 w-4' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
            <path d="M7 17L17 7M9 7h8v8" />
        </svg>
    )
}

export function Plus({ className = 'h-5 w-5' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
            <path d="M12 4v16M4 12h16" />
        </svg>
    )
}

export function Menu({ className = 'h-6 w-6' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
            <path d="M3 7h18M3 17h18" />
        </svg>
    )
}

export function Close({ className = 'h-6 w-6' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
            <path d="M5 5l14 14M19 5L5 19" />
        </svg>
    )
}

export function Pause({ className = 'h-4 w-4' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
            <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
        </svg>
    )
}

export function Play({ className = 'h-4 w-4' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
            <path d="M7 4l13 8-13 8z" />
        </svg>
    )
}

export function Check({ className = 'h-4 w-4' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={2.5}>
            <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
    )
}

export function User({ className = 'h-8 w-8' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
            <path d="M12 12.5a4.25 4.25 0 100-8.5 4.25 4.25 0 000 8.5zM4 21c.6-3.9 3.9-6.25 8-6.25S19.4 17.1 20 21" />
        </svg>
    )
}

const SOCIAL_PATHS = {
    instagram:
        'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38A5.88 5.88 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12a5.88 5.88 0 002.12 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 002.12-1.38 5.88 5.88 0 001.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 00-1.38-2.12A5.88 5.88 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z',
    youtube:
        'M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 00.5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 002.12 2.14c1.87.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 002.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z',
    facebook:
        'M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z',
    x: 'M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41z',
}

export function SocialIcon({ id, className = 'h-5 w-5' }) {
    const d = SOCIAL_PATHS[id]
    if (!d) return null
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
            <path d={d} />
        </svg>
    )
}
