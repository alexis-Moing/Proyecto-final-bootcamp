import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "../src/pages/Home"
import Header from './layouts/Header'
import Error404 from "../src/pages/404"
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Footer from './layouts/Footer'
import Carrito from './components/home_components/carrito/carrito'
import CursoDetalle from './components/home_components/hero_courses/CursoDetalle'

const App = () => {
  const [allcourses, setAllCourses] = useState([])
  const [total, setTotal] = useState(0)
  const [countCourses, setCountCourses] = useState(0)


  return (
    <>

    <BrowserRouter>
      <Header>
          <Routes>
            
            <Route path="/" element ={<Home/>} />
            <Route path="/login" element ={<Login/>} />
            <Route path="/register" element ={<Register/>} />
            <Route path="*" element={<Error404 />} />
            
            <Route 
              path="/carrito" 
              element ={<Carrito/>}
              allcourses={allcourses}
              setAllCourses={setAllCourses}
              total={total}
              setTotal={setTotal}
              countCourses={countCourses}
              setCountCourses={setCountCourses}/>

            <Route 
              path="/cursoDetalle/:cursoId" 
              Component={CursoDetalle} 
              allcourses={allcourses}
              setAllCourses={setAllCourses}
              total={total}
              setTotal={setTotal}
              countCourses={countCourses}
              setCountCourses={setCountCourses}/>
          </Routes>
          
          <Footer />
      </Header>
    </BrowserRouter>
    </>
  )
}
// comentario
export default App