import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../data';

interface SingleProductProps {

}

const SingleProduct = ({ }: SingleProductProps) => {
  const { productName } = useParams();

  const product = PRODUCTS.find((p) => p.name === productName);

  return (
    <div className="product page">
      <h1>Product Page</h1>
      <h2>{product?.name}</h2>
    </div>
  );
}

export default SingleProduct;
