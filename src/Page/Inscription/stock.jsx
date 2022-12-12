<div class="relative z-0 mb-6 w-full group">
<input
    type="email"
    name="floating_email"
    id="floating_email"
    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    placeholder=""
    {...register("email",
        {
            required: "Veuillez remplir ce champs",
            pattern: {
                value: /d+/,
                message: "Veuillez renseigner une adresse email valide"
            }
        })}

    value={form.email}
/>
<ErrorMessage
    errors={errors}
    name="email"
    render={({ messages }) =>
        messages &&
        Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
        ))
    }
/>
<label
    for="floating_email"
    class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
    Adresse Email
</label>
</div>

<div class="relative z-0 mb-6 w-full group">
<input
    type="password"
    name="floating_password"
    id="floating_password"
    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    placeholder="" {...register("password", {
        required: true,
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    })}
    value={form.password}
    onChange={handleChange}
/>
{errors.password && <span style={{ color: 'red' }}>Veuillez renseigner un mot de passe valide</span>}

<label
    for="floating_password"
    class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
    Mot de Passe
</label>
</div>
<div class="relative z-0 mb-6 w-full group">
<input
    type="password"
    name="repeat_password"
    id="floating_repeat_password"
    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    placeholder="" {...register("repeat_password", {
        required: true,
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    })}
    value={form.repeat_password}
    onChange={handleChange}
/>
{errors.repeat_password && <span style={{ color: 'red' }}>Vos deux Mot de passe ne corresponde pas</span>}
<label
    for="floating_repeat_password"
    class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
    Confirmation de Mot de Passe
</label>
</div>
<div class="grid md:grid-cols-2 md:gap-6">
<div class="relative z-0 mb-6 w-full group">
    <input
        type="text"
        name="floating_first_name"
        id="floating_first_name"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
        {...register('floating_first_name',
            {
                required: true,
                pattern: /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
            })}
        value={form.floating_first_name}
        onChange={handleChange}
    />

    <label
        for="floating_first_name"
        class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Prénom
    </label>
</div>
<div class="relative z-0 mb-6 w-full group">
    <input
        type="text"
        name="floating_last_name"
        id="floating_last_name"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        {...register('floating_last_name', {
            required: true,
            pattern: /^[a-zA-Z\-]+$/
        })}
        value={form.floating_last_name}
        onChange={handleChange}
    />
    <label
        for="floating_last_name"
        class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >Nom
    </label>
</div>
</div>
<div class="grid md:grid-cols-2 md:gap-6">
<div class="relative z-0 mb-6 w-full group">
    <input
        type="tel"
        name="floating_phone"
        id="floating_phone"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        {...register('floating_phone')}
        value={form.floating_phone}
        onChange={handleChange}
    />
    <label
        for="floating_phone"
        class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Numéros de Téléphone
    </label>
</div>
<div class="relative z-0 mb-6 w-full group">
    <input
        type="text"
        name="floating_company"
        id="floating_company"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        {...register('floating_company')}
        value={form.floating_company}
        onChange={handleChange}
    />
    <label
        for="floating_company"
        class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Entreprise Ou Association
    </label>
</div>
<div class="relative z-0 mb-6 w-full group">
    <label
        for="floating_sexe"
        class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Sexe
    </label>
    <select
        className='class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer' name="floating_sexe"
        id="floating_sexe"
        {...register('floating_sexe')}
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
        class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Date de Naissance
    </label>
    <input
        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        id='floating_birthday'
        name='floating_birthday'
        type="date"
        {...register('floating_birthday')}
        value={form.floating_birthday}
        onChange={handleChange}
    />
</div>



<div className='relative z-0 mb-6 w-full group'>
    <label
        for="floating_adress"
        class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Adresse
    </label>
    <input
        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        name='floating_adress'
        id='floating_adress'
        type="text"
        {...register('floating_adress')}
        value={form.floating_adress}
        onChange={handleChange}
    />
</div>

<div className='relative z-0 mb-6 w-full group'>
    <label
        for="floating_code_postal"
        class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Code Postal
    </label>
    <input
        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer' name='floating_code_postal'
        id='floating_code_postal'
        type="text"
        {...register('floating_code_postal')}
        value={form.floating_code_postal}
        onChange={handleChange} />
</div>



<div className='relative z-0 mb-6 w-full group'>
    <label
        for="floating_ville"
        class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Ville
    </label>
    <input
        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        name='floating_ville'
        id='floating_ville'
        type="text"
        {...register('floating_ville')}
        value={form.floating_ville}
        onChange={handleChange}
    />
</div>

<div className='relative z-0 mb-6 w-full group'>
    <label
        for="floating_country"
        class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Pays
    </label>
    <select
        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer' name="floating_country"
        id="floating_country"
        {...register('floating_country')}
        value={form.floating_country}
        onChange={handleChange}
    >
        <option
            value="France" selected>
            France
        </option>
    </select>
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
</div>
<div>
    <label
        for="floating_pseudo"
        class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Pseudo
    </label>

    <input
        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        name='floating_pseudo'
        id='floating_pseudo'
        type="text"
        {...register('floating_pseudo')}
        value={form.floating_pseudo}
        onChange={handleChange}
    />
</div>
</div>


<div className='p-1'>

<input
    type="checkbox"
    name='floating_check'
    id='floating_check'
    {...register('floating_check')}
    value={form.floating_check}
    onChange={handleChange}
/>

<label>
    Je reconnais avoir lu, compris et accepté le règlement du concours.
</label>

</div>

<button
type="submit"
class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
Envoyer
</button>