import React from 'react'
import { useState } from 'react';
export default function Question({ question, index }) {
    const [isExpended, setIsExpended] = useState(false);


    const handleClick = () => {
        setIsExpended(!isExpended)
    }

    return (
        <>
            <div className={`flex justify-between items-center flex-wrap border-2 p-1 lg:p-2  bg-gradient-to-b from-white to-gray-200 rounded-md ${isExpended ? 'mb-0' : 'mb-5'}`} index={index}>
                <div className=''>{question.question}</div>
                <div>
                    {isExpended ?
                        <button className='inline-block px-2 py-1 sm:px-6 sm:py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-sm lg:text-xl' onClick={() => handleClick()}>
                            -
                        </button>
                        :
                        <button className='inline-block px-2 py-1 sm:px-6 sm:py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-sm lg:text-xl' onClick={() => handleClick()}>
                            +
                        </button>}

                </div>

            </div>

            {
                isExpended &&
                <div className='block mb-5 w-full rounded-md bg-white shadow-xl border p-1 lg:p-2'>
                    {question.reponse}
                </div>
            }
        </>

    )
}
