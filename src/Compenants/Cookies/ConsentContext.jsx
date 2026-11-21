import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'

// Consentement aux cookies, stocké dans le navigateur.
// Recommandation CNIL : redemander le consentement au bout de 6 mois.
const STORAGE_KEY = 'caf-consentement'
const VERSION = 1
const MAX_AGE = 1000 * 60 * 60 * 24 * 182

// Catégories soumises à consentement. Les cookies strictement nécessaires n'en font pas partie.
export const DEFAULT_CHOICES = { youtube: false }

function readStored() {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY)
        if (!raw) return null
        const data = JSON.parse(raw)
        if (data.version !== VERSION || Date.now() - data.date > MAX_AGE) return null
        return data
    } catch (e) {
        return null
    }
}

const ConsentContext = createContext(null)

export function ConsentProvider({ children }) {
    const [stored, setStored] = useState(readStored)
    // 'banner' au premier passage, 'settings' quand on personnalise, 'closed' une fois le choix fait
    const [panel, setPanel] = useState(() => (stored ? 'closed' : 'banner'))

    const save = useCallback((choices) => {
        const data = { version: VERSION, date: Date.now(), choices: { ...DEFAULT_CHOICES, ...choices } }
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        } catch (e) {
            // stockage indisponible (navigation privée stricte) : le choix vaut pour la session
        }
        setStored(data)
        setPanel('closed')
    }, [])

    const value = useMemo(() => {
        const choices = stored ? stored.choices : DEFAULT_CHOICES
        return {
            choices,
            decided: Boolean(stored),
            panel,
            acceptAll: () => save({ youtube: true }),
            refuseAll: () => save({ youtube: false }),
            save,
            allow: (key) => save({ ...choices, [key]: true }),
            openSettings: () => setPanel('settings'),
            backToBanner: () => setPanel(stored ? 'closed' : 'banner'),
        }
    }, [stored, panel, save])

    return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}

export function useConsent() {
    const ctx = useContext(ConsentContext)
    if (!ctx) throw new Error('useConsent doit être utilisé dans <ConsentProvider>')
    return ctx
}
