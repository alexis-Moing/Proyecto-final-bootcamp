import React from 'react'

import IconFacebook from '../components/home_components/footer/footer_icons/IconFacebook'
import IconLinkedin from '../components/home_components/footer/footer_icons/IconLinkedin'
import IconTwitter from '../components/home_components/footer/footer_icons/IconTwitter'
import IconLogo from '../components/home_components/header/IconLogo'

// Layout del footer
const Footer = () => {
  return (
    <>
        <footer className='w-full bg-[#000000] px-24 py-7 flex flex-col text-[#EEEEEE]'>

            <div className='flex justify-evenly'>
                <div className='w-1/3 flex flex-col gap-2 text-center'>
                    <h6 className='font-bold text-md'>Nosotros</h6>
                    <a className='text-sm' href="">Historia</a>
                    <a className='text-sm' href="">Mision</a>
                    <a className='text-sm' href="">Vision</a>
                </div>

                <div className='w-1/3 flex flex-col gap-2 text-center'>
                    <h6 className='font-bold text-md'>Soluciones</h6>
                    <a className='text-sm' href="">Cursos</a>
                    <a className='text-sm' href="">Bolsa de trabajo</a>
                    <a className='text-sm' href="">Capacitaciones</a>
                </div>

                <div className='w-1/3 flex flex-col gap-2 text-center'>
                    <h6 className='font-bold text-md'>Contacto</h6>
                    <IconFacebook />
                    <IconLinkedin />
                    <IconTwitter />
                </div>
            </div>

            <div className='flex gap-5 justify-center'>
                <IconLogo />
                <span className='my-auto text-slate-700'>Cursapp 2023 - Todos los derechos reservados</span>
            </div>
        </footer>
    </>
  )
}

export default Footer