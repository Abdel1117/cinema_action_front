import React from 'react'

export default function PageHeader({ title, lead, children }) {
    return (
        <div className="border-b border-line">
            <div className="wrap grid gap-8 pb-14 pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-24">
                <h1 className="display text-[clamp(3.5rem,10vw,8.5rem)] lg:col-span-7">{title}</h1>
                {(lead || children) && (
                    <div className="self-end lg:col-span-5 lg:pb-2">
                        {lead && <p className="max-w-prose text-lg leading-relaxed text-mute sm:text-xl">{lead}</p>}
                        {children}
                    </div>
                )}
            </div>
        </div>
    )
}
