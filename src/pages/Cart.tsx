import { useEffect, useState } from 'react';
import { CartItem, Product } from '../data';

interface CartProps {
  items: CartItem[];
  updateCart: (item: Product, quantity: number) => void;
}

const Cart = ({ items, updateCart }: CartProps) => {
  const [itemsToShow, setItemsToShow] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedItems = [];
    for (const item of items) {
      if (item.quantity > 0) {
        savedItems.push(item);
      }
    }
    setItemsToShow(savedItems);
  }, [items]);

  return (
    <div id="Cart" className="page">
      <h1>Cart</h1>
      {itemsToShow.length === 0 && (
        <p>No Items in Cart</p>
      )}
      {itemsToShow.map((item, index) =>
        <p key={index}>item: {item.item.name} quantity: {item.quantity}</p>
      )}
    </div>
  );
}

export default Cart;
