import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import {Card,  CardHeader, CardBody, CardFooter, Typography, Button, useTabs} from "@material-tailwind/react";
import useUI from '../composables/useUI';
import Carrusel from '../components/carrusel/carrusel';


const HomeUser = () => {
    // const fetchData = async () => {
    //     // const datos = {
    //     //     "title" : title,
    //     //     "description": description,
    //     //     "genre" : genre
    //     // }

    //     try {
    //         const response = await getContent('http://127.0.0.1:8000/content?page=1')
    //         const data = await response.json()
    //         setApiData(data.results)
    //         console.log("datos obtenidos: ", data.results)
    //     } catch (error){
    //         console.error("error al obtener la data: ", error)
    //     }
    // }
    //0. agrega columna imagen
    //1. CREAS TUS VARIABLES DE ESTADO 
    //2. HACES UN GET EN EL USEFFECT QUE EN EL CICLO DE VIDA DE REACT, SIRVE QUE CADA VEZ QUE CARGUE LA PAGINA O VISTA O COMOPONENTE COMO QUIERAS LLAMARLO SE VA EJECUTAR
    //3. INSERTAS TUS DATOS EN TU VARIALBE QU DEBE SER UN OBJETO  const [INFO, setINFO] = useState([])
    //4.haces un map o un for que la informacion que guardes estará en INFO

    const [apiData, setApiData] = useState([])
    // const navigate = useNavigate()
    const {getContent} = useUI()

    

    useEffect(() => {
        console.log('La página ha sido cargada');
        
        const fetchData = async () => {
    
            try {
                const data= await getContent('http://127.0.0.1:8000/content')
                // const data = await response.json()
                setApiData(data.results)
                // info = data.results;
                console.log("datos obtenidos: ", data)
            } catch (error){
                console.error("error al obtener la data: ", error)
            }
        }
        
        fetchData();
        
        // Ejemplo de carga de datos desde una API (simulada con setTimeout)
        // const fasd = async () => {
        //     try {
        //         const response = await getUsersbyID('https://ejemplo.com/api/data');
        //         const data = await response.json();
        //          setINFO(data.results)
        //         info=data.results
        //         console.log('Datos obtenidos:', data);
        //         //data.results
        //     } catch (error) {
        //         console.error('Error al obtener los datos:', error);
        //     }
        // };
    
    },[]);


    const cards = [
        {
            id: 1,
            title: 'UI/UX Review Check',
            description:
                'The place is close to Barceloneta Beach and bus stop just 2 min by walk...',
            imageUrl:
                'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 2,
            title: 'UI/UX Review Chedasdsadasdasdasdsaack',
            description:
                'The place is close to Barceloneta Beach and bus stop just 2 min by walk...',
            imageUrl:
                'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        },
        // ... más objetos de tarjetas
    ];


    return (
        <>

            <Carrusel />

            <h2 className="text-white font-semibold flex flex-col text-3xl lg:text-4xl my-10 px-4">
                Ultimas novedades
            </h2>

            <section className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4'>
                {apiData.map((item) => (
                    <Card key={item.id} className=" w-48 sm:w-48 h-80 my-6 mx-5 rounded-none">

                        <CardHeader color="blue-gray" className="relative h-56 rounded-none">
                            <img src={item.picture} alt="card-image"/>
                        </CardHeader>

                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mt-2 mx-2">
                                {item.title}
                            </Typography>
                            {/* <Typography>{item.description}</Typography> */}
                        </CardBody>

                        <CardFooter className="pt-0 mx-2 my-2 gap-4 flex">
                            <img className='' src="src\icons\reproduction.svg" alt="" />
                            <img src="src\icons\añadir.svg" alt="" />
                            {/* <Button className='bg-black'>Read More</Button> */}
                        </CardFooter>

                  </Card>
                ))}
            </section>           
             
        </>
    );
}

export default HomeUser