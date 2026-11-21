import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Field } from '../../Compenants/Form'
import { ArrowRight } from '../../Compenants/Icons'
import still from '../../assets/stills/reel-20.jpg'

export default function Connexion() {
    const [form, setForm] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((v) => ({ ...v, [name]: value }))
        if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const found = {}
        if (!form.email.trim()) found.email = 'Indiquez votre adresse e-mail.'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) found.email = "Cette adresse e-mail n'est pas valide."
        if (!form.password) found.password = 'Indiquez votre mot de passe.'
        setErrors(found)
        const first = Object.keys(found)[0]
        if (first) {
            document.getElementById(first)?.focus()
            return
        }
        console.log(form)
    }

    return (
        <main id="contenu" className="grid lg:min-h-[calc(100svh-6rem)] lg:grid-cols-2">
            <figure className="relative hidden lg:block">
                <img src={still} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-ink/80 px-16 py-4 text-sm text-mute">
                    Extrait du showreel de Serge Crozon
                </figcaption>
            </figure>

            <div className="wrap flex items-center py-16 lg:px-16 xl:px-24">
                <div className="w-full max-w-md">
                    <h1 className="display text-[clamp(3.5rem,7vw,6rem)]">Connexion</h1>
                    <p className="mt-5 text-lg leading-relaxed text-mute">
                        Accédez à votre espace personnel pour envoyer votre film et suivre votre participation.
                    </p>

                    <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-6">
                        <Field id="email" label="Adresse e-mail" error={errors.email}>
                            <input
                                className="field"
                                type="email"
                                name="email"
                                autoComplete="email"
                                placeholder="nom@exemple.fr"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </Field>
                        <div>
                            <Field id="password" label="Mot de passe" error={errors.password}>
                                <input
                                    className="field"
                                    type="password"
                                    name="password"
                                    autoComplete="current-password"
                                    value={form.password}
                                    onChange={handleChange}
                                />
                            </Field>
                            <Link to="/mot-de-passe-oublie" className="mt-3 inline-block text-sm font-medium text-mute underline hover:text-paper">
                                Mot de passe oublié ?
                            </Link>
                        </div>
                        <button type="submit" className="btn-primary w-full">
                            Se connecter
                            <ArrowRight />
                        </button>
                    </form>

                    <p className="mt-10 border-t border-line pt-6 text-base text-mute">
                        Pas encore inscrit ?{' '}
                        <Link to="/inscription" className="font-semibold text-paper underline hover:text-mute">
                            Créer un compte
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    )
}
