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

                    <div className='w-10/12 mx-auto flex lg:justify-between flex-wrap '>
                        <img className='my-5 mx-auto lg:my-0 lg:mx-0 object-cover shadow-xl' src="https://via.placeholder.com/350" alt="" />
                        <img className='my-5 mx-auto lg:my-0 lg:mx-0 object-cover shadow-xl' src="https://via.placeholder.com/350" alt="" />
                    </div>

                    <p className='text-md lg:text-xl text-center my-8 lg:w-10/12 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, animi architecto dicta neque fugiat debitis quaerat veniam mollitia impedit molestias. Rem labore delectus illum exercitationem ad amet fugit unde, asperiores magni? Libero, asperiores assumenda temporibus, voluptatibus possimus non, porro incidunt ipsum quae illo natus cum maiores! Repellendus quidem nam hic doloremque voluptatum aliquid sapiente placeat, rem officia facere tenetur, distinctio dicta delectus sequi tempore dignissimos! Neque, omnis mollitia ad tempora consectetur, saepe libero in ipsa ut commodi nam a. Ea amet, itaque corrupti reprehenderit placeat, laborum sunt laudantium minima perspiciatis consectetur consequatur deserunt harum id dicta eveniet incidunt sequi, laboriosam quisquam nulla aliquid porro? Exercitationem facilis sit, laudantium dolore ut quod numquam adipisci rem reprehenderit provident! Fugiat iste veniam cumque alias qui numquam fugit nostrum corporis ratione ipsum! Laborum repellendus enim asperiores ad voluptas necessitatibus omnis, fugit debitis dignissimos quod exercitationem labore, error reiciendis aperiam consectetur, ipsum inventore voluptatum iusto.</p>


                    <div className='w-10/12 mx-auto flex lg:justify-between flex-wrap '>
                        <img className='my-5 mx-auto lg:my-0 lg:mx-0 object-cover shadow-xl' src="https://via.placeholder.com/350" alt="" />
                        <img className='my-5 mx-auto lg:my-0 lg:mx-0 object-cover shadow-xl' src="https://via.placeholder.com/350" alt="" />
                    </div>
                </article>
            </section>



            <section className='w-screen mt-12  border '>
                <div className='w-10/12 mx-auto grid lg:grid-cols-5 '>

                    <div>
                        <img className='border w-28 h-auto' src={Icon_Thinking} alt="" />
                        <h2></h2>
                        <p></p>
                    </div>
                    <div>
                        <img className='border w-28 h-auto' src={Sign_Up} alt="" />
                        <h2></h2>
                        <p></p>
                    </div>
                    <div>
                        <img className='border w-28 h-auto' src={Content_Production} alt="" />
                        <h2></h2>
                        <p></p>
                    </div>
                    <div>
                        <img className='border w-28 h-auto' src={Video_Production} alt="" />
                        <h2></h2>
                        <p></p>
                    </div>
                    <div>
                        <img className='border w-28 h-auto' src={Checked} alt="" />
                        <h2></h2>
                        <p></p>
                    </div>

                </div>

            </section>
        </main>
    )
}
