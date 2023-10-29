import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import { CartProvider } from './componentes/context/CartContext';
import Checkout from './componentes/Checkout/Checkout';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path="/Checkout" Component={Checkout}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
{/* <ItemDetailContainer greeting={"Bienvenido a CompuSHOP"} /> */}