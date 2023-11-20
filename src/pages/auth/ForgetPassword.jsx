import React, { useState } from 'react'
import useUI from '../../composables/useUI'


const ForgetPassword = () => {

    const [email, setemail] = useState("")
    const {ResetPassword} = useUI()

    const resetpasswordfunction = async() => {
        const emailuser = {
            "email" : email
        }

        const respuesta = await ResetPassword(emailuser)
        console.log(respuesta)

        try {
            const respuesta = await ResetPassword()
            console.log(respuesta)
          } catch (error) {
            console.log(error)
          }
    }

    return (
        <>
            <section className='bg-[#181818] sm:h-80 mx-20 my-4 sm:my-20 py-8 sm:py-10 px-10 border-4 border-[#8758FF] rounded-sm'>
                <div className='flex-col text-center'>
                    <h2 className="text-white text-center text-3xl lg:text-4xl font-semibold mb-6">Generar nueva contraseña</h2>

                    <p className="text-white mb-4">Ingresa tu correo electronico con el que te registraste y te enviaremos un mensaje con
                        una nueva contraseña generada
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 justify-center sm: py-8">
                    <input 
                    type="text" 
                    placeholder='Direccion de correo electronico'
                    value={email}
                    className="rounded-sm sm:w-80"
                    onChange={(e) => setemail(e.target.value)}/>

                    <button 
                    onClick={resetpasswordfunction}
                    className="text-white border-2 bg-[#8758FF] border-[#8758FF] rounded-sm py-2 sm:w-60" 
                    >Entregar
                    </button>
                </div>
                

                
            </section>
        </>
    )
}

export default ForgetPassword
