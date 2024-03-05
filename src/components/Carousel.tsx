import { useState } from 'react';
import { Product } from '../data';
import ProductCard from './ProductCard';
import '../styles/Carousel.css';

interface CarouselProps {
  items: Product[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalItems = items.length;
  const lastIndex = totalItems - 1;

  const handlePrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(lastIndex);
    } else {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex === lastIndex) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="carousel">
      <ul className="carousel-content">
        {items.map((item, index) => (
          <li key={index}>
            <ProductCard
              index={index}
              activeIndex={activeIndex}
              product={item}
            />
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="btn carousel-btn prev-btn"
        onClick={handlePrev}
      />
      <button
        type="button"
        className="btn carousel-btn next-btn"
        onClick={handleNext}
      />
    </div>
  );
};

export default Carousel;
