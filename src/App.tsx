import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { CartItem, INITIAL_CART_ITEMS, Product } from './data';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Nav from './components/Nav';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import './App.css';
import AddToCartModal from './components/AddToCartModal';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);
  const [currentItem, setCurrentItem] = useState<Product | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const updateCart = (item: Product, quantity: number) => {
    const copy = cartItems;

    const itemToUpdate = copy.find((product) => product.item.name === item.name);
    if (!itemToUpdate) return;

    itemToUpdate.quantity = quantity;

    setCartItems(copy);
  }

  const openCartModal = (item: Product) => {
    setCurrentItem(item);
    setModalVisible(true);
  }

  return (
    <div id="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart items={cartItems} updateCart={updateCart} />} />
        <Route path="/products/:id" element={<SingleProduct openCartModal={openCartModal} />} />
        <Route path="/categories/:categoryName" element={<Products />} />
      </Routes>
      <AddToCartModal currentItem={currentItem} modalVisible={modalVisible} setModalVisible={setModalVisible} updateCart={updateCart} />
    </div>
  );
}

export default App;
