import React from 'react'

import excel from '../../../../assets/excel.png'

// Componente con icono de base de excel, la imagen
// en formato png se importo de la carpeta assets
const IconExcel = () => {
  return (
    <>
        <img
            className="w-6 h-6"
            src={excel}
            alt="" />
    </>
  )
}

export default IconExcel