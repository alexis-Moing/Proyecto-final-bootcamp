import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "../src/pages/Home"
import Header from './layouts/Header'
import Error404 from "../src/pages/404"
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <>

    <BrowserRouter>
      <Header>
          <Routes>
            
            <Route path="/" element ={<Home/>} />
            <Route path="/login" element ={<Login/>} />
            <Route path="/register" element ={<Register/>} />
            <Route path="*" element={<Error404 />} />

          </Routes>
          
          <Footer />
      </Header>
    </BrowserRouter>
    </>
  )
}
// comentario
export default App