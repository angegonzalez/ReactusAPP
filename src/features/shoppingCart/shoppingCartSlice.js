import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    data: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.data.find(
        (productCart) => productCart.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.data.push({ ...product, quantity: 1 });
      }
    },
    clearCart: (state, _) => {
      state.data = [];
    },
  },
});

export const { addItemToCart, clearCart } = shoppingCartSlice.actions;
export const selectAllProductsInCart = (state) => state.shoppingCart.data;

export const shoppingCartReducer = shoppingCartSlice.reducer;
