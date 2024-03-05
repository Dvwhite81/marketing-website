import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../data';
import '../styles/SingleProduct.css';

const SingleProduct = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) return;

  const { name, price, features, image } = product;

  return (
    <div className="page">
      <div className="card">
        <div className="card-img-container">
          <img className="card-img" src={image} alt={name} />
        </div>
        <h2>{name}</h2>
        <div className="features-container">
          <ul>
            {features.map((item, index) =>
              <li key={index}>
                <p>{item}</p>
              </li>
            )}
          </ul>
        </div>
        <h4>${price}</h4>
      </div>
    </div>
  );
}

export default SingleProduct;
