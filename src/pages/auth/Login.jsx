import React, { useState, useEffect, useContext } from 'react'

import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri"
import useUI from '../../composables/useUI'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'


const Login = () => {
    
    const {storeUser} = useContext(UserContext)

    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { getUsers } = useUI()
    const navigate = useNavigate();
    // const [isAuth, setIsAuth] = useState("")
    const loginfunction = async () => {
        const datauser = {
            "email": email,
            "password": password
        }

        try {
            const respuesta = await getUsers(datauser);
            console.log('Respuesta de la API:', respuesta, datauser);
            if (respuesta.status == "success") {
                console.log(respuesta);
                console.log("respuesta id:", respuesta.user_id)
                // Redirigir al usuario a la página "/HomeUser"
                navigate('/HomeUser');
            
            }
        } catch (error) {
            console.log(error.details);
            alert(error.details.data.message);
        }
        
        storeUser(true)

    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(email, password)

        loginfunction();
    }

    return (
        <div className="bg-white p-8 rounded-lg md:w-96 mx-5">
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
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    >
                    </input>
                </div>

                <div className="relative">
                    <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600" />
                    <input
                        type={showPassword ? "text" : "password"}
                        className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    >
                    </input>

                    {showPassword ? (
                        <RiEyeOffLine onClick={handleShowPassword}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600" />
                    ) : (
                        <RiEyeLine onClick={handleShowPassword}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600" />
                    )
                    }
                </div>
                <div className="text-right">
                    <Link to="/ForgetPassword" className="text-gray-600 hover:underline">¿Olvide mi Password?</Link>
                </div>


                <div>

                    <button onClick={loginfunction}
                        className="mt-6  text-white w-full py-2 px-6 rounded-lg hover:scale-105 bg-sky-800 transition-all mb-6">Ingresar</button>

                </div>

            </form>
            <div className="text-center">
                ¿No estas registrado?
                <Link to="/register" className="text-sky-600 font-medium hover:underline transition-all">
                    Registrate
                </Link>

            </div>

        </div>

    )
}
export default Login
