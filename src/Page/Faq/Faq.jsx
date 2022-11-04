import React from 'react'
import { useState } from 'react'

export default function Faq() {

    const [isExpended, setIsExpended] = useState(false);


    const handleClick = () => {
        setIsExpended(!isExpended)
    }

    return (
        <main>
            <div>
                <h1>Foire au questions</h1>
            </div>
            <section className='w-9/12 mx-auto p-1 lg:p-4'>
                <div className='flex justify-between items-center border-2 p-1 lg:p-2 shadow-xl '>
                    <div className='w-full'>Ma question super importante ? </div>
                    <div>
                        {isExpended ? 
                        <button className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' onClick={() => handleClick()}>
                            +
                        </button> 
                        : 
                        <button className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' onClick={() => handleClick()}>
                            -
                        </button>}

                    </div>
                    {
                        isExpended &&
                        <div className='block w-full transition duration-150 ease-in-out'>
                            La reponse
                        </div>
                    }

                </div>
            </section>
        </main>
    )
}
