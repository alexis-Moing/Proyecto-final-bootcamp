import React from 'react'


import Hero from '../components/home_components/hero/Hero'
import Courses from '../components/home_components/hero_courses/Courses'
import Beneficios from '../components/home_components/Beneficios/Beneficios'

const Home = () => {
  return (
    <>
        <Hero />
        <Beneficios/>
        <Courses />
    </>
  )
}

export default Home