import React from 'react'
import { Facebook, Twitter, Instagram, YouTube } from '../../assets/icon/index'

export default function A_VENIR() {
    return (
        <>
            <main className='flex justify-center p-5 md:p-20'>
                <section className='border shadow-lg w-11/12  md:w-9/12  p-1 md:p-4 mx-auto my-auto  flex flex-col justify-evenly rounded-lg'>

                    <h1 className='text-center font-bold text-xl md:text-3xl p-1 my-5'>Cinéma Action Festival</h1>
                    <p className='text-lg text-center my-5'>Cette page est en cours de développement </p>
                    <div className='w-fit  mx-auto border'>
                        <img className='mx-auto' src="https://via.placeholder.com/250" alt="" />
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center place-items-center mt-10'>
                        <div className='' >
                            <a href="#">
                                <h2 className='my-4 text-center font-bold text-xl md:text-2xl hover:underline'>
                                    <img className='w-[75px] md:w-[90px] lg:w-[120px] h-auto mx-auto' src={Facebook} alt="" />
                                    Facebook</h2>
                            </a>
                        </div>
                        <div className=''>
                            <a href="#">
                                <h2 className='my-4 text-center font-bold text-xl md:text-2xl hover:underline'>
                                    <img className='w-[75px] md:w-[90px] lg:w-[120px] h-auto mx-auto' src={Twitter} alt="" />
                                    Twitter</h2>
                            </a>
                        </div>
                        <div className=''>
                            <a href="#">
                                <h2 className='my-4 text-center font-bold text-xl md:text-2xl hover:underline'>
                                    <img className='w-[75px] md:w-[90px] lg:w-[120px] h-auto mx-auto' src={Instagram} alt="" />
                                    Instagram</h2>
                            </a>
                        </div>
                        <div className='' >
                            <a href="#">
                                <h2 className='my-4 text-center font-bold text-xl md:text-2xl hover:underline'>
                                    <img className='w-[75px] md:w-[90px] lg:w-[120px] h-auto mx-auto' src={YouTube} alt="" />
                                    You Tube</h2>
                            </a>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}
