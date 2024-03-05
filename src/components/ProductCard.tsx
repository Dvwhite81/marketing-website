import { useEffect, useState } from 'react';
import { Product } from '../data';
import FeatureCarousel from './FeatureCarousel';
import '../styles/ProductCard.css';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  index: number;
  activeIndex: number;
  product: Product;
}

const ProductCard = ({ index, activeIndex, product }: ProductCardProps) => {
  const [imageClass, setImageClass] = useState('thumbnail');
  const [cardClass, setCardClass] = useState('');

  const { id, name, price, features, image } = product;

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
      <Link to={`/products/${id}`}>
        <h2>{name}</h2>
      </Link>
      <div className="features-container">
        <h4 className="features-label">Features:</h4>
        <FeatureCarousel items={features} />
      </div>
      <h4>${price}</h4>
    </div>
  );
};

export default ProductCard;
