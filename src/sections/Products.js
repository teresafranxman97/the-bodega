import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link, Outlet } from "react-router-dom";
import {
	ProductsStyles,
	GridContainer,
	Card,
	Buttons,
	Menu
} from "../styles/sections/ProductsStyles";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [filter, setFilter] = useState(products);
	const [loading, setLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("https://fakestoreapi.com/products");
			const data = await res.json();
			setProducts(data);
			setFilter(data);
			setLoading(false);
		};
		fetchData();
	}, []);

	const Loading = () => {
		return <div>Loading...</div>;
	};

	const filterProduct = (selectedCategory) => {
		const filteredList = products.filter(
			(i) => i.category === selectedCategory
		);
		setFilter(filteredList);
	};

	const ShowProducts = () => {
		return (
			<>
				<Buttons isOpen={isOpen}>
					<button
						className="drop-down-button"
						onClick={() => setIsOpen(!isOpen)}
					>
						Shop by category <Icon icon="ep:arrow-down" width={20} />
					</button>
					<Menu isOpen={isOpen}>
						<button onClick={() => filterProduct("women's clothing")}>
							Women's Clothing
						</button>
						<button onClick={() => filterProduct("men's clothing")}>
							Men's Clothing
						</button>
						<button onClick={() => filterProduct("jewelery")}>Jewelery</button>
						<button onClick={() => filterProduct("electronics")}>
							Electronics
						</button>
						<button onClick={() => setFilter(products)}>Shop all</button>
					</Menu>
				</Buttons>
				<GridContainer>
					{filter.map((product) => (
						<Card key={product.id}>
							<div className="image-container">
								<img src={product.image} alt={product.title} />
							</div>
							<h4>{product.title}</h4>
							<p>${product.price}</p>
							<Link to={`product/${product.id}`}>view</Link>
						</Card>
					))}
				</GridContainer>
			</>
		);
	};

	return (
		<ProductsStyles>
			<div className="title">
				<h1>Latest Products</h1>
			</div>
			{loading ? <Loading /> : <ShowProducts />}
			<Outlet />
		</ProductsStyles>
	);
};

export default Products;
