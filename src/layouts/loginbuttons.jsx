import React from 'react'
import { Link } from 'react-router-dom'

const LoginButtons = () => {
  return (
    <>
        <button className='px-4 py-2  hover:bg-[#8758FF] hover:transition-all  duration-150 hover:font-bold rounded-lg'>
            <Link to="/register">Registrarse</Link>
        </button>

        <button className='px-4 py-2  hover:bg-[#8758FF] hover:transition-all  duration-150 hover:font-bold rounded-lg'>
            <Link to="/login">Ingresar</Link>
        </button>
    </>
  )
}

export default LoginButtons