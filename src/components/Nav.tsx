import { useState } from 'react';
import { Link } from 'react-router-dom';
import WhiteMenuIcon from '../assets/images/white-menu-icon.png';
import WhiteBanner from '../assets/images/white-banner.png';
import WhiteShoppingIcon from '../assets/images/white-shopping-icon.png';
import '../styles/Nav.css';

interface NavProps {}

const Nav = ({}: NavProps) => {
  const [dropdownPosition, setDropdownPosition] = useState('-20vw');

  const toggleDropdownPosition = () => {
    if (dropdownPosition === '0') {
      setDropdownPosition('-20vw');
    } else {
      setDropdownPosition('0');
    }
  }

  return (
    <nav id="nav">
      <div className="nav-div dropdown" onClick={toggleDropdownPosition}>
        <img src={WhiteMenuIcon} alt="menu icon" />
        <div className="dropdown-content" style={{ left: dropdownPosition }}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products/Headphones">Headphones</Link>
            </li>
            <li>
              <Link to="/products/Earbuds">Earbuds</Link>
            </li>
            <li>
              <Link to="/products/Speakers">Speakers</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-div">
        <Link to="/">
          <img src={WhiteBanner} alt="navigation banner" />
        </Link>
      </div>
      <div className="nav-div">
        <Link to="/cart">
          <img src={WhiteShoppingIcon} alt="shopping bag icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
