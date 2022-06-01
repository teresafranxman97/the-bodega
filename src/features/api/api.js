import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
	endpoints: (build) => ({
		getAllProducts: build.query({
			query: () => "/products",
		}),
		getProductById: build.query({
			query: (id) => ({ url: `/products/${id}` }),
		}),
	}),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = api;
