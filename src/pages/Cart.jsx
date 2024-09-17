import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/slices/cartSlice.jsx';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity) }));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Votre Panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.price.toFixed(2)} €</p>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  className="w-16 text-center border rounded"
                />
                <button
                  onClick={() => handleRemove(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 text-xl font-bold">
            Total: {total.toFixed(2)} €
          </div>
          <Link 
            to="/checkout" 
            className="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Passer à la caisse
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;