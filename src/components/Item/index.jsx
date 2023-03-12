import React from 'react';
import { Link } from 'react-router-dom';
import '../../app.css';

//INFO = INFOPROD ESTA EN ITEMLIST
const Item = ({ infoProd }) => {
    return (
        <Link to={`/detalle/${infoProd.id}`} className="prod">
            <img className='prodImg' src={infoProd.imagen} alt={infoProd.alt} />
            <h3 className='tituloProdList'>{infoProd.title}</h3>
            <h4 className='descripcionProdList'>{infoProd.descripcion}</h4>
            <p className='precioProdList'>{infoProd.precio}</p>
        </Link>
    );
}


export default Item;