import React from 'react'

import database from '../../../../assets/database.png'

// Componente con icono de base de datos, la imagen
// en formato png se importo de la carpeta assets
const IconDataBase = () => {
  return (
    <>
        <img
            className="w-6 h-6"
            src={database}
            alt="" />
    </>
  )
}

export default IconDataBase