
import { useEffect, useState } from "react"
import {Card,  CardHeader, CardBody, CardFooter, Typography, Button, useTabs} from "@material-tailwind/react";
import React from "react"
import { Link } from "react-router-dom";
import useUI from "../composables/useUI"




const Busqueda = () => {

    const [contenido, setContenido] = useState([])
    const {getContent} = useUI()

    
    
    
    // funcion para traer la info
    useEffect(() => {
        console.log("Busqueda a sido cargada")
        
        const fetchData = async () => {
            
            try {
                const data = await getContent('http://127.0.0.1:8000/content')
                setContenido(data.results)
                
                console.log("titulos obtenidos: ", data)
            } catch (error) {
                console.error("error al obtener titulos", error)
            }
        }
        
        fetchData();
    }, [])
    
    // funcion para buscar titulo
    const [inputValue, setInputValue] = useState("")



    const handleChange = (event) => {
        const input = event.target 
        const value = input.value

        console.log(value)
        setInputValue(value)

        const titleFiltered = contenido.filter(titulo => {

            const filterByName = titulo.title.includes(value)
            return filterByName
        })


        setContenido(titleFiltered)
        
    }







    return (
        <>
        <section className="bg-black">

            <input type="text" className="inputBusqueda" onChange={handleChange} placeholder="Ingresa un titulo"/>
        </section>


        <section className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4'>
                {contenido.map((item) => (
                    <Card key={item.id} className=" w-48 sm:w-48 h-72 my-6 mx-5 rounded-none bg-[#373636] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200">

                        <CardHeader color="blue-gray" className="relative h-56 rounded-none mx-0">
                            <img src={item.picture} alt="card-image"/>
                        </CardHeader>

                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mt-2 mx-2 text-white">
                                {item.title}
                            </Typography>
                            {/* <Typography>{item.description}</Typography> */}
                        </CardBody>

                        <CardFooter className="pt-0 mx-2 my-2 gap-4 flex">
                            <Link><img className='' src="src\icons\reproduction.svg" alt="" /></Link>
                            <Link><img src="src\icons\añadir.svg" alt="" /></Link>
                            {/* <Button className='bg-black'>Read More</Button> */}
                        </CardFooter>

                    </Card>

                ))}
            </section> 
        
        </>
    )
}

export default Busqueda