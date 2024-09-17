import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Produit 1', price: 10.99, image: 'placeholder.jpg', description: 'Description du produit 1' },
    { id: 2, name: 'Produit 2', price: 15.99, image: 'placeholder.jpg', description: 'Description du produit 2' },
    { id: 3, name: 'Produit 3', price: 20.99, image: 'placeholder.jpg', description: 'Description du produit 3' },
  ],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Add reducers if needed, e.g., for adding new products
  },
});

export default productsSlice.reducer;