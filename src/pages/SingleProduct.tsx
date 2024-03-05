import { useParams } from 'react-router-dom';
import { PRODUCTS, Product } from '../data';
import AddCartIcon from '../assets/images/add-cart-icon.png';
import '../styles/SingleProduct.css';

interface SingleProductProps {
  openCartModal: (item: Product) => void;
}

const SingleProduct = ({ openCartModal }: SingleProductProps) => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) return;

  const { name, price, features, image } = product;

  return (
    <div className="single-product-page page">
      <div className="card">
        <div className="card-img-container">
          <img className="card-img" src={image} alt={name} />
        </div>
        <h2>{name}</h2>
        <div className="features-container">
          <ul className="single-product-features">
            {features.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="add-to-cart">
          <h4>${price}</h4>
          <img
            className="add-cart-icon"
            src={AddCartIcon}
            alt="add to cart"
            onClick={() => openCartModal(product)}
          />
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
