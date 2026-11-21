import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Field, Fieldset, SelectChevron } from '../../Compenants/Form'
import { ArrowRight, Check } from '../../Compenants/Icons'

const INITIAL = {
    email: '',
    password: '',
    passwordConfirm: '',
    firstName: '',
    lastName: '',
    pseudo: '',
    birthday: '',
    gender: '',
    phone: '',
    address: '',
    postcode: '',
    city: '',
    country: 'France',
    company: '',
    consent: false,
}

const REQUIRED = {
    email: 'Indiquez votre adresse e-mail.',
    password: 'Choisissez un mot de passe.',
    passwordConfirm: 'Confirmez votre mot de passe.',
    firstName: 'Indiquez votre prénom.',
    lastName: 'Indiquez votre nom.',
    pseudo: 'Choisissez un pseudo.',
    birthday: 'Indiquez votre date de naissance.',
    gender: 'Choisissez une option, ou « Je ne souhaite pas répondre ».',
    phone: 'Indiquez un numéro de téléphone.',
    address: 'Indiquez votre adresse.',
    postcode: 'Indiquez votre code postal.',
    city: 'Indiquez votre ville.',
    country: 'Choisissez votre pays.',
}

function validate(form) {
    const errors = {}
    Object.entries(REQUIRED).forEach(([key, message]) => {
        if (!String(form[key]).trim()) errors[key] = message
    })
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = "Cette adresse e-mail n'est pas valide. Vérifiez qu'elle contient un @ et un domaine."
    }
    if (form.password && form.password.length < 8) {
        errors.password = 'Le mot de passe doit contenir au moins 8 caractères.'
    }
    if (form.passwordConfirm && form.passwordConfirm !== form.password) {
        errors.passwordConfirm = 'Les deux mots de passe ne correspondent pas.'
    }
    if (form.postcode && form.country === 'France' && !/^\d{5}$/.test(form.postcode.trim())) {
        errors.postcode = 'Un code postal français compte 5 chiffres.'
    }
    if (!form.consent) {
        errors.consent = 'Acceptez le règlement du concours pour vous inscrire.'
    }
    return errors
}

export default function Inscription() {
    const [form, setForm] = useState(INITIAL)
    const [errors, setErrors] = useState({})
    const [picture, setPicture] = useState(null)
    const [done, setDone] = useState(false)
    const formRef = useRef(null)

    useEffect(() => () => picture && URL.revokeObjectURL(picture.url), [picture])

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setForm((values) => ({ ...values, [name]: type === 'checkbox' ? checked : value }))
        if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
    }

    const handlePicture = (event) => {
        const file = event.target.files && event.target.files[0]
        if (!file) return
        setPicture({ file, url: URL.createObjectURL(file) })
    }

    const handleForm = (e) => {
        e.preventDefault()
        const found = validate(form)
        setErrors(found)
        const first = Object.keys(found)[0]
        if (first) {
            const el = formRef.current && formRef.current.querySelector(`[name="${first}"]`)
            if (el) el.focus()
            return
        }
        console.log({ ...form, picture: picture ? picture.file : null })
        setDone(true)
    }

    const input = (name, type = 'text', extra = {}) => (
        <input className="field" name={name} type={type} value={form[name]} onChange={handleChange} {...extra} />
    )

    return (
        <main id="contenu" className="wrap grid gap-14 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
            <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                    <h1 className="display text-[clamp(3.5rem,7vw,6rem)]">Inscription</h1>
                    <p className="mt-6 max-w-prose text-lg leading-relaxed text-mute">
                        Ces informations sont obligatoires pour participer. Elles vous identifient lors de vos prochaines
                        visites et feront foi si votre film est récompensé. Si vous êtes un collectif, indiquez celles du
                        contact principal.
                    </p>
                    <ul className="mt-8 space-y-3 text-base">
                        <li>
                            <Link to="/participer" className="link-arrow text-paper hover:text-mute">
                                Conditions de participation
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </li>
                        <li className="text-mute">
                            Déjà inscrit ?{' '}
                            <Link to="/connexion" className="font-semibold text-paper underline hover:text-mute">
                                Se connecter
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
                {done ? (
                    <div className="border border-line p-8 lg:p-12" role="status">
                        <span className="grid h-12 w-12 place-items-center bg-signal text-white">
                            <Check className="h-6 w-6" />
                        </span>
                        <h2 className="mt-6 text-3xl font-semibold text-paper">Merci, {form.firstName}.</h2>
                        <p className="mt-3 max-w-prose text-lg leading-relaxed text-mute">
                            Votre formulaire est complet. L'envoi des comptes sera activé à l'ouverture des inscriptions ;
                            vous recevrez alors un e-mail de confirmation à l'adresse {form.email}.
                        </p>
                        <Link to="/" className="btn-outline mt-8">
                            Retour à l'accueil
                        </Link>
                    </div>
                ) : (
                    <>
                        <button type="button" className="btn-outline w-full">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
                                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" />
                                <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z" />
                                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
                            </svg>
                            Continuer avec Google
                        </button>
                        <p className="mb-6 mt-10 text-sm text-mute">Ou inscrivez-vous avec votre adresse e-mail :</p>

                        <form ref={formRef} onSubmit={handleForm} noValidate className="space-y-12">
                            <Fieldset legend="Votre compte">
                                <Field id="email" label="Adresse e-mail" error={errors.email} className="sm:col-span-2">
                                    {input('email', 'email', { autoComplete: 'email', placeholder: 'nom@exemple.fr' })}
                                </Field>
                                <Field id="password" label="Mot de passe" error={errors.password} hint="8 caractères minimum.">
                                    {input('password', 'password', { autoComplete: 'new-password' })}
                                </Field>
                                <Field id="passwordConfirm" label="Confirmation du mot de passe" error={errors.passwordConfirm}>
                                    {input('passwordConfirm', 'password', { autoComplete: 'new-password' })}
                                </Field>
                            </Fieldset>

                            <Fieldset legend="Vous">
                                <Field id="firstName" label="Prénom" error={errors.firstName}>
                                    {input('firstName', 'text', { autoComplete: 'given-name' })}
                                </Field>
                                <Field id="lastName" label="Nom" error={errors.lastName}>
                                    {input('lastName', 'text', { autoComplete: 'family-name' })}
                                </Field>
                                <Field id="pseudo" label="Pseudo" error={errors.pseudo} hint="Affiché sur votre espace personnel.">
                                    {input('pseudo', 'text', { autoComplete: 'nickname' })}
                                </Field>
                                <Field id="birthday" label="Date de naissance" error={errors.birthday}>
                                    {input('birthday', 'date', { autoComplete: 'bday' })}
                                </Field>
                                <Field id="gender" label="Genre" error={errors.gender} className="sm:col-span-2">
                                    <GenderSelect value={form.gender} onChange={handleChange} />
                                </Field>
                            </Fieldset>

                            <Fieldset legend="Coordonnées">
                                <Field id="phone" label="Téléphone" error={errors.phone}>
                                    {input('phone', 'tel', { autoComplete: 'tel', inputMode: 'tel' })}
                                </Field>
                                <Field id="country" label="Pays" error={errors.country}>
                                    <CountrySelect value={form.country} onChange={handleChange} />
                                </Field>
                                <Field id="address" label="Adresse" error={errors.address} className="sm:col-span-2">
                                    {input('address', 'text', { autoComplete: 'street-address' })}
                                </Field>
                                <Field id="postcode" label="Code postal" error={errors.postcode}>
                                    {input('postcode', 'text', { autoComplete: 'postal-code', inputMode: 'numeric' })}
                                </Field>
                                <Field id="city" label="Ville" error={errors.city}>
                                    {input('city', 'text', { autoComplete: 'address-level2' })}
                                </Field>
                            </Fieldset>

                            <Fieldset legend="Profil">
                                <Field
                                    id="company"
                                    label="Entreprise ou association"
                                    optional
                                    hint="Si vous participez au nom d'une structure."
                                    className="sm:col-span-2"
                                >
                                    {input('company', 'text', { autoComplete: 'organization' })}
                                </Field>
                                <div className="sm:col-span-2">
                                    <p className="field-label" id="picture-label">
                                        Photo de profil <span className="ml-2 font-normal text-mute">facultatif</span>
                                    </p>
                                    <div className="flex items-center gap-5">
                                        <span className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden border border-line-strong bg-ink-raised">
                                            {picture ? (
                                                <img src={picture.url} alt="Aperçu de votre profil" className="h-full w-full object-cover" />
                                            ) : (
                                                <span className="font-display text-2xl uppercase text-mute-soft" aria-hidden="true">
                                                    {(form.firstName[0] || '') + (form.lastName[0] || '') || '?'}
                                                </span>
                                            )}
                                        </span>
                                        <label className="btn-outline cursor-pointer px-5 py-3 text-sm focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-paper">
                                            {picture ? 'Changer de photo' : 'Choisir une photo'}
                                            <input
                                                type="file"
                                                name="picture"
                                                accept="image/png, image/jpeg, image/webp"
                                                className="sr-only"
                                                aria-labelledby="picture-label"
                                                onChange={handlePicture}
                                            />
                                        </label>
                                    </div>
                                    <p className="field-hint">JPG, PNG ou WebP.</p>
                                </div>
                            </Fieldset>

                            <div className="border-t border-line pt-8">
                                <label className="flex cursor-pointer items-start gap-4">
                                    <input
                                        type="checkbox"
                                        name="consent"
                                        checked={form.consent}
                                        onChange={handleChange}
                                        aria-invalid={errors.consent ? 'true' : undefined}
                                        aria-describedby={errors.consent ? 'consent-error' : undefined}
                                        className="peer sr-only"
                                    />
                                    <span
                                        aria-hidden="true"
                                        className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center border text-white transition-colors duration-150 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-paper ${
                                            form.consent ? 'border-signal bg-signal' : errors.consent ? 'border-signal-text' : 'border-line-strong'
                                        }`}
                                    >
                                        {form.consent && <Check />}
                                    </span>
                                    <span className="text-base leading-relaxed text-paper">
                                        J'ai lu, compris et accepté le{' '}
                                        <Link to="/participer" className="underline hover:text-mute">
                                            règlement du concours
                                        </Link>
                                        .
                                    </span>
                                </label>
                                {errors.consent && (
                                    <p id="consent-error" className="field-error ml-10">
                                        {errors.consent}
                                    </p>
                                )}
                            </div>

                            <button type="submit" className="btn-primary w-full sm:w-auto">
                                Créer mon compte
                                <ArrowRight />
                            </button>
                        </form>
                    </>
                )}
            </div>
        </main>
    )
}

function GenderSelect({ id, value, onChange, ...aria }) {
    return (
        <div className="relative">
            <select id={id} name="gender" value={value} onChange={onChange} className="field appearance-none pr-12" {...aria}>
                <option value="">Choisir</option>
                <option value="F">Femme</option>
                <option value="H">Homme</option>
                <option value="None">Je ne souhaite pas répondre</option>
            </select>
            <SelectChevron />
        </div>
    )
}

function CountrySelect({ id, value, onChange, ...aria }) {
    return (
        <div className="relative">
            <select id={id} name="country" value={value} onChange={onChange} className="field appearance-none pr-12" autoComplete="country-name" {...aria}>
                <option value="France">France</option>
                <option value="Belgique">Belgique</option>
                <option value="Suisse">Suisse</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Canada">Canada</option>
                <option value="Autre">Autre pays</option>
            </select>
            <SelectChevron />
        </div>
    )
}
