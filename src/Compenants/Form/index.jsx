import React from 'react'

export function Field({ id, label, error, hint, optional, className = '', children }) {
    const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined
    const control = React.Children.only(children)

    return (
        <div className={className}>
            <label htmlFor={id} className="field-label">
                {label}
                {optional && <span className="ml-2 font-normal text-mute">facultatif</span>}
            </label>
            {React.cloneElement(control, {
                id,
                'aria-invalid': error ? 'true' : undefined,
                'aria-describedby': describedBy,
            })}
            {hint && !error && (
                <p id={`${id}-hint`} className="field-hint">
                    {hint}
                </p>
            )}
            {error && (
                <p id={`${id}-error`} className="field-error">
                    {error}
                </p>
            )}
        </div>
    )
}

export function Fieldset({ legend, children }) {
    return (
        <fieldset className="border-t border-line pt-8">
            <legend className="float-left mb-6 w-full text-xl font-semibold text-paper">{legend}</legend>
            <div className="clear-left grid gap-6 sm:grid-cols-2">{children}</div>
        </fieldset>
    )
}

export function SelectChevron() {
    return (
        <svg
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mute"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
        >
            <path d="M6 9l6 6 6-6" />
        </svg>
    )
}
