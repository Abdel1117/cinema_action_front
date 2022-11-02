import React from 'react'

export default function Participer() {
    return (
        <main>
            <h1 className='text-xl lg:text-4xl text-center m-8'>Condition de Participation</h1>

            <section className='mx-1 lg:mx-0'>
                <p className='text-center mx-auto lg:w-2/4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque facilis laudantium fugiat id cumque modi itaque vero error? Consectetur quisquam laudantium, porro veritatis minus omnis doloremque quos quae voluptatibus reprehenderit.</p>

            </section>

            <section className='lg:w-3/5 mx-auto grid lg:grid-cols-2 gap-3 mt-6 mb-12'>

                <div className='bg-red-600 lg:p-10 flex flex-col text-center mx-4 p-2 lg:mx-0'>
                    <h1 className='text-xl lg:text-3xl mx-auto my-4'>Mon Titre</h1>
                    <p className='text-center mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quae soluta vitae nisi exercitationem nulla aliquam cupiditate ex delectus voluptatum, expedita, neque minima sequi laboriosam inventore!</p>

                    <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, tempora.</p>


                </div>
                <div className='bg-red-600 lg:p-10 flex flex-col text-center mx-4 p-2 lg:mx-0'>
                    <h1 className='text-xl lg:text-3xl mx-auto my-4'>Mon Titre</h1>
                    <p className='text-center mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quae soluta vitae nisi exercitationem nulla aliquam cupiditate ex delectus voluptatum, expedita, neque minima sequi laboriosam inventore!</p>

                    <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, tempora.</p>
                </div>

            </section>
            <section className='w-full bg-red-600 text-center'>
                <div className='p-1 lg:py-4 w-10/12 lg:w-3/6 mx-auto'>

                    <h2 className=' font-bold text-xl lg:text-3xl my-4'>Mon Titre</h2>
                    <p className='font-bold text-xl'>Le defis du festival Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium nulla repellendus culpa! Tenetur odit asperiores at voluptates quae. Neque, cumque.</p>
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6">Call To Action</button>
                </div>

            </section>
        </main>
    )
}
