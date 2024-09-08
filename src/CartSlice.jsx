import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalQ: 0,
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        }
        else {
            state.items.push({name, image, cost, quantity: 1});
        }
        state.totalQ++;
    },
    removeItem: (state, action) => {
        const {name, quantity} = action.payload;
        state.totalQ-=quantity;
        state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            state.totalQ = state.totalQ + quantity - existingItem.quantity
            existingItem.quantity = quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
