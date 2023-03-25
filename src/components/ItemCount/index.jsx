import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../app.css'

//SE USA USEEFFECT PARA CADA VAZ QUE CAMBIE EL VALOR INITIAL EL CONTADOR SE RESETEE Y NA HAYA QUE ACTUALIZARLO
export const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className='counter'>
            <button className='btnPlusminusCarrito' disabled={count <= 0} onClick={decrease}>-</button>
            <span className='cantAagregar'>{count}</span>
            <button className='btnPlusminusCarrito' disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button className='agregarAlCarrito' disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
            <div>
            <button className="volveraProductos">
            <Link to='/'>Volver a Productos</Link></button>
            </div>
        </div>
    );
}

export default ItemCount;