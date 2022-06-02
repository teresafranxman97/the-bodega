import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
	amount: 1,
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
		removeItem: (state, action) => {
			const itemId = action.payload;
			state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
		},
		addSubtotal: (state, action) => {
			state.subtotal = state.amount * action.payload.price;
		},
		addTotal: (state, action) => {
			state.total = state.amount * action.payload.price + 7.99;
		},
		increaseAmount: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item.id === payload.id)
			cartItem.amount = cartItem.amount + 1;
		},
		decreaseAmount: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item.id === payload.id)
			cartItem.amount = cartItem.amount - 1
		},
	},
});

export const {
	addToCart,
	clearCart,
	removeItem,
	addSubtotal,
	addTotal,
	increaseAmount,
	decreaseAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
