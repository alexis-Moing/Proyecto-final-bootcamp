import React, { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "../src/pages/Home"
import Header from './layouts/Header'
import Error404 from "../src/pages/404"
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgetPassword from './pages/auth/ForgetPassword'
import HomeUser from './pages/homeUser'
import Footer from './layouts/Footer'
import Carrito from './components/home_components/carrito/carrito'
import CursoDetalle from './components/home_components/hero_courses/CursoDetalle'
import cors from "cors"

const App = () => {
  const [allcourses, setAllCourses] = useState([])
  const [total, setTotal] = useState(0)
  const [countCourses, setCountCourses] = useState(0)

  const agregarcarrito = (inforecibida) => {
    const precioNumerico = parseFloat(inforecibida.precio.replace(',', '.'));
     // Convierte la cadena en un número
    setAllCourses((prevCourses) => [...prevCourses, inforecibida]);
    setTotal((prevTotal) => (parseFloat(prevTotal) + precioNumerico).toFixed(2)); // Sumar el precio del curso al total
    //20.32
    setCountCourses((prevCount) => prevCount + 1); // Incrementar la cantidad de cursos en 1
    console.log(allcourses);
  }

  return (
    <>

      <BrowserRouter>
        <Header
          allcourses={allcourses}
          countCourses={countCourses}
          total={total}
        />

        <Routes>
          

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ForgetPassword" element={<ForgetPassword/>} />
          <Route path="/homeUser" element={<HomeUser/>} />
          <Route path="*" element={<Error404 />} />

          <Route
            path="/carrito"
            element={<Carrito allcourses={allcourses} />}
          />

          <Route
            total={total}
            element={<CursoDetalle agregarcarritofunction={agregarcarrito} />}
            path="/cursoDetalle/:cursoId"
          />
        </Routes>
        
        <Footer />

        cors = {cors({
          origin:"*",
          allowedHeaders: ["Content-Type", "Authorization"],
          allowedMethods: ["GET", "POST", "PUTH", "DELETE"],
        })}

      </BrowserRouter>
    </>
  )
}
// comentario
export default App