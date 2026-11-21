import React, { useId, useState } from 'react'
import { Plus } from '../Icons'

export default function Question({ question }) {
    const [open, setOpen] = useState(false)
    const id = useId()
    const panelId = `${id}-reponse`
    const buttonId = `${id}-question`

    return (
        <div className="border-b border-line">
            <h3>
                <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpen((v) => !v)}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left text-lg font-semibold text-paper transition-colors duration-150 hover:text-mute sm:text-xl"
                >
                    <span>{question.question}</span>
                    <span
                        className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center border transition-colors duration-200 ${
                            open ? 'border-signal bg-signal text-white' : 'border-line-strong text-paper group-hover:border-paper'
                        }`}
                        aria-hidden="true"
                    >
                        <Plus className={`h-4 w-4 transition-transform duration-300 ease-out ${open ? 'rotate-45' : ''}`} />
                    </span>
                </button>
            </h3>
            <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out ${
                    open ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]'
                }`}
            >
                <div className="overflow-hidden">
                    <p className="max-w-prose pb-8 pr-14 text-lg leading-relaxed text-mute">{question.reponse}</p>
                </div>
            </div>
        </div>
    )
}
