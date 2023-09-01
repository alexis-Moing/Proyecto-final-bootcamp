import React from 'react'

import ilustration from "../../../assets/illu_landing.png"

import HeroMarquee from './HeroMarquee'
import { Link } from 'react-router-dom'

// Componente con la seccion hero de la pagina de inicio, la cual consta
// de una illustracion, y un un texo con boton a llamado a accion
// la ilustracion en formato png se importo de la carpeta assets
const Hero = () => {
  return (
    <>
        <section className='w-full flex flex-col'>

            <div className='w-full px-14 py-5 my-18 flex-grap gap-6 sm:flex-grap md:flex lg:flex'>

                <div className='w-full flex animate-fade-left animate-delay-500 animate-ease-linear'>
                    <img
                        className='w-1/2 m-auto'
                        src={ilustration}
                        alt="ilustracion"
                        />
                </div>

                <div className='mt-4 w-full md:w-1/2 flex flex-col md:py-20 gap-6 animate-fade-right animate-delay-500 animate-ease-linear'>
                    <h1 className='font-bold text-5xl text-center md:text-left'>
                        Aprende las tecnologias mas
                        demandadas en el mejor lugar
                    </h1>
                    <h5 className='text-center md:text-left '>
                        Registrate y mejora tus posibilidades laborales
                    </h5>
                    <div className='grid justify-items-center'>
                        <button className='w-1/2 px-4 py-2 bg-[#4E4FEB] hover:bg-[#393ab3] rounded-lg text-[#EEEEEE] hover:text-white'>
                            <Link to="/register">
                                Registrarme
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-full py-10 mt-20 bg-[#000000]'>
                <HeroMarquee />
            </div>
        </section>
    </>
  )
}

export default Hero