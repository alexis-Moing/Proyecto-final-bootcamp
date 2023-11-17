import React from 'react'

import ilustration from "../../../assets/illu_landing.png"

import fondo2 from "../../../assets/fondo2.jpg"
import { Link } from 'react-router-dom'

// Componente con la seccion hero de la pagina de inicio, la cual consta
// de una illustracion, y un un texo con boton a llamado a accion
// la ilustracion en formato png se importo de la carpeta assets
const Hero = () => {
    const backgroundImage = `url(${fondo2})`;

  return (
    <>
        <section className='lg:flex bg-black sm:bg-cover lg:my-10'>

                <div className='w-full flex animate-fade-right animate-delay-500 animate-ease-linear'>
                    <img className=''
                    src= {fondo2} 
                    alt="backgroundImageb" />
                </div>


                

                <div className=' flex flex-col justify-center py-4 lg:py-20 animate-fade-left animate-delay-500 animate-ease-linear gap-2'>

                    <div className=' flex flex-col gap-6'>
                        <h1 className='px-2 text-[#F2F2F2] font-bold text-5xl text-center lg:text-left '>
                            Tu entretenimiento favorito y mucho más
                        </h1>

                        <div className='grid justify-items-center'>
                            <button className='w-1/2 px-4 py-2 bg-[#8758FF] hover:bg-[#393ab3] rounded-lg text-[#EEEEEE] hover:text-white'>
                                <Link to="/register">
                                    Registrate Ahora
                                </Link>
                            </button>
                        </div>
                    </div>


                    <Link className='text-center  text-[#F2F2F2] no-underline hover:underline'>
                        Aplica terminos y condiciones*
                    </Link>
                </div>
  
            

            {/* <div className='w-full py-10 mt-20 bg-[#000000]'>
                <HeroMarquee />
            </div> */}

            {/* <FondosSlider /> */}
        </section>
    </>
  )
}

export default Hero