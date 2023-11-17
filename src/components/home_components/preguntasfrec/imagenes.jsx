import React from "react";
import lokiseason2 from "./imgs/lokiseason2.jpg"
import snkfinal from "./imgs/snkfinal.jpg"
import themarvels from "./imgs/themarvels.jpg"
import wizardingw from "./imgs/wizardingw.jpg"

const Imagenes = () => {

    return (
        <>
            <section className="flex w-96 h-80">
                <img 
                className="w-0 grow object-cover opacity-70 hover:w-72 hover:opacity-100 hover:contrast-125 transition easy-in duration-500" 
                src={lokiseason2} 
                alt="img1" />

                <img 
                className="w-0 grow object-cover opacity-70 hover:w-72 hover:opacity-100 hover:contrast-125 transition easy-in duration-500" 
                src={snkfinal} 
                alt="img2" />

                <img 
                className="w-0 grow object-cover opacity-70 hover:w-72 hover:opacity-100 hover:contrast-125 transition easy-in duration-500" 
                src={themarvels} 
                alt="img3" />

                <img 
                className="w-0 grow object-cover opacity-70 hover:w-72 hover:opacity-100 hover:contrast-125 transition easy-in duration-500" 
                src={wizardingw} 
                alt="img4" />   
            </section>
        </>
    )

}

export default Imagenes