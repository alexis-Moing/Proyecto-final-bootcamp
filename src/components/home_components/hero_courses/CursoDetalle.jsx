import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { heroCourses } from "../../../constants/hero_courses.js";

const CursoDetalle = ({ total, agregarcarritofunction }) => {
    console.log(total, agregarcarritofunction, "agregarcarritofunction")
    const { cursoId } = useParams(); // Obtenemos el ID del curso de la URL

    // Buscamos el curso en base a su ID
    const curso = heroCourses.find((course) => course.id === parseInt(cursoId));

    if (!curso) {
        return <div>No se encontró el curso</div>;
    }

    return (
        <div className=" max-w-md mx-auto mt-0  m-5 bg-white overflow-hidden md:max-w-2xl md:my-20">
            <div className='md:flex'>
                <div className='md:shrink-0'>
                    <img className='h-48 w-full object-cover md:h-full md:w-48' src={curso.imagen} alt={curso.curso} />
                </div>
                <div className='p-8'>
                    <div className='uppercase tracking-wide text-sm text-[#4E4FEB] font-semibold'>{curso.docente}</div>
                    <strong className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>{curso.curso}</strong>
                    <div className='flex gap-4 md:gap-6'>
                        <p>Precio: {curso.precio}</p>
                        <p>Nivel: {curso.nivel}</p>
                        <p>Duración: {curso.duracion}</p>
                    </div>
                    <p className='mt-4'>
                        {curso.descripcion}
                    </p>
                    <div className='flex gap-8 mt-4'>
                        <Link to="/">
                            <button className='border rounded-lg p-3 shadow-md bg-[#4E4FEB] text-white font-semibold'>VOLVER A CURSOS</button>
                        </Link>
                        <Link to="/carrito">
                            <button onClick={() => agregarcarritofunction(curso)} className='border rounded-lg p-3 shadow-md bg-black text-white font-semibold'>AÑADIR AL CARRITO</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CursoDetalle;
