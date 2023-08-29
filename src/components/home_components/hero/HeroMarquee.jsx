import React from 'react'

import IconHtmlCss from './marquee_icons/IconHtmlCss'
import IconJavascript from './marquee_icons/IconJavascript'
import IconDataBase from './marquee_icons/IconDataBase'
import IconPowerBi from './marquee_icons/IconPowerBi'
import IconExcel from './marquee_icons/IconExcel'
import IconPhp from './marquee_icons/IconPhp'

// Componente con  un marquee con las tecnologias que se enseña
// en los cursos de la pagina, formato png se importa de assets
const HeroMarquee = () => {
  return (
    <>
        <marquee
                className="flex flex-wrap"
                behavior="scroll"
                direction="left">

            <span className='px-8 py-2 flex inline-flex gap-2 text-[#EEEEEE] font-bold'>
                <IconHtmlCss />
                HTML y CSS
            </span>

            <span className='px-8 py-2 flex inline-flex gap-2 text-[#EEEEEE] font-bold'>
                <IconJavascript />
                Javascript
            </span>

            <span className='px-8 py-2 flex inline-flex gap-2 text-[#EEEEEE] font-bold'>
                <IconDataBase />
                Base de Datos
             </span>

            <span className='px-8 py-2 flex inline-flex gap-2 text-[#EEEEEE] font-bold'>
                <IconPowerBi />
                Power Bi
            </span>

            <span className='px-8 py-2 flex inline-flex gap-2 text-[#EEEEEE] font-bold'>
                <IconExcel />
                Excel
            </span>

            <span className='px-8 py-2 flex inline-flex gap-2 text-[#EEEEEE] font-bold'>
                <IconPhp />
                PHP
            </span>
            
        </marquee>
    </>
  )
}

export default HeroMarquee