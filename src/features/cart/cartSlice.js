import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
	amount: 0,
	subtotal: 0,
	total: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].amount += 1;
			} else {
				const tempProduct = { ...action.payload, amount: 1 };
				state.cartItems.push(tempProduct);
			}
		},
		clearCart: (state) => {
			state.cartItems = [];
		},
	},
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
