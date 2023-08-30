import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import productReducer from "./features/product/productSlice";
import { api } from "./features/api/api";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		product: productReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(api.middleware)
	}
});

