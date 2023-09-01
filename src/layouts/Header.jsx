import { useState } from 'react'

import LogoIcon from '../components/home_components/header/IconLogo'
import { Link } from 'react-router-dom'
import LogoCarrito from '../components/home_components/carrito/logocarrito'

// Layout del de la barra de navegacion con links a login, registro, e inicio
// el link a nosotros esta temporalmente en desuso, hasta ser implementado
const Header = (props) => {
    const [active, setActive] = useState(false);

  return (
    <>
        <header className='w-full px-5 py-4 flex justify-between bg-[#4E4FEB] text-[#EEEEEE]'>
            <div className='flex gap-1'>
                <LogoIcon />
                <span className='font-bold text-lg my-auto'>Absolute</span>
            </div>

            <div className='flex gap-5'>
                <a className='my-auto hover:text-white hover:font-bold transition-all' href="">Nosotros</a>
                <Link className='my-auto hover:text-white hover:font-bold transition-all' to="/">Inicio</Link>
            </div>

            <div className='flex gap-3'>


                <div className='container-icon'>
                    <div className='container-cart-icon' onClick={() => setActive(!active)}>
                        <LogoCarrito/>

                        <div className='count-products'>
                            <span id='contador-productos'>{countProducts}</span>
                        </div>
                    </div>

                    <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
                        {allProducts.length ? (
                            <>
                                <div className='row-product'>
                                    {allProducts.map(product => (
                                        <div className='cart-product' key={product.id}>
                                            <div className='info-cart-product'>
                                                <span className='cantidad-producto-carrito'>
                                                    {product.quantity}
                                                </span>
                                                <p className='titulo-producto-carrito'>
                                                    {product.nameProduct}
                                                </p>
                                                <span className='precio-producto-carrito'>
                                                    ${product.price}
                                                </span>
                                            </div>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                strokeWidth='1.5'
                                                stroke='currentColor'
                                                className='icon-close'
                                                onClick={() => onDeleteProduct(product)}
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    d='M6 18L18 6M6 6l12 12'
                                                />
                                            </svg>
                                        </div>
                                    ))}
                                </div>

                                <div className='cart-total'>
                                    <h3>Total:</h3>
                                    <span className='total-pagar'>${total}</span>
                                </div>

                                <button className='btn-clear-all' onClick={onCleanCart}>
                                    Vaciar Carrito
                                </button>
                            </>
                        ) : (
                            <p className='cart-empty'>El carrito está vacío</p>
                        )}
                    </div>
                </div>






                <div>
                    <button className=''><Link to="/carrito"><LogoCarrito/></Link></button>
                </div>
                <button className='px-4 py-2 bg-[#000000] hover:bg-white hover:transition-all hover:text-black duration-150 hover:font-bold rounded-lg'><Link to="/register">Registrarse</Link></button>
                <button className='px-4 py-2 bg-[#000000] hover:bg-white hover:transition-all hover:text-black duration-150 hover:font-bold rounded-lg'><Link to="/login">Ingresar</Link></button>
            </div>
        </header>
        <main>
            {props.children}
        </main>
    </>
  )
}

export default Header