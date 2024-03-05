import { useState } from 'react';
import Feature from './Feature';

interface FeatureCarouselProps {
  items: string[];
}

const FeatureCarousel = ({ items }: FeatureCarouselProps) => {
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
    <div className="carousel feature-carousel">
      <ul className="carousel-content">
        {items.map((item, index) => (
          <li key={index}>
            <Feature index={index} activeIndex={activeIndex} item={item} />
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
}

export default FeatureCarousel;
