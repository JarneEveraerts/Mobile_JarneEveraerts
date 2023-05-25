import { createSlice } from "@reduxjs/toolkit";
import Product from "../../../models/Product";
const initialState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = {
        id: action.payload.product.id,
        name: action.payload.product.name,
        price: action.payload.product.price,
        image: action.payload.product.image,
        description: action.payload.product.description,
        quantity: 1,
      };
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
        return;
      }

      state.cartItems.push(product);
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload.id;
      const itemToRemove = state.cartItems.find(
        (item) => item.id === itemIdToRemove
      );

      if (itemToRemove) {
        if (itemToRemove.quantity > 1) {
          itemToRemove.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== itemIdToRemove
          );
        }
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
