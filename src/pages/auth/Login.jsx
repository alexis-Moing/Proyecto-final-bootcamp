import React, {useState} from 'react'

import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri"

import {Link} from "react-router-dom"

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleShowPassword = () => {
        setShowPassword(!showPassword)
        }

    const handleSubmit = (e) => {
    e.preventDefault()

    console.log(email, password)

    }

    return (
        <div className="bg-white p-8 rounded-lg md:w-96">
            <div className="mb-10"> 
                <h1 className="text-3xl uppercase font-bold text-center">Iniciar Sesión</h1>
            </div>

        <form onSubmit={handleSubmit}
        className="flex flex-col gap-4">
            <div className="relative">
            <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600" />
                <input type="email" 
                className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg" 
                placeholder="Correo electronico"
                value={email}
                onChange= {(e) => setEmail(e.target.value)}
                >
                </input>
            </div>  

            <div className="relative">
            <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600" />
                <input 
                type={ showPassword ? "text" : "password"}
                className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg" 
                placeholder="Contraseña"
                value={password}
                onChange= {(e) => setPassword(e.target.value)}
                >
                </input>

                {showPassword ? (
                <RiEyeOffLine onClick={handleShowPassword} 
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600" />
                ):(
                    <RiEyeLine onClick={handleShowPassword} 
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600" />  
                )
                }
            </div> 
        <div  className="text-right">
            <Link to="olvide-password" className="text-gray-600 hover:underline">¿Olvide mi Password?</Link>
        </div>


            <div>
                <button 
                className="mt-6  text-white w-full py-2 px-6 rounded-lg hover:scale-105 bg-sky-800 transition-all mb-6">Ingresar</button>
            </div>

        </form>
        <div className="text-center">
            ¿No estas registrado?  <Link to="registro" className="text-sky-600 font-medium hover:underline transition-all"> Registrate </Link>
            
        </div>
                    
        </div>
      
    )
}
export default Login
