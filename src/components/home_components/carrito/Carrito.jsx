import { useState } from "react";
import { Link } from "react-router-dom";

const CarritoCompras = ({ allcourses}) => {


    // console.log(allcourses)
    return (
        <div className="my-10">
            <h2 className="text-2xl font-semibold flex justify-center mt-8">Carrito de Compras</h2>
            <h3 className="text-2xl ml-5">Mis cursos agregados:</h3>
            <div className="mx-10 flex justify-between my-5">
                <Link to="/"><button className="bg-[#4E4FEB] p-2 rounded-lg text-white font-semibold">SEGUIR COMPRANDO</button></Link>
                <button  className="bg-[#4E4FEB] p-2 rounded-lg text-white font-semibold">VACIAR CARRITO</button>
            </div>

            <ul>
                {allcourses.map((curso) => (
                    <>
                    <div className="ml-5 md:flex px-10" key={curso.id}>
                        <div>
                            <div className="flex gap-60">
                                <li>{curso.curso}</li>
                                <li>{curso.precio}</li>
                            </div>
                            <div>
                                <img src={curso.imagen} className="" alt="" />
                            </div>
                            <button className="bg-red-500 mt-5 rounded-lg p-2 text-white">ELIMINAR DEL CARRITO</button>
                        </div>

                    </div>

                    </>

                ))}
            </ul>

            <button className="flex justify-center md:justify-end mx-auto mt-8 font-bold bg-black text-white p-2 rounded-lg ">COMPRAR</button>
            {/*  <button onClick={vaciarCarrito}>Vaciar Carrito</button> */}
        </div>
    );
};

export default CarritoCompras;
