import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      // Check if the item already exists in the cart based on a unique identifier (e.g., _id)
      const existingItem = state.find((item) => item._id === newItem._id);

      // If the item doesn't exist, add it to the cart
      if (!existingItem) {
        state.push(newItem);
      }
    },

    // remove item from cart
    removeFromCart: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
