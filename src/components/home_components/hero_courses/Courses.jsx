import React from 'react'

import { heroCourses } from "../../../constants/hero_courses.js"
import IconVerCurso from './IconVerCurso.jsx'

// Componente que muestra cards de algunos cursos, los cuales se cargan
// temporalmente del archivo hero_courses.js en la carpeta constants
const Courses = () => {
  return (
    <>
        <section className='w-full bg-[#4E4FEB] px-24 py-14 flex gap-4 justify-evenly flex-wrap'>
            {
                heroCourses.map( (course) =>

                    <div
                        key={course.id}
                        className='w-[450px] bg-[#EEEEEE] rounded-lg'>
                        <img className='w-full rounded-lg' src={course.imagen} alt={course.curso} />

                        <div className='flex flex-col gap-1 py-3 px-5 shadow-lg'>

                            <h1 className='font-bold text-lg'>{course.curso}</h1>
                            <h3 className='text-md'>{course.docente}</h3>

                            <div className='flex justify-between'>
                                <span className='font-bold text-sm'>{course.precio}</span>
                                <span className='font-bold text-sm'>{course.nivel}</span>
                                <span className='font-bold text-sm'>{course.duracion}</span>
                            </div>

                            <button className='w-full my-4 py-2 flex gap-4 justify-center content-center bg-[#000000] hover:bg-[#07001f] rounded-lg text-[#EEEEEE] hover:text-white'>
                                <IconVerCurso />
                                Ver curso
                            </button>

                        </div>
                    </div>
                )
            }
        </section>
    </>
  )
}

export default Courses