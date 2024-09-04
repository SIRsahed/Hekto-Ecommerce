import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cartManagement',
    initialState: {
        cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    },
    reducers: {
        addToCart: (state, action) => {
            let findProduct = state.cartItem.findIndex((item) => item.id === action.payload.id);
            if (findProduct !== -1) {
                // If the product is found, increment the Qty
                state.cartItem[findProduct].Qty += 1;
            } else {
                // If the product is not found, add it to the cart
                state.cartItem.push({ ...action.payload, Qty: 1 });
            }
            // Always update localStorage after any change
            localStorage.setItem("cart", JSON.stringify(state.cartItem));
        },
        increment: (state, action) => {
            state.cartItem[action.payload].Qty += 1
            localStorage.setItem("cart", JSON.stringify(state.cartItem))
        },
        decrement: (state, action) => {
            
        },
        deletion: (state, action) => {
            state.cartItem.splice(action.payload, 1)
            localStorage.setItem("cart", JSON.stringify(state.cartItem))
        },
        clearCart: (state) => {
            state.cartItem = []
            localStorage.setItem("cart", JSON.stringify(state.cartItem))
        }
    },
});


export const { increment, decrement, deletion, clearCart, addToCart } = CartSlice.actions;
export default CartSlice.reducer;