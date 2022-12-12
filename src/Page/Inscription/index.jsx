import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import _ from "lodash/fp";
import { ErrorMessage } from '@hookform/error-message';

export default function Inscription() {

    const { register, formState: { errors }, handleSubmit, getValues, watch } = useForm({
        criteriaMode: 'all',
    });
    const onSubmit = data => console.log(data);
    const [form, setForm] = useState([]);

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        setForm(values => ({
            ...values, [name]: value
        }))
    }

    const handleForm = e => {
        e.preventDefault()
        fetch('http://localhost:4000/inscription', {
            method: "POST",
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => console.log(response))
    }

    return (
        <main className='mx-auto w-11/12 lg:w-8/12'>
            <section className='mx-auto px-4 py-6 mt-12'>

                <div className=''>
                    <h1 className='text-xl lg:text-3xl font-bold text-center my-8'>S'inscrire au Cinéma Festival Action</h1>
                    <p className='text-center my-8'>Les Réglementation sont <a href="#">ici</a> </p>
                </div>


                <div className=' mt-12 flex items-center justify-center flex-wrap'>

                    <a href='#' className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-md px-2 md:px-5 py-2.5 mr-2 mb-2 ">Se connecter avec Google</a>
                    <a className='focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:bg-blue-500 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2' href="#form_sign">Se Connecter avec un Email</a>
                </div>
            </section>

            <section className='w-10/12 md:w-8/12 mx-auto my-6'>
                <div className='my-12 text-center'>
                    <h2 className='lg:text-xl my-6'>Informations Personelles</h2>
                    <p className='text-md lg:text-lg'> Elles sont obligatoires pour participer et vous permettront de vous identifier lors de votre prochaine visite. Ce sont également elles qui feront foi si votre film est récompensé. Si vous êtes un collectif, indiquez les informations du contact principal. </p>
                </div>

                <div className='p-1 md:p-4 shadow-lg'>
                    <form onSubmit={handleForm} method="POST" id="form_sign">
                        <div className="relative z-0 mb-6 w-full group">
                            <input
                                type="email"
                                name="floating_email"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""

                                value={form.email}
                                {...register("email",
                                    {
                                        required: "Veuillez remplir ce champs",
                                        pattern: {
                                            value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                                            message: "Veuillez renseigner une adresse email valide"
                                        }
                                    })}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="email"
                                render={({ messages }) =>
                                    messages &&
                                    Object.entries(messages).map(([type, message]) => (
                                        <p style={{ color: "red" }} key={type}>{message}</p>
                                    ))
                                }
                            />
                            <label
                                for="floating_email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Adresse Email
                            </label>
                        </div>

                        <div className="relative z-0 mb-6 w-full group">
                            <input
                                type="password"
                                name="floating_password"
                                id="floating_password"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder="" {...register("password", {
                                    required: "Veuillez remplir ce champs",
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        message: "Veuillez tapez un mot de passe valide "
                                    }

                                })}
                                value={form.password}
                                onChange={handleChange}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="password"
                                render={({ messages }) =>
                                    messages &&
                                    Object.entries(messages).map(([type, message]) => (
                                        <p style={{ color: "red" }} key={type}>{message}</p>
                                    ))
                                }
                            />
                            <label
                                for="floating_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Mot de Passe
                            </label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input
                                type="password"
                                name="repeat_password"
                                id="floating_repeat_password"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder="" {...register("repeat_password", {
                                    required: "Veuillez remplir ce champs",
                                    validate: (val) => {
                                        if (watch('password') !== val) {
                                            return "Vos mot de passe ne match pas !";
                                        }
                                    },
                                })}
                                value={form.repeat_password}
                                onChange={handleChange}
                            />

                            <ErrorMessage
                                errors={errors}
                                name="repeat_password"
                                render={({ messages }) =>
                                    messages &&
                                    Object.entries(messages).map(([type, message]) => (
                                        <p style={{ color: "red" }} key={type}>{message}</p>
                                    ))
                                }
                            />
                            <label
                                for="floating_repeat_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Confirmation de Mot de Passe
                            </label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="text"
                                    name="floating_first_name"
                                    id="floating_first_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                    {...register('floating_first_name',
                                        {
                                            required: "Veuillez remplir ce champs",
                                            pattern: {

                                                value: /^[a-zA-Z\-]+$/,
                                                message: "Veuillez renseigner un Prénom valide"
                                            }
                                        })}
                                    value={form.floating_first_name}
                                    onChange={handleChange}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="floating_first_name"
                                    render={({ messages }) =>
                                        messages &&
                                        Object.entries(messages).map(([type, message]) => (
                                            <p style={{ color: "red" }} key={type}>{message}</p>
                                        ))
                                    }
                                />

                                <label
                                    for="floating_first_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Prénom
                                </label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="text"
                                    name="floating_last_name"
                                    id="floating_last_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=""
                                    {...register('floating_last_name', {
                                        required: "Veuillez remplir ce champs",
                                        pattern: {
                                            value: /^[a-zA-Z\-]+$/,
                                            message: "Veuillez renseigner un Nom de famille Valide"
                                        }
                                    })}
                                    value={form.floating_last_name}
                                    onChange={handleChange}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="floating_last_name"
                                    render={({ messages }) =>
                                        messages &&
                                        Object.entries(messages).map(([type, message]) => (
                                            <p style={{ color: "red" }} key={type}>{message}</p>
                                        ))
                                    }
                                />
                                <label
                                    for="floating_last_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >Nom
                                </label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="tel"
                                    name="floating_phone"
                                    id="floating_phone"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=""
                                    {...register('floating_phone', {
                                        required: "Veuillez remplir ce champs ",
                                        pattern: {
                                            value: /^((\+)33|0)[1-9](\d{2}){4}$/,
                                            message: "Veuillez renseigner un numéros de téléphone valide !"
                                        }
                                    })}
                                    value={form.floating_phone}
                                    onChange={handleChange}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="floating_phone"
                                    render={({ messages }) =>
                                        messages &&
                                        Object.entries(messages).map(([type, message]) => (
                                            <p style={{ color: "red" }} key={type}>{message}</p>
                                        ))
                                    }
                                />
                                <label
                                    for="floating_phone"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Numéros de Téléphone
                                </label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="text"
                                    name="floating_company"
                                    id="floating_company"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=""
                                    {...register('floating_company')}
                                    value={form.floating_company}
                                    onChange={handleChange}
                                />
                                <label
                                    for="floating_company"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Entreprise Ou Association
                                </label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <label
                                    for="floating_sexe"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Sexe
                                </label>
                                <select
                                    className='className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer' name="floating_sexe"
                                    id="floating_sexe"
                                    {...register('floating_sexe', {
                                        required: "Veuillez renseigner ce champs",

                                    }

                                    )}
                                    value={form.floating_sexe}
                                    onChange={handleChange} >
                                    <option value="" selected></option>
                                    <option value="H">Homme</option>
                                    <option value="F">Femme</option>
                                    <option value="None">Je ne souhaite pas Repondre </option>
                                </select>

                            </div>

                            <div className='relative z-0 mb-6 w-full group'>
                                <label
                                    for="floating_birthday"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Date de Naissance
                                </label>
                                <input
                                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                                    id='floating_birthday'
                                    name='floating_birthday'
                                    type="date"
                                    {...register('floating_birthday', {
                                        required: "Veuillez renseigner ce champ",
                                        pattern: {
                                            value: /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/,
                                            message: "Veuillez renseigner une date de naissance valide"
                                        }

                                    })}
                                    value={form.floating_birthday}
                                    onChange={handleChange}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="floating_birthday"
                                    render={({ messages }) =>
                                        messages &&
                                        Object.entries(messages).map(([type, message]) => (
                                            <p style={{ color: "red" }} key={type}>{message}</p>
                                        ))
                                    }
                                />
                            </div>



                            <div className='relative z-0 mb-6 w-full group'>
                                <label
                                    for="floating_adress"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Adresse
                                </label>
                                <input
                                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                                    name='floating_adress'
                                    id='floating_adress'
                                    type="text"
                                    {...register('floating_adress', {
                                        required: "Veuillez remplir ce champ"
                                    })}
                                    value={form.floating_adress}
                                    onChange={handleChange}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="floating_adress"
                                    render={({ messages }) =>
                                        messages &&
                                        Object.entries(messages).map(([type, message]) => (
                                            <p style={{ color: "red" }} key={type}>{message}</p>
                                        ))
                                    }
                                />
                            </div>

                            <div className='relative z-0 mb-6 w-full group'>
                                <label
                                    for="floating_code_postal"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Code Postal
                                </label>
                                <input
                                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer' name='floating_code_postal'
                                    id='floating_code_postal'
                                    type="text"
                                    {...register('floating_code_postal',
                                        {
                                            required: "Veuillez renseigner ce champs",
                                            pattern: {
                                                value: /[0-9]{5}/g,
                                                message: "Veuillez renseigner un code postal valide"
                                            }
                                        })}
                                    value={form.floating_code_postal}
                                    onChange={handleChange} />
                                <ErrorMessage
                                    errors={errors}
                                    name="floating_code_postal"
                                    render={({ messages }) =>
                                        messages &&
                                        Object.entries(messages).map(([type, message]) => (
                                            <p style={{ color: "red" }} key={type}>{message}</p>
                                        ))
                                    }
                                />
                            </div>



                            <div className='relative z-0 mb-6 w-full group'>
                                <label
                                    for="floating_ville"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Ville
                                </label>
                                <input
                                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                                    name='floating_ville'
                                    id='floating_ville'
                                    type="text"
                                    {...register('floating_ville', {
                                        required: "Veuillez renseigner ce champs "
                                    })}
                                    value={form.floating_ville}
                                    onChange={handleChange}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="floating_ville"
                                    render={({ messages }) =>
                                        messages &&
                                        Object.entries(messages).map(([type, message]) => (
                                            <p style={{ color: "red" }} key={type}>{message}</p>
                                        ))
                                    }
                                />
                            </div>

                            <div className='relative z-0 mb-6 w-full group'>
                                <label
                                    for="floating_country"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Pays
                                </label>
                                <select
                                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer' name="floating_country"
                                    id="floating_country"
                                    {...register('floating_country', {
                                        required: "Veuillez renseigner ce champs"
                                    })}
                                    value={form.floating_country}
                                    onChange={handleChange}
                                >
                                    <option
                                        value="France" selected>
                                        France
                                    </option>
                                </select>
                                <ErrorMessage
                                    errors={errors}
                                    name="floating_country"
                                    render={({ messages }) =>
                                        messages &&
                                        Object.entries(messages).map(([type, message]) => (
                                            <p style={{ color: "red" }} key={type}>{message}</p>
                                        ))
                                    }
                                />
                            </div>
                        </div>

                        <div className='grid md:grid-cols-2 md:gap-6 relative'>
                            <div className='p-1 md:p-4'>

                                <label
                                    className='w-40 h-40'>
                                    Choisisez une Image de Profil

                                    <img
                                        className='rounded-full my-4'
                                        src="https://via.placeholder.com/120"
                                        alt=""
                                    />
                                    <input
                                        className='hidden'
                                        type="file"
                                        name="floating_picture_user"
                                        id="floating_picture_user"
                                        {...register('floating_picture_user')}
                                        value={form.flotaing_picture_user}
                                        onChange={handleChange}
                                    />
                                </label>
                                <ErrorMessage
                                    errors={errors}
                                    name="floating_code_postal"
                                    render={({ messages }) =>
                                        messages &&
                                        Object.entries(messages).map(([type, message]) => (
                                            <p style={{ color: "red" }} key={type}>{message}</p>
                                        ))
                                    }
                                />
                            </div>
                            <div>
                                <label
                                    for="floating_pseudo"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Pseudo
                                </label>

                                <input
                                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                                    name='floating_pseudo'
                                    id='floating_pseudo'
                                    type="text"
                                    {...register('floating_pseudo', {
                                        required: "Veuillez renseigner ce champs",
                                        pattern: {
                                            value: "",
                                            message: "Veuillez renseigner un pseudo valide"
                                        }
                                    })}
                                    value={form.floating_pseudo}
                                    onChange={handleChange}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="floating_pseudo"
                                    render={({ messages }) =>
                                        messages &&
                                        Object.entries(messages).map(([type, message]) => (
                                            <p style={{ color: "red" }} key={type}>{message}</p>
                                        ))
                                    }
                                />
                            </div>
                        </div>


                        <div className='p-1'>

                            <input
                                type="checkbox"
                                name='floating_check'
                                id='floating_check'
                                {...register('floating_check',
                                    {
                                        required: "Vous devez accepter nos conditions et réglement pour participer au concours !"
                                    }
                                )}
                                value={form.floating_check}
                                onChange={handleChange}
                            />

                            <label>
                                Je reconnais avoir lu, compris et accepté le règlement du concours.
                            </label>
                            <ErrorMessage
                                errors={errors}
                                name="floating_check"
                                render={({ messages }) =>
                                    messages &&
                                    Object.entries(messages).map(([type, message]) => (
                                        <p style={{ color: "red" }} key={type}>{message}</p>
                                    ))
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                            Envoyer
                        </button>
                    </form>

                </div>

            </section >


        </main >
    )
}
