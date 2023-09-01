const CarritoCompras = ({ carrito, vaciarCarrito }) => {
    return (
      <div className="carrito">
        <h2>Carrito de Compras</h2>
        <ul>
          {carrito.map((curso) => (
            <li key={curso.id}>{curso.curso}</li>
          ))}
        </ul>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      </div>
    );
  };
  
  export default CarritoCompras;
