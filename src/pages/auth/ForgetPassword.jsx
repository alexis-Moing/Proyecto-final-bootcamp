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
            <section className='bg-white'>
                <div className=''>
                    <h2>Generar nueva contraseña</h2>

                    <p>Ingresa tu correo electronico con el que te registraste y te enviaremos un mensaje con
                        una nueva contraseña generada
                    </p>
                </div>

                <input 
                type="text" 
                placeholder='Direccion de correo electronico'
                value={email}
                onChange={(e) => setemail(e.target.value)}/>

                <button onClick={resetpasswordfunction} >Entregar</button>

                
            </section>
        </>
    )
}

export default ForgetPassword
