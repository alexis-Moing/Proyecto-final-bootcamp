import { useState } from 'react'

import LogoIcon from '../components/home_components/header/IconLogo'
import { Link } from 'react-router-dom'
import LogoCarrito from '../components/home_components/carrito/logocarrito'

// Layout del de la barra de navegacion con links a login, registro, e inicio
// el link a nosotros esta temporalmente en desuso, hasta ser implementado
const Header = ({ countCourses, allcourses, total }) => {
    console.log(countCourses, allcourses, total, "countCourses")
    const [active, setActive] = useState(false);

    return (
        <>
            <header className='w-full px-5 py-4 flex justify-between bg-[#4E4FEB] text-[#EEEEEE]'>
                <div className='flex gap-1'>
                    <LogoIcon />
                    <span className='font-bold text-lg my-auto'>Absolute</span>
                </div>

                <div className='flex gap-5'>
                    <a className='my-auto hover:text-white hover:font-bold transition-all' href="">Nosotros</a>
                    <Link className='my-auto hover:text-white hover:font-bold transition-all' to="/">Inicio</Link>
                </div>

                <div className='flex gap-3'>


                    <div className='container-icon'>
                        <div className='container-cart-icon flex' onClick={() => setActive(!active)}>
                            <Link to="/carrito"><LogoCarrito /></Link>

                            <div className='count-products bg-black h-5 w-5 text-center rounded-lg flex justify-center'>
                                <span className='' id='contador-productos'>{countCourses}</span>
                            </div>
                        </div>
                   
                    </div>

                    <button className='px-4 py-2 bg-[#000000] hover:bg-white hover:transition-all hover:text-black duration-150 hover:font-bold rounded-lg'><Link to="/register">Registrarse</Link></button>
                    <button className='px-4 py-2 bg-[#000000] hover:bg-white hover:transition-all hover:text-black duration-150 hover:font-bold rounded-lg'><Link to="/login">Ingresar</Link></button>
                </div>
            </header>
        
        </>
    )
}

export default Header