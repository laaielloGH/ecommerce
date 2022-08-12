
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Contacto from "./pages/Contacto"
import Productos from "./pages/Productos"
import Nosotros from "./pages/Nosotros"
import Detalle from "./pages/Detalle"
import Checkout from "./pages/Checkout"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartProvider from './components/Context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/productos/:id" element={<Detalle/>}/>
            <Route path="/cart" element={<Checkout/>}/>
            <Route path="*" element={<h1>ERROR 404 - PAGINA NO ENCONTRADA</h1>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
