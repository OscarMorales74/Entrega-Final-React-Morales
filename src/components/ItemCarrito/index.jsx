import React from "react";
import '../../app.css';
import { useCartContext } from "../../context/CartContext";

const ItemCarrito = ({ producto }) => {
    const { removerProducto } = useCartContext();

    return (
        <div className="itemCarrito">
            <img src={producto.imagen} alt={producto.title} />
            <div className="textosItemCarrito" >
                <p>Titulo: {producto.title}</p>
                <p>Cantidad: {producto.quantity}</p>
                <p>Precio Un.: {producto.precio}</p>
                <p>Subtotal: $ {producto.quantity * producto.precio}</p>
                <button onClick={() => removerProducto(producto.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCarrito