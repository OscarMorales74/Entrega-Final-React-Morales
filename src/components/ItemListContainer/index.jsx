import React, { useEffect, useState } from "react";
import Title from '../Title';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../ItemList';
//HOOK PARA FILTRAR CATEGORIAS, USEPARAM USA LOS PARAMETROS DE LA URL
import { useParams } from 'react-router-dom';
import '../../app.css';

// COMO CONTAINER, MANEJA TODA LA LOGICA
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
    const querybd = getFirestore();
      const queryCollection = collection(querybd, 'items' );
    
      if (categoriaId) {
        const queryFilter = query(queryCollection, where('category', '==', categoriaId))
        getDocs(queryFilter).then((snapshotList) => {
          const docs = snapshotList.docs.map((snapshot) => ({
            id: snapshot.id,
            ...snapshot.data(),
          }));
          setList(docs);
        });
      } else {
        getDocs(queryCollection).then((snapshotList) => {
          const docs = snapshotList.docs.map((snapshot) => ({
            id: snapshot.id,
            ...snapshot.data(),
          }));
          setList(docs);
        });

    }
    
  }, [categoriaId]);
  
 
  
  return (
    //initial es valor inicial en el contador
    <div className="contenedor">
      <h1 className="tituloCategoria">{categoriaId}</h1>
      <div className='contenedorProd'>
        <Title greeting={texto}/>
        <ItemList lista={list} />
      </div>
    </div>
  );
}

export default ItemListContainer;



