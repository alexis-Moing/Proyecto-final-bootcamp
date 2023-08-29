import React, {useState} from 'react'

import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine, RiUserLine } from "react-icons/ri"

import {Link} from "react-router-dom"

const Register = () => {

const [showPassword, setShowPassword] = useState(false)
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
//
const [name, setName] = useState("")
const [lastname, setLastname] = useState("")
const [confirmpassword, setConfirmPassword] = useState("")


const handleShowPassword = () => {
    setShowPassword(!showPassword)
    }

const handleSubmit = (e) => {
e.preventDefault()

console.log(name, lastname, email, password, confirmpassword)

}

    return (
<div className="bg-white p-8 rounded-lg md:w-96">
    <div className="mb-10"> 
          <h1 className="text-3xl uppercase font-bold text-center">REGISTRARSE</h1>
    </div>

  <form onSubmit={handleSubmit}
  className="flex flex-col gap-4">
     <div className="relative">
    <RiUserLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600" />
         <input type="text" 
         className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg" 
         placeholder="Nombre(s)"
         value={name}
         onChange= {(e) => setName(e.target.value)}
         >
         </input>
    </div>  

    <div className="relative">
    <RiUserLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600" />
         <input type="text" 
         className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg" 
         placeholder="Apellidos"
         value={lastname}
         onChange= {(e) => setLastname(e.target.value)}
         >
         </input>
    </div>  

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

    <div className="relative">
    <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600" />
         <input 
         type={ showPassword ? "text" : "password"}
         className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg" 
         placeholder="Confirmar Contraseña"
        value={confirmpassword}
         onChange= {(e) => setConfirmPassword(e.target.value)}
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




    <div>
        <button 
        className="mt-6 bg-sky-600 text-white w-full py-2 px-6 rounded-lg hover:scale-105 bg-sky-800 transition-all mb-6">Crear Cuenta</button>
    </div>

  </form>

    <div className="flex items-center justify-between">

     <div className="text-left">
      YA tienes cuenta! <Link to="/" className="text-sky-600 font-medium hover:underline transition-all"> Ingresar </Link>
     </div>

     <div className="text-right">
       <Link to="/olvide-password" className="text-sky-600 font-medium hover:underline transition-all"> Olvidaste tu password </Link>
    </div>

   </div>

</div>
      
    )
}
export default Register
