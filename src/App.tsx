import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import './App.css';

function App() {

  return (
    <div id="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:categoryName" element={<Products />} />
        <Route path="/products/:productName" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
