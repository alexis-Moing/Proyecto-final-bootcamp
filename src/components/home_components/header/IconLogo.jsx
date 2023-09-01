import React from 'react'

import logo from '../../../assets/logo.png'
import logo3b from '../../../assets/logo3b.png'

// Componente con  logo de la pagina, la imagen en
// formato png se importa de assets
const LogoIcon = () => {
  return (
    <>
        <img className='w-10 h-10 my-auto' src={logo3b} alt="logo" />
    </>
  )
}

export default LogoIcon