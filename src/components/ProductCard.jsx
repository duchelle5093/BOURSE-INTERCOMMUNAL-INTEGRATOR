import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice.jsx';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        </Link>
        <p className="text-gray-600 mb-4">{product.price.toFixed(2)} €</p>
        <button 
          onClick={handleAddToCart}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductCard;