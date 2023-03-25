import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCarrito from "../ItemCarrito";
import { addDoc, collection, getFirestore } from 'firebase/firestore';


const Cart = () => {
    const { cart, totalPrecio } = useCartContext();

    const order = {
        buyer: {
            name: 'Juan',
            email: 'juanpere@gmail.com',
            phone: '123456789',
            address: 'calle cualquiera 1234'
        },
        items: cart.map(producto => ({ id: producto.id, title: producto.title, precio: producto.precio, quantity: producto.quantity })),
        total: totalPrecio(),
    }

    const handleClick = ({ id }) => {
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)
        .then({ id })
    }

    if (cart.length === 0) {
        return (
            <div className="contenedorCarrito">
                <p className="textoCarritoVacio">No hay productos en tu carrito</p>
                <Link className="buscarenCarritoVacio" to='/'>Buscar Productos</Link>
            </div>
        );
    }
    return (
        <div className="contenedorCarrito">
            <h1 className="tituloenCarrito">Detalle de tu Carrito</h1>
            {
                cart.map(producto => <ItemCarrito key={producto.id} producto={producto} />)
            }
            <p className="precioTotalenCarrito">
                total: $ {totalPrecio()}
            </p>
            <button className="comprar" onClick={handleClick}><Link to='/contactForm'>Confirmar Compra</Link></button>
            <button className="seguirComprandoenCarrito"><Link to='/'>Seguir comprando</Link></button>
        </div>
    )
}

export default Cart