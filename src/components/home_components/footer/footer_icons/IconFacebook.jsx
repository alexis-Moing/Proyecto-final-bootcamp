import React from 'react'

import facebook from "../../../../assets/facebook.png"

// Componente con el logo de Facebook, la imagen en formato
// png se importa de la carpeta assets
const IconFacebook = () => {
  return (
    <>
        <img className='w-[40px] h-[40px] mx-auto' src={facebook} alt="facebook_icon" />
    </>
  )
}

export default IconFacebook