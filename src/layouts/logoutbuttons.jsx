import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const LogoutHeader = () => {
    const {cleanUser} = useContext(UserContext)

    const cerrarSesion = () => {
        console.log("cerrando sesion")
        cleanUser()
    }

    return (
        <>

        <button className=' px-4 py-2 no-underline hover:underline hover:transition-all  duration-150 hover:font-semibold rounded-lg'>
            <Link className='flex gap-1' to="/Busqueda">
                Busqueda
                <img className='hover:transition-all duration-150' src="src\icons\busqueda.svg" alt="" />
            </Link>
            
        </button>

        <button className=' px-4 py-2  hover:bg-[#8758FF] hover:transition-all  duration-150 hover:font-bold rounded-lg'>
            <Link to="/ProfilePage">Perfil</Link>
        </button>

        <button onClick={cerrarSesion} className='px-4 py-2  hover:bg-[#8758FF] hover:transition-all  duration-150 hover:font-bold rounded-lg'>
           <Link to="/">Cerrar sesion</Link>
        </button>
        </>
    )

}

export default LogoutHeader