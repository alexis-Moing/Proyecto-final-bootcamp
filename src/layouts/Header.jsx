import React from 'react'

import LogoIcon from '../components/home_components/header/IconLogo'
import { Link } from 'react-router-dom'

// Layout del de la barra de navegacion con links a login, registro, e inicio
// el link a nosotros esta temporalmente en desuso, hasta ser implementado
const Header = (props) => {
  return (
    <>
        <header className='w-full px-5 py-4 flex justify-between bg-[#4E4FEB] text-[#EEEEEE]'>
            <div className='flex gap-1'>
                <LogoIcon />
                <span className='font-bold text-lg my-auto'>cursapp</span>
            </div>

            <div className='flex gap-5'>
                <a className='my-auto hover:text-white hover:font-bold' href="">Nosotros</a>
                <Link className='my-auto hover:text-white hover:font-bold' to="/">Inicio</Link>
            </div>

            <div className='flex gap-3'>
                <button className='px-4 py-2 bg-[#000000] hover:bg-[#07001f] rounded-lg'><Link to="/register">Registrarse</Link></button>
                <button className='px-4 py-2 bg-[#000000] hover:bg-[#07001f] rounded-lg'><Link to="/login">Ingresar</Link></button>
            </div>
        </header>
        <main>
            {props.children}
        </main>
    </>
  )
}

export default Header