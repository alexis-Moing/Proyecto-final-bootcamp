import React from 'react'

import powerbi from '../../../../assets/powerbi.png'

// Componente con icono relacionado a power bi, la imagen
// en formato png se importo de la carpeta assets
const IconPowerBi = () => {
  return (
    <>
        <img
            className="w-6 h-6"
            src={powerbi}
            alt="" />
    </>
  )
}

export default IconPowerBi