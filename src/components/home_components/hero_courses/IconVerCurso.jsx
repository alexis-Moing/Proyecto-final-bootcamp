import React from 'react';

import verCurso from '../../../assets/ver_curso.png';

// Componente con el icono para el boton ver curso, la imagen
// en formato png se carga de la carpeta assets
const IconVerCurso = () => {
  return (
    <>
        <img className='w-6 h-6' src={verCurso} alt="ver_icon" />
    </>
  )
}

export default IconVerCurso