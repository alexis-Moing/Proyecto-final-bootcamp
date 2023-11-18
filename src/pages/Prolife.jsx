import React, { useState, useEffect } from "react";
import useUI from "../composables/useUI";
import { Link } from "react-router-dom";

const ProfilePage = () => {

    const {userId} = useUser()
    const [userData, setUserData] = useState([])
    const {getUsersbyID} = useUI()

    useEffect(() => {
        console.log('La página ha sido cargada');
        
        const fetchData = async () => {
    
            try {
                if (userId !== undefined && userId !== null) {
                    const data= await getUsersbyID(`http://127.0.0.1:8000/users/${userId}`)
                    // const data = await response.json()
                    setUserData(data)
                    // info = data.results;
                    console.log("userId: ",userId)
                    console.log("datos del usuario obtenidos: ", data)
                } else {
                    console.log("userId no disponible")
                }
            } catch (error){
                console.error("error al obtener la data: ", error)
            }
        }
        
        fetchData();    
    }, [userId]);

    return (
        <>
            <article className="bg-white">
                <h1>Tu Cuenta</h1>

                <section>
                    <h1>perfil de usuario {userId}</h1>
                </section>
            </article>
        </>
    )
}

export default ProfilePage