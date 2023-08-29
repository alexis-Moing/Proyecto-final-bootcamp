import React from 'react'

import twitter from "../../../../assets/twitter.png"

// Componente con  logo de Twitter, la imagen en
// formato png se importa de assets
const IconTwitter = () => {
  return (
    <>
        <img className='w-[30px] h-[30px] mx-auto' src={twitter} alt="facebook_icon" />
    </>
  )
}

export default IconTwitter