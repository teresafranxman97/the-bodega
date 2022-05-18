import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Icon } from "@iconify/react";
import {
	Container,
	Content,
	ProductsStyles,
	Buttons,
} from "../styles/components/ProductStyles";

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchProductData = async () => {
			setLoading(true);
			const response = await fetch(`https://fakestoreapi.com/products/${id}`);
			const data = await response.json();
			setLoading(false);
			setProduct(data);
		};

		fetchProductData();
	}, [id]);

	return (
		<ProductsStyles>
			{loading ? (
				<Loading loading={loading} />
			) : (
				<Container key={product.id}>
					<Content className="img-content" style={{ height: "55vh" }} >
						<img src={product.image} alt={product.title} />
					</Content>
					<Content>
						<h1>{product.title}</h1>
						<p className="price">${product.price}</p>
						<p className="description">{product.description}</p>
						<Buttons>
							<button className="amount">
								<Icon icon="bx:minus" />
								0
								<Icon icon="bx:plus" />
							</button>
							<button className="cart">Add to cart</button>
						</Buttons>
					</Content>
				</Container>
			)}
		</ProductsStyles>
	);
};

export default Product;
