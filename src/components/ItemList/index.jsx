import React from 'react';
import Item from '../Item';
import '../../app.css';

//LE PASO COMO PARAMETRO EL ELEMENTO LISTADOTOTAL CREADO EN ITEMLISTCONTAINER
//INFO = INFOPROD SE CREA ACA Y ESTA EN ITEM
//DATA = LIST CONSTANTE CREADA EN ITEMLISTCONTAINER
const ItemList = ({ lista }) => {
  return (
    lista.map(producto => 
    <Item key={producto.id} infoProd={producto}/>
    )
    
    );
}

export default ItemList;
