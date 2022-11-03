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
            <section>
                <div>
                    <div>Ma question super importante ? </div>
                    <div>
                        {isExpended ? <button onClick={() => handleClick()}>(+)</button> : <button onClick={() => handleClick()}>(-)</button>}

                    </div>
                    {
                        isExpended &&
                        <div>
                            La reponse
                        </div>
                    }

                </div>
            </section>
        </main>
    )
}
