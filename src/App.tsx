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
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/categories/:categoryName" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
