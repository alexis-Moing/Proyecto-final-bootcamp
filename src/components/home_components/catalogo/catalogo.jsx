import React from "react";
import Imagenes from "../preguntasfrec/imagenes.jsx";

const CatalogoHome = () => {
    return (
        <>

            <section className="bg-black my-20 px-5 py-10 md:flex sm:px-20">
                <div className="flex justify-center">
                    <Imagenes/>
                </div>

                <div className="flex flex-col gap-5 px-2 py-5 sm:px-4 lg:px-20 justify-center">
                    <h2 className="text-white flex flex-col text-center text-3xl lg:text-4xl">Las mayores franquicias</h2>
                    <p className="text-white">
                        Las franquicias mas taquilleras de la historia en un solo lugar
                        y en la mejor calidad posible para que revivas esos mejores
                        momentos que pasaste frente a la pantalla.
                    </p>
                </div>

            </section>
        </>
    )
}

export default CatalogoHome