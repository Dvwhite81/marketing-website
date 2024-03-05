import { useEffect, useState } from 'react';
import { Product } from '../data';
import Feature from './Feature';
import '../styles/ProductCard.css';

interface ProductCardProps {
  index: number;
  activeIndex: number;
  product: Product;
}

const ProductCard = ({ index, activeIndex, product }: ProductCardProps) => {
  const [imageClass, setImageClass] = useState('thumbnail');
  const [cardClass, setCardClass] = useState('');

  const { name, price, features, image } = product;

  useEffect(() => {
    if (index === activeIndex) {
      setCardClass('active-item');
    } else {
      setCardClass('not-active-item');
    }
  });

  const toggleImage = () => {
    if (imageClass === 'thumbnail') {
      setImageClass('maximized');
    } else {
      setImageClass('thumbnail');
    }
  };

  return (
    <div className={`card product-card ${cardClass}`}>
      <div className={`card-img-container ${imageClass}`} onClick={toggleImage}>
        <img className="card-img" src={image} alt={name} />
      </div>
      <h2>{name}</h2>
      <div className="features-container">
        {features.map((feature) => <Feature item={feature} />)}
      </div>
      <h4>${price}</h4>
    </div>
  );
};

export default ProductCard;
