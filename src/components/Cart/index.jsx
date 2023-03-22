import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCarrito from "../ItemCarrito";


const Cart = () => {
    const { cart, totalPrecio } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p>No hay productos en tu carrito</p>
                <Link to='/'>Buscar Productos</Link>
            </>
        );
    }
    return (
        <>
            {
                cart.map(producto => <ItemCarrito key={producto.id} producto={producto} />)
            }
            <p>
                total: $ {totalPrecio()}
            </p>
        </>
    )
}

export default Cart