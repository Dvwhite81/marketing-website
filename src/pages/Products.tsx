import { useParams } from 'react-router-dom';
import { CATEGORIES } from '../data';
import Carousel from '../components/Carousel';

const Products = () => {
  const { categoryName } = useParams();
  const category = CATEGORIES.find((category) => category.name === categoryName);

  if (!category) return;

  const products = category.products;
  return (
    <div id="Products" className="page">
      <h1>{categoryName}</h1>
      <Carousel items={products} />
    </div>
  );
};

export default Products;
