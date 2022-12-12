import React from 'react'
import video_Serge from "../../assets/video/Serge_Crozon_presentation.mp4"
export default function Heros() {
    return (
        <section className=''>

            <video className='w-screen h-full' autoPlay muted loop playsInline>
                <source type='video/mp4' src={video_Serge} />
            </video>
        </section >
    )
}
