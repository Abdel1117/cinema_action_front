import React from 'react'
import Heros from '../../Compenants/Heros'
import { Facebook, Twitter, Instagram, YouTube } from '../../assets/icon/index'
import TimeStamp from '../../Compenants/TimeStamp'

export default function Accueil() {
    return (
        <main>
            <Heros />

            <section className='lg:p-16 text-center'>
                <div>
                    <h1 className='text-bold text-xl lg:text-3xl my-4'>Cinema Action festival</h1>
                </div>
                <TimeStamp />
                <p className='text-bold text-xl my-4  lg:my-2'>À attendre avant l'ouverture des inscriptions</p>
                <p className='text-bold text-xl my-4  lg:my-2'>Le Thème étant l'Action </p>
            </section>

            <section className='lg:p-14'>
                <div className=''>
                    <h2 className="text-center text-2xl lg:text-4xl mb-4">SUIVEZ-NOUS</h2>
                    <div className='flex space-x-6 align-middle p-1 justify-center'>
                        <a href="#"><img className='w-10 lg:w-12 h-auto' src={Facebook} alt="" /></a>
                        <a href="#"><img className='w-10 lg:w-12 h-auto' src={Twitter} alt="" /></a>
                        <a href="#"><img className='w-10 lg:w-12 h-auto' src={Instagram} alt="" /></a>
                        <a href="#"><img className='w-10 lg:w-12 h-auto' src={YouTube} alt="" /></a>
                    </div>
                </div>
            </section>

        </main>
    )
}

