import React from 'react'
import { Icon_Thinking, Sign_Up, Content_Production, Video_Production, Checked } from '../../assets/icon/index'
export default function About() {

    return (
        <main className='w-screen  mt-12'>
            <section className='w-10/12 mx-auto'>
                <article>
                    <div className=''>
                        <h1 className='my-4 text-xl lg:text-3xl font-bold text-center'>A Propos </h1>
                        <h2 className='my-4 text-xl lg:text-3xl font-bold text-center'>LE CINE ACTION FESTIVAL, QU'EST CE QUE C'EST ?</h2>
                    </div>

                    <p className='text-md lg:text-xl text-center my-8 lg:w-10/12 mx-auto'>Le  Ciné action Festival est une organisation exclusivement orientée vers le cinéma d’action, il s’agit d’un événement se déroulant sur une semaine avec quatre pôles d’organisations bien distincts : un Forum des métiers de l’ombre du cinéma, une exposition sur une des nombreuses  industries cinématographiques mondiale, une journée démonstration et d’initiation aux scènes d’actions ainsi qu’une soirée de gala en clôture de festival, (avec projections des courts métrages finalistes en compétition). Le ciné action festival a vocation à mettre en lumière les métiers de  la cascade en remettant des prix  à ceux qui les coordonnent, ceux qui les filment et ceux qui les font.
                        Le principe de notre concours  de court-métrage  est la réalisation   de films d’actions courts d’une durée de 2 minutes 30 sur un thème imposé.
                        Il est ouvert à toutes et à tous, jeunes espoirs et talents confirmés autour d’une même passion : Le cinéma d’action.
                    </p>

                    <div className='w-10/12 mx-auto flex justify-betweenflex-wrap'>
                        <img className='my-5 mx-auto object-cover shadow-xl' src="https://via.placeholder.com/650" alt="" />
                        <img className='my-5 mx-auto object-cover shadow-xl' src="https://via.placeholder.com/650" alt="" />
                    </div>

                    <p className='text-md lg:text-xl text-center my-8 lg:w-10/12 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, animi architecto dicta neque fugiat debitis quaerat veniam mollitia impedit molestias. Rem labore delectus illum exercitationem ad amet fugit unde, asperiores magni? Libero, asperiores assumenda temporibus, voluptatibus possimus non, porro incidunt ipsum quae illo natus cum maiores! Repellendus quidem nam hic doloremque voluptatum aliquid sapiente placeat, rem officia facere tenetur, distinctio dicta delectus sequi tempore dignissimos! Neque, omnis mollitia ad tempora consectetur, saepe libero in ipsa ut commodi nam a. Ea amet, itaque corrupti reprehenderit placeat, laborum sunt laudantium minima perspiciatis consectetur consequatur deserunt harum id dicta eveniet incidunt sequi, laboriosam quisquam nulla aliquid porro? Exercitationem facilis sit, laudantium dolore ut quod numquam adipisci rem reprehenderit provident! Fugiat iste veniam cumque alias qui numquam fugit nostrum corporis ratione ipsum! Laborum repellendus enim asperiores ad voluptas necessitatibus omnis, fugit debitis dignissimos quod exercitationem labore, error reiciendis aperiam consectetur, ipsum inventore voluptatum iusto.</p>


                    <div className='w-10/12 mx-auto flex justify-between flex-wrap '>
                        <img className='my-5 mx-auto lg:my-0  object-cover shadow-xl' src="https://via.placeholder.com/650" alt="" />
                        <img className='my-5 mx-auto lg:my-0  object-cover shadow-xl' src="https://via.placeholder.com/650" alt="" />
                    </div>
                </article>
            </section>


            <section className='w-screen bg-red-800 p-3 lg:p-20 my-28'>
                <div className='w-10/12 mx-auto grid md:grid-cols-2 lg:grid-cols-5  lg:place-items-start gap-24 '>

                    <div className='flex flex-col items-center justify-center w-full'>
                        <img className='w-24 lg:w-auto h-auto object-cover' src={Icon_Thinking} alt="" />
                        <h2 className='text-xl lg:text-2xl text-center '>1/ Inspiration</h2>
                        <p className='text-md text-center'> Trouvez la bonne idée et les talents pour vous accompagner dans cette aventure ! </p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full'>
                        <img className=' w-24 lg:w-auto h-auto object-cover' src={Sign_Up} alt="" />
                        <h2 className='text-xl lg:text-2xl text-center '>2/ Inscription</h2>
                        <p className='text-md text-center '> Créez un compte sur le site en quelques secondes pour recevoir toutes les informations sur le festival ! </p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full'>
                        <img className=' w-24 lg:w-auto h-auto object-cover' src={Content_Production} alt="" />
                        <h2 className='text-xl lg:text-2xl text-center '>3/ Réalisation</h2>
                        <p className='text-md text-center '> Préparez votre projet, organisez votre tournage et finalisez votre film. Attention à bien respecter la durée de 2min20 et le thème imposé ! </p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full'>
                        <img className=' w-24 lg:w-auto h-auto object-cover' src={Video_Production} alt="" />
                        <h2 className='text-xl lg:text-2xl text-center '>4/ Participation</h2>
                        <p className='text-md text-center '> Envoyez votre film via votre espace personnel avant la date limite puis complétez les informations sur l’œuvre, les sous-titres et l’équipe ! </p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full lg:col-span-1 col-span-full'>
                        <img className='w-24 lg:w-auto h-auto object-cover' src={Checked} alt="" />
                        <h2 className='text-xl lg:text-2xl text-center '>5/ Confirmation</h2>
                        <p className='text-md text-center '> Une fois votre participation validée, vous recevrez un email pour découvrir la date de diffusion. Ensuite, ce sera à vous de jouer ! </p>
                    </div>
                </div>
            </section>


            <section className='w-screen bg-red-800 p-3 lg:p-20 mt-28'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-xl lg:text-3xl text-center font-bold'>D'autres Question ? </h1>
                    <button className='inline-block mt-5 px-2 py-1 sm:px-6 sm:py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-sm lg:text-xl'>
                        <a href="/faq">Consulter Notre Foire au Question</a>
                    </button>
                </div>



            </section>
        </main>
    )
}
