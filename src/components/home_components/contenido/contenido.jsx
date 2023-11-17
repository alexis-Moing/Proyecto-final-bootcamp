import React from "react";
import dispositivos from "../../../assets/dispositivos.png"

const Contenido = () => {
    return (
        <>
            <section className="  bg-black my-10 md:flex">



                <div className="flex flex-col gap-5 px-2 sm:px-4 lg:px-20 justify-center">
                    <h2 className="text-white flex flex-col text-center text-3xl lg:text-4xl">
                        Mira como quieras
                    </h2>

                    <p className="text-white ">
                        Disfrute de la experiencia de la pantalla grande en su televisor o mire en su tableta, computadora portátil, teléfono y más. Puedes ver una selección cada vez mayor de títulos en 4K. Además, puedes transmitir en mas de una pantalla a la vez.
                    </p>
                </div>

                <img 
                className="p-10"
                src={dispositivos} 
                alt="dispositivos" 
                />




            </section>

        </>
    )
}

export default Contenido