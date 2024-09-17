import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-green-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Bicor24</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/products" className="hover:text-green-200">Produits</Link></li>
            <li>
              <Link to="/cart" className="flex items-center hover:text-green-200">
                Panier
                {cartItemsCount > 0 && (
                  <span className="ml-1 bg-white text-green-600 rounded-full px-2 py-1 text-xs font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </li>
            <li><Link to="/login" className="hover:text-green-200">Connexion</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;