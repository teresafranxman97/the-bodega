import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
				toast.success(`Added ${action.payload.title} to cart!`, {
					position: "bottom-center",
				});
			}
		},
		clearCart: (state) => {
			state.cartItems = [];
		},
		removeItem: (state, action) => {
			const itemId = action.payload;
			state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
			toast.warning("removed item from cart", {
				position: "bottom-center",
			});
		},
		addSubtotal: (state, action) => {
			let subtotalCost = 0;
			let amountOfItem = 0;
			state.subtotal = state.amount * action.payload.price;
		},
		addTotal: (state, action) => {
			state.total = state.amount * action.payload.price + 7.99;
		},
		increaseAmount: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item.id === payload.id);
			cartItem.amount = cartItem.amount + 1;
			toast.info("Increased product quantity", {
				position: "bottom-center",
			});
		},
		decreaseAmount: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item.id === payload.id);
			cartItem.amount = cartItem.amount - 1;
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
