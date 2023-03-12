//BROWSERROUTER PROVEERA DE RUTAS Y VINCULACION ENTRE PAGINAS
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import IconoCarrito from './components/IconoCarrito';
import './app.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<IconoCarrito />} />
      </Routes>
    </BrowserRouter>
    </>
    );
}

export default App;
