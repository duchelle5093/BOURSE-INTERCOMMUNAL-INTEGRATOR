import React from 'react';
import ProductCard from '../components/ProductCard.jsx';

const ProductList = () => {
  // This is still a placeholder. We'll populate this with actual product data later.
  const products = [
    { id: 1, name: 'Produit 1', price: 10.99, image: 'placeholder.jpg' },
    { id: 2, name: 'Produit 2', price: 15.99, image: 'placeholder.jpg' },
    // Add more product placeholders
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Nos Produits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;