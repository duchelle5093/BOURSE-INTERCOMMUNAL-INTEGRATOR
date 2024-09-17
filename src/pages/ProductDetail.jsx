import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice.jsx';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => 
    state.products.items.find(item => item.id === parseInt(id))
  );

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-xl text-gray-600 mb-4">{product.price.toFixed(2)} €</p>
          <p className="mb-4">{product.description}</p>
          <button 
            onClick={handleAddToCart}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;