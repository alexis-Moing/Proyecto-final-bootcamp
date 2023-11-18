import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoginButtons from './loginbuttons'
import LogoutHeader from './logoutbuttons'
import { useSelector } from 'react-redux'
import { UserContext } from '../context/UserContext'

// Layout del de la barra de navegacion con links a login, registro, e inicio
// el link a nosotros esta temporalmente en desuso, hasta ser implementado
const Header = ({ countCourses, allcourses, total}) => {
    console.log(countCourses, allcourses, total, "countCourses")
    const [active, setActive] = useState(false);
    // const [isAuth, setIsAuth] = useState( localStorage.getItem('auth') || "false")
    // const auth = useSelector((state) => state.auth)
    const {user} = useContext(UserContext)

    // useEffect(() => {
    //     console.log("holaaaaaaaaaaaaaaaaaaaaaaa")
    //     const auth = localStorage.getItem('auth') || "false";
    //     console.log(auth, "auth")
    //     if (auth == "false") {
    //         localStorage.setItem('auth', JSON.stringify(false))

    //         setIsAuth("false")
    //     } else {
    //         setIsAuth(localStorage.getItem('auth'))
    //     }

    // }, [])

    // useEffect(() => {

    //     setIsAuth(localStorage.getItem('auth'));
    // }, [auth])

    return (
        <>
            <header className='w-full px-5 py-4 flex justify-between  text-[#EEEEEE] sticky top-0 bg-black'>

                <div className='flex gap-8 '>
                    <Link className='flex gap-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' to="/">
                        {/* <LogoIcon /> */}
                        <span className='font-bold text-lg my-auto'>CINEPLUS</span>
                    </Link>

                    {/* <a className='my-auto hover:font-bold transition-all' href="">Nosotros</a> */}
                </div>


                <div className='flex gap-3'>


                    {/* <div className='container-icon'>
                        <div className='container-cart-icon flex' onClick={() => setActive(!active)}>
                            <Link to="/carrito"><LogoCarrito /></Link>

                            <div className='absolute bg-black h-6 w-5 text-center rounded-lg justify-center '>
                                <span className='' id='contador-productos'>{countCourses}</span>
                            </div>
                        </div>
                   
                    </div> */}

                    {/* <button className='px-4 py-2  hover:bg-[#8758FF] hover:transition-all  duration-150 hover:font-bold rounded-lg'>
                        <Link to="/register">Registrarse</Link>
                    </button>

                    <button className='px-4 py-2  hover:bg-[#8758FF] hover:transition-all  duration-150 hover:font-bold rounded-lg'>
                        <Link to="/login">Ingresar</Link>
                    </button> */}

                    {user ? <LogoutHeader /> : <LoginButtons />}
                    
                </div>
            </header>

        </>
    );
}

export default Header