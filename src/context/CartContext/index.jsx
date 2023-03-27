import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    //AGREGAR PRODUCTO AL CARRITO
    const agregarProducto = (item, quantity) => {
        if (estaEnCarrito(item.id)) {
            setCart(cart.map(producto => {
                return producto.id === item.id ? { ...producto, quantity: producto.quantity + quantity } : producto
            }));
        } else {
            setCart([ ...cart, { ...item, quantity }]);
        }
    }
    
    const totalPrecio = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
    }

    const totalProductos = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    //LIMPIAR CARRITO
    const limpiarCarrito = () => setCart([]);
    
    //DEVUELVE TRUE O FALSE SI HAY UN PRODUCTO REPETIDO
    const estaEnCarrito = (id) => cart.find(producto => producto.id === id) ? true : false;
    
    //REMOVER UN PRODUCTO
    const removerProducto = (id) => setCart(cart.filter(producto => producto.id !== id));


    return (
        <CartContext.Provider value={{
            limpiarCarrito,
            estaEnCarrito,
            removerProducto,
            agregarProducto,
            totalPrecio,
            totalProductos,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;