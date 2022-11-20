import React from 'react'
import { useState } from 'react'

export default function Header() {
    const [navbar, setNavbar] = useState(false)
    return (

        <nav className="w-full bg-black ">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 lg:block">
                        <a href="/">
                            <h2 className="text-2xl font-bold text-white">LOGO</h2>
                        </a>
                        <div className="lg:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 lg:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                            <li className="text-white hover:opacity-50">
                                <a href="/participer">Comment participez</a>
                            </li>
                            <li className="text-white hover:opacity-50">
                                <a href="/faq">FAQ</a>
                            </li>
                            <li className="text-white hover:opacity-50">
                                <a href="/about">About US</a>
                            </li>
                            <li className="text-white hover:opacity-50">
                                <a href="javascript:void(0)">Contact US</a>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden inline-block w-full">
                            <a
                                href="/connexion"
                                className="inline-block w-full px-4 py-2 text-center text-white bg-blue-600 rounded-md shadow hover:bg-green-800"
                            >
                                Connexion
                            </a>
                            <a
                                href="/inscription"
                                className="inline-block w-full px-4 py-2 text-center text-gray-800 hover:text-white bg-white rounded-md shadow hover:bg-green-800"
                            >
                                Inscription
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 lg:inline-block">
                    <a
                        href="/connexion"
                        className="px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-green-800"
                    >
                        Connexion
                    </a>
                    <a
                        href="/inscription"
                        className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-green-800 hover:text-white"
                    >
                        Inscription
                    </a>
                </div>
            </div>
        </nav>

    )
}
