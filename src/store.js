import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { fetchProducts } from "./features/products/productsSlice";
import { api } from "./features/api/api";

export const store = configureStore({
	reducer: {
		products: productsReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(api.middleware)
	}
});

store.dispatch(fetchProducts());