import { useState } from 'react';
import { CartItem, Product } from '../data';

interface ItemInCartProps {
  cartItem: CartItem;
  updateCart: (item: Product, quantity: number) => void;
}

const ItemInCart = ({ cartItem, updateCart }: ItemInCartProps) => {
  const { item, quantity } = cartItem;
  const { name, image } = item;
  const [quantityValue, setQuantityValue] = useState<number>(quantity);

  const nameToShow = name.slice(0, 50) + '...';

  const handleQuantity = (newQuantity: number) => {
    setQuantityValue(newQuantity);
    updateCart(item, newQuantity);
  }

  return (
    <div className="item-in-cart">
      <img src={image} />
      <p>{nameToShow}</p>
      <input type="number" value={quantityValue} onChange={({ target }) => handleQuantity(Number(target.value))} />
    </div>
  )
}

export default ItemInCart;
