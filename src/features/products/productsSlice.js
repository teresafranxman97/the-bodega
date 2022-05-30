import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	isLoading: false,
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
	const response = await fetch("https://fakestoreapi.com/products")
	const data = await response.json()
    return data
});

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchProducts.pending]: (state, action) => {
			state.isLoading = true;
		},
		[fetchProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.products = action.payload
        },
        [fetchProducts.rejected]: (state, action) => {
            state.isLoading = false;
        }
	},
});

export default productsSlice.reducer;
