import React, { useEffect , useState } from "react";
//GETFIRESTORE CONECTA CON FIRESTORE
//DOC ES UN PUNTERO A UN DOCUMENTO O PRODUCTO
//GETDOC ES PARA TREAR EL PRODUCTO
import { getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from "../ItemDetail";
import { useParams } from 'react-router-dom';


//DATA = LISTA
//SETDATA = SETLISTA 
export const ItemDetailContainer = () => {
    const [lista, setLista] = useState({});
    //USAMOS DESTRUCTURING PARA HACER EL FILTRO DE CATEGORIAS
    //CAPTURAR CATEGORIAID PASADO EN APP
    const { detalleId } = useParams();

    useEffect(() => {
      const querybd = getFirestore();
      const queryDoc = doc(querybd, 'items', detalleId);
      getDoc(queryDoc).then((snapshot) => {
        const obj = {
          id: snapshot.id,
          ...snapshot.data()
        }
        setLista(obj)      
      });        
    }, [detalleId]);


    return (
        //LISTA = DATA
        <div>
            <ItemDetail lista={lista}/>
        </div>
    );
}

export default ItemDetailContainer;