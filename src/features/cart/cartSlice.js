import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
	cartItems: localStorage.getItem("cartItems")
		? JSON.parse(localStorage.getItem("cartItems"))
		: [],
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
				const newProduct = { ...action.payload, amount: 1 };
				state.cartItems.push(newProduct);
				toast.success(`Added ${action.payload.title} to cart!`, {
					position: "bottom-center",
				});
			}
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
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
		addSubtotal: (state) => {
			let subtotal = 0;
			let amount = 0;
			state.cartItems.forEach((item) => {
				amount += item.amount;
				subtotal += item.amount * item.price;
			});
			state.amount = amount;
			state.subtotal = Math.round(subtotal * 100) / 100;
		},
		calculateTotalCost: (state) => {
			let total = 0;
			state.cartItems.forEach((item) => {
				total += item.amount * item.price;
			});
			total = total + 7.99;
			state.total = Math.round(total * 100) / 100;
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
	calculateTotalCost,
	increaseAmount,
	decreaseAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
