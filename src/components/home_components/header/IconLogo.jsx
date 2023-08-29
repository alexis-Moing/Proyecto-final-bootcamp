import React from 'react'

import logo from '../../../assets/logo.png'

// Componente con  logo de la pagina, la imagen en
// formato png se importa de assets
const LogoIcon = () => {
  return (
    <>
        <img className='w-10 h-10 my-auto' src={logo} alt="logo" />
    </>
  )
}

export default LogoIcon