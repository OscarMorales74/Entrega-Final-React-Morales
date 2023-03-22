import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount";
import { Link } from 'react-router-dom';
import '../../app.css';

//LO USAMOS PARA MANEJAR EL COMPONENTE DETALLE DE PRODUCTO
//DATA=LISTA
export const ItemDetail = ({ lista }) => {

    const [goToCart, setGoToCart] = useState(false);
    //HAGO DESTRUCTURING DE CARTCONTEXT PORQUE SOLO QUIERO USAR AGREGARACARRITO
    const { agregarProducto } = useCartContext();

     //ACA SE DECLARA ONADD ,QUE SERA LLAMADO EN ITEMCOUNT
  const onAdd = (quantity) => {
    setGoToCart(true);
    agregarProducto(lista, quantity);
  }
  
    return (
        //CONTAINER = CONTAINERPROD
        //DETAIL = DETALLEPROD
        //DETAIL_IMAGE = DETALLEIMG 
        <div className="containerProd">
                <img className="detalleImg" src={lista.imagen} alt={lista.alt} />
                <div className="content">
                    <h1 className="tituloDetalle">{lista.title}</h1>
                    <p className="descrDetalle"> {lista.descrdetallada}</p>
                    {
                        goToCart ?
                        <button className="btnTerminarCompra"><Link to='/cart'>Terminar Compra</Link> </button>:
                        <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    }
                </div>
        </div>
    );
}

export default ItemDetail;