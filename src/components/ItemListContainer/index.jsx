import React, { useEffect, useState } from "react";
import Title from '../Title';
import ItemList from '../ItemList';
//HOOK PARA FILTRAR CATEGORIAS, USEPARAM USA LOS PARAMETROS DE LA URL
import { useParams } from 'react-router-dom';
import '../../app.css';

//ACA CREAMOS EL LISTADO DE PRODUCTOS
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

//ACA COMO CONTAINER, MANEJA TODA LA LOGICA
const ItemListContainer = ({ texto }) => {
  
  //ACA CREAMOS LA CONSTANTE LIST, QUE GUARDAMOS EN UN ESTADO Y SE LA ENVIAMOS A ITEMLIST
  //DATA = LIST CONSTANTE CREADA ACA QUE SE PASA A ITEMLIST
  //GETDATA = LISTAPROD CONSTANTE INTERNA CREADA ACA
  //FILMS = PRODUCTOS NOMBRE DEL ARRAY
  
  const [list, setList] = useState([]);
  
  //USAMOS DESTRUCTURING PARA HACER EL FILTRO DE CATEGORIAS
  //CAPTURAR CATEGORIAID PASADO EN APP
  const { categoriaId } = useParams();
  
  
  useEffect(() => {
    const listaProd = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
    if (categoriaId) {
      listaProd.then(res => setList(res.filter(producto => producto.category === categoriaId)));
    } else {
      listaProd.then(res => setList(res));
    }
    
  }, [categoriaId]);
  
 
  
  return (
    //initial es valor inicial en el contador
    <>
        <div className='contenedorProd'>
          <Title greeting={texto}/>
          <ItemList lista={list} />
        </div>
      </>
  );
}

export default ItemListContainer;



