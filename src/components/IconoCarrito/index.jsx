import React from "react";
import { useCartContext } from "../../context/CartContext";

// icono importado desde bootstrap
const IconoCarrito = () => {
    const {totalProductos} = useCartContext();
    return (
        <div className="conjCarrito">
            <i className="icoCarrito bi bi-cart2 "></i>
            <span className="contadorCarrito">{totalProductos() || ''}</span>
        </div>
    );
}
export default IconoCarrito;