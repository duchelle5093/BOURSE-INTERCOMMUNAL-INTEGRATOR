import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productSlice.jsx';
import cartReducer from './slices/cartSlice.jsx';
import authReducer from './slices/authSlice.jsx';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});