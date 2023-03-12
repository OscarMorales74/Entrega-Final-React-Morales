import React, {useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from 'react-router-dom';

const productos = [
  {
    id: 1,
    title: 'Producto 1',
    imagen: '../../imgProd/prode-fuenteincienso.jpg',
    descripcion: 'descripción del producto',
    descrdetallada: 'descripcion detallada del producto. Aca damos las caracteristicas del producto, tamaño, colores disponibles descripcion del personaje',
    precio: '$4900',
    category: 'hogar',
    alt: 'producto 1'
  },
  {
    id: 2,
    title: 'Producto 2',
    imagen: '../../imgProd/img-tra-cas-dos.jpg',
    descripcion: 'descripción del producto',
    descrdetallada: 'descripcion detallada del producto. Aca damos las caracteristicas del producto, tamaño, colores disponibles descripcion del personaje',
    precio: '$5900',
    category: 'figuras',
    alt: 'producto 2'
  },
  {
    id: 3,
    title: 'Producto 3',
    imagen: '../../imgProd/img3.jpg',
    descripcion: 'descripción del producto',
    descrdetallada: 'descripcion detallada del producto. Aca damos las caracteristicas del producto, tamaño, colores disponibles descripcion del personaje',
    precio: '$6900',
    category: 'figuras',
    alt: 'producto 3'
  },
  {
    id: 4,
    title: 'Producto 6',
    imagen: '../../imgProd/prode-lampara2.jpg',
    descripcion: 'descripción del producto',
    descrdetallada: 'descripcion detallada del producto. Aca damos las caracteristicas del producto, tamaño, colores disponibles descripcion del personaje',
    precio: '$7900',
    category: 'hogar',
    alt: 'producto 4'
  },
];

//DATA = LISTA
//SETDATA = SETLISTA 
export const ItemDetailContainer = () => {
    const [lista, setLista] = useState({});
      //USAMOS DESTRUCTURING PARA HACER EL FILTRO DE CATEGORIAS
  //CAPTURAR CATEGORIAID PASADO EN APP
  const { detalleId } = useParams();

    useEffect(() => {
        //LISTAPROD = GETDATA
        const listaProd = new Promise(resolve => {
            setTimeout(() => {
                //PRODUCTOS= FILMS
                resolve(productos);
            }, 1000);
        });

        listaProd.then(res => setLista(res.find(producto => producto.id === parseInt(detalleId))));
    }, [detalleId])


    return (
        //LISTA = DATA
        <div>
            <ItemDetail lista={lista} />
        </div>
    );
}

export default ItemDetailContainer;