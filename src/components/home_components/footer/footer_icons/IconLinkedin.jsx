import React from 'react'

import linkedin from "../../../../assets/linkedin.png"

// Componente con  logo de Linkedin, la imagen en
// formato png se importa de assets
const IconLinkedin = () => {
  return (
    <>
        <img className='w-[40px] h-[40px] mx-auto' src={linkedin} alt="facebook_icon" />
    </>
  )
}

export default IconLinkedin