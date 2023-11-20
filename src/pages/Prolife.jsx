import React, { useState, useEffect } from "react";
import useUI from "../composables/useUI";
import { Link } from "react-router-dom";


const ProfilePage = () => {

    
    const [dataProfile, setDataProfile] = useState([])
    const {userProfile} = useUI()

    useEffect(() => {

        console.log("la pagina del perfil a sido cargada")

        const fetchProfile = async () => {
            try {
                const profile = await userProfile("http://127.0.0.1:8000/users/profile/me")
                console.log(profile)
                setDataProfile(profile)
                
            } catch (error) {
                console.error("error al obtener datos de perfil: ", error)
            }
        }

        fetchProfile();
    }, []);

    return (
        <>
            <article className="bg-white">
                <h1>Tu Cuenta</h1>

                <section>
                   
                </section>
            </article>
        </>
    )
}

export default ProfilePage