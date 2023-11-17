import React from 'react'

import IconFacebook from '../components/home_components/footer/footer_icons/IconFacebook'
import IconLinkedin from '../components/home_components/footer/footer_icons/IconLinkedin'
import IconTwitter from '../components/home_components/footer/footer_icons/IconTwitter'
import IconLogo from '../components/home_components/header/IconLogo'

// Layout del footer
const Footer = () => {
  return (
    <>
        <footer className=' bg-[#181818] px-12 py-7 flex flex-col text-[#EEEEEE]'>

            <h1 className='font-extrabold flex justify-center pb-4'>CINEPLUS</h1>

            <div className=''>
                <div className=' flex gap-8 justify-center'>
                    <h6 className='text-sm'>Condiciones de uso</h6>
                    <a className='text-sm' href="">Privacidad</a>
                    <a className='text-sm' href="">Anuncios de prensa</a>
                </div>

                <div className=' flex gap-8 pt-4 justify-center'>
                    <h6 className='text-sm'>Contactos de prensa</h6>
                    <a className='text-sm' href="">Gestionar preferencias</a>
                </div>
                <div className='flex justify-center text-sm pt-4'>
                    <p className=''>@ 2023 CINEPLUS Direct Latin America. Todos los derechos reservados</p>
                </div>

                <div className='flex'>
                    <IconFacebook />
                    <IconLinkedin />
                    <IconTwitter />
                </div>
            </div>

        </footer>
    </>
  )
}

export default Footer