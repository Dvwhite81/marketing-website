import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data';
import '../styles/Home.css';

const Home = () => {
  return (
    <div id="Home" className="page">
      <div className="category-select">
        {CATEGORIES.map((category) => (
          <Link to={`/products/${category.name}`}>
            <div className="category">
              <img
                className="category-img"
                src={category.products[1].image}
                alt="category example"
              />
              <h4>{category.name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
