import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "../features/products/productsSlice";
import { shoppingCartReducer } from '@/features/shoppingCart/shoppingCartSlice';

export default configureStore({
    reducer : {
        products : productsReducer,
        shoppingCart : shoppingCartReducer
    }
});