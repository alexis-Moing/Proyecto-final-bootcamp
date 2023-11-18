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
        <button className=' px-4 py-2  hover:bg-[#8758FF] hover:transition-all  duration-150 hover:font-bold rounded-lg'>
            <Link to="/register">Perfil</Link>
        </button>

        <button onClick={cerrarSesion} className='px-4 py-2  hover:bg-[#8758FF] hover:transition-all  duration-150 hover:font-bold rounded-lg'>
            cerrar sesion
        </button>
        </>
    )

}

export default LogoutHeader