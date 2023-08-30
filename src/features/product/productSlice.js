import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	productItemAmount: 0,
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		increaseProductItemAmount: (state) => {
			state.productItemAmount += 1;
		},
		decreaseProductItemAmount: (state) => {
			state.productItemAmount -= 1;
		},
	},
});

export const { increaseProductItemAmount, decreaseProductItemAmount } =
	productSlice.actions;
export default productSlice.reducer;
