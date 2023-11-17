import React from 'react'


import Hero from '../components/home_components/hero/Hero'
import Contenido from '../components/home_components/contenido/contenido'
import CatalogoHome from '../components/home_components/catalogo/catalogo'

const Home = () => {
  return (
    <>
        <Hero />
        <Contenido/>
        <CatalogoHome/>
    </>
  )
}

export default Home