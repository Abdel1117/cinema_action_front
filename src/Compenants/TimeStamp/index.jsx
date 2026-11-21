import React, { useEffect, useMemo, useState } from 'react'
import { FESTIVAL } from '../../assets/Data/festival'

const DAY = 86400000
const HOUR = 3600000
const MINUTE = 60000

const pad = (n) => String(n).padStart(2, '0')

export function formatDate(iso) {
    return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso))
}

export default function TimeStamp({ target = FESTIVAL.registrationOpens, className = '' }) {
    const targetMs = useMemo(() => new Date(target).getTime(), [target])
    const [now, setNow] = useState(() => Date.now())

    useEffect(() => {
        if (targetMs <= Date.now()) return undefined
        const id = setInterval(() => setNow(Date.now()), 1000)
        return () => clearInterval(id)
    }, [targetMs])

    const remaining = Math.max(0, targetMs - now)
    const dateLabel = formatDate(target)

    if (remaining === 0) {
        return (
            <div className={className}>
                <p className="text-sm font-semibold text-paper">Les inscriptions sont ouvertes</p>
                <p className="mt-1 text-sm text-mute">depuis le {dateLabel}</p>
            </div>
        )
    }

    const units = [
        { value: Math.floor(remaining / DAY), label: 'jours' },
        { value: Math.floor((remaining % DAY) / HOUR), label: 'heures' },
        { value: Math.floor((remaining % HOUR) / MINUTE), label: 'minutes' },
        { value: Math.floor((remaining % MINUTE) / 1000), label: 'secondes' },
    ]

    return (
        <div className={className}>
            <p className="flex items-baseline justify-between gap-4 text-sm">
                <span className="font-semibold text-paper">Ouverture des inscriptions</span>
                <span className="text-mute">{dateLabel}</span>
            </p>
            <p className="sr-only">
                Les inscriptions ouvrent le {dateLabel}, dans {units[0].value} jours.
            </p>
            <ol className="mt-3 grid grid-cols-4 divide-x divide-paper/25 border border-paper/25 bg-ink/50" aria-hidden="true">
                {units.map((u) => (
                    <li key={u.label} className="px-3 py-3 sm:px-4 sm:py-4">
                        <span className="tabular block font-display text-[2rem] leading-none text-paper sm:text-[2.75rem]">
                            {pad(u.value)}
                        </span>
                        <span className="mt-2 block text-xs text-mute">{u.label}</span>
                    </li>
                ))}
            </ol>
        </div>
    )
}
