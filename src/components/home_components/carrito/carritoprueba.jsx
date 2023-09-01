import React, { useState, useEffect } from 'react';

const Carrito = () => {
  const [cursosEnCarrito, setCursosEnCarrito] = useState([]);
  const [carritoVisible, setCarritoVisible] = useState(false);

  useEffect(() => {
    const storedCursos = localStorage.getItem('cursosEnCarrito');
    if (storedCursos) {
      setCursosEnCarrito(JSON.parse(storedCursos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cursosEnCarrito', JSON.stringify(cursosEnCarrito));
  }, [cursosEnCarrito]);

  const agregarAlCarrito = (curso) => {
    setCursosEnCarrito([...cursosEnCarrito, curso]);
  };

  const eliminarDelCarrito = (cursoId) => {
    const nuevosCursosEnCarrito = cursosEnCarrito.filter(
      (curso) => curso.id !== cursoId
    );
    setCursosEnCarrito(nuevosCursosEnCarrito);
  };

  const vaciarCarrito = () => {
    setCursosEnCarrito([]);
  };

  return (
    <div className="carrito-container">
      <button
        className="carrito-toggle-button"
        onClick={() => setCarritoVisible(!carritoVisible)}
      >
        Mostrar Carrito ({cursosEnCarrito.length} cursos)
      </button>
      {carritoVisible && (
        <div className="carrito-float">
          <h2>Carrito de Compras</h2>
          {cursosEnCarrito.map((curso) => (
            <div key={curso.id} className="carrito-item">
              <p>{curso.nombre} - ${curso.precio}</p>
              <button onClick={() => eliminarDelCarrito(curso.id)}>
                Eliminar
              </button>
            </div>
          ))}
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default Carrito;
