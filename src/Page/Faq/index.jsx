import React, { useEffect } from 'react'
import { QuestionList } from '../../assets/Data/QuestionList'
import Question from '../../Compenants/Question/Question'

export default function Faq() {


    return (
        <main>
            <div className='mt-12 text-xl font-bold lg:text-3xl text-center'>
                <h1 >Foire au questions</h1>
            </div>
            <section className='w-11/12 lg:w-9/12 mx-auto p-1 lg:p-4'>

                {
                    QuestionList.map((question, index) =>
                        <Question question={question} index={index} />

                    )}
            </section>
        </main>
    )
}
