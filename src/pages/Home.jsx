import React from 'react'


import Hero from '../components/home_components/hero/Hero'
import Contenido from '../components/home_components/contenido/contenido'
import CatalogoHome from '../components/home_components/catalogo/catalogo'
import Acordeon from '../components/home_components/acordeon/acordeon'

const Home = () => {
  return (
    <>
        <Hero />
        <Contenido/>
        <CatalogoHome/>
        <Acordeon/>
    </>
  )
}

export default Home