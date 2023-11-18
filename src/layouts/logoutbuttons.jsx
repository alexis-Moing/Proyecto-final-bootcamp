import { useState } from 'react'
import { Link } from 'react-router-dom'

const logoutHeader = () => {

    return (
        <>
        <button className='px-4 py-2  hover:bg-[#8758FF] hover:transition-all  duration-150 hover:font-bold rounded-lg'>
            <Link to="/register">Perfil</Link>
        </button>

        <button className='px-4 py-2  hover:bg-[#8758FF] hover:transition-all  duration-150 hover:font-bold rounded-lg'>
            <Link to="/login">Busqueda</Link>
        </button>
        </>
    )

}

export default logoutHeader