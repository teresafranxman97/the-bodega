import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import {
	ProductsStyles,
	GridContainer,
	Card,
	Buttons,
	Menu,
} from "../styles/sections/ProductsStyles";
import Loading from "../components/Loading";
import { useGetAllProductsQuery } from "../features/api/api";

const Products = () => {
	const { data: products, isLoading } = useGetAllProductsQuery();
	const [filter, setFilter] = useState(products);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setFilter(products);
	}, [products]);

	const filterProduct = (selectedCategory) => {
		const filteredList = products.filter(
			(i) => i.category === selectedCategory
		);
		setFilter(filteredList);
	};

	return (
		<ProductsStyles>
			<div className="title">
				<h1>LATEST PRODUCTS</h1>
			</div>
			{isLoading ? (
				<Loading isLoading={isLoading} />
			) : (
				<section>
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
							<button onClick={() => filterProduct("jewelery")}>
								Jewelery
							</button>
							<button onClick={() => filterProduct("electronics")}>
								Electronics
							</button>
							<button onClick={() => setFilter(products)}>Shop all</button>
						</Menu>
					</Buttons>
					<GridContainer>
						{filter ? (
							<>
								{filter.map((product) => (
									<Card key={product.id}>
										<Link to={`${product.id}`}>
											<div className="image-container">
												<img src={product.image} alt={product.title} />
											</div>
											<h4>{product.title}</h4>
											<p>${product.price}</p>
										</Link>
									</Card>
								))}
							</>
						) : (
							<>
								{products.map((product) => (
									<Card key={product.id}>
										<Link to={`${product.id}`}>
											<div className="image-container">
												<img src={product.image} alt={product.title} />
											</div>
											<h4>{product.title}</h4>
											<p>${product.price}</p>
										</Link>
									</Card>
								))}
							</>
						)}
					</GridContainer>
				</section>
			)}
		</ProductsStyles>
	);
};

export default Products;
