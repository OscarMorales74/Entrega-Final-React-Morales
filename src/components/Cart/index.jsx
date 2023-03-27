import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCarrito from "../ItemCarrito";


const Cart = () => {
    const { cart, totalPrecio, limpiarCarrito } = useCartContext();

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
            <div>
                <Link className="seguirComprandoenCarrito" to='/'>Seguir comprando</Link>
                <Link className="comprar" to='/contactForm'>Confirmar Compra</Link>
                <button className="limpiarCarrito" onClick={limpiarCarrito}>Limpiar carrito</button>
            </div>
        </div>
    )
}

export default Cart