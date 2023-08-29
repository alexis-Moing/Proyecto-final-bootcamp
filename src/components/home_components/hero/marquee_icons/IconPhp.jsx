import React from 'react'

import php from '../../../../assets/php.png'

// Componente con icono de php, la imagen
// en formato png se importo de la carpeta assets
const IconPhp = () => {
  return (
    <>
        <img
            className="w-6 h-6"
            src={php}
            alt="" />
    </>
  )
}

export default IconPhp