import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Icon } from "@iconify/react";
import {
	Container,
	Content,
	ProductsStyles,
	Buttons,
	Nav,
} from "../styles/components/ProductStyles";

import {
	addToCart,
	increaseAmount,
	decreaseAmount,
} from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductByIdQuery } from "../features/api/api";

const Product = () => {
	const { id } = useParams();
	const { amount } = useSelector((store) => store.cart);
	const { data: product, isLoading } = useGetProductByIdQuery(id);
	const dispatch = useDispatch();

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};

	return (
		<ProductsStyles>
			{isLoading ? (
				<Loading isLoading={isLoading} />
			) : (
				<section>
					<Nav>
						<a href="/products" className="arrow">
							<Icon
								icon="ep:arrow-left"
								style={{ height: "100%", color: "#B0B0B0" }}
							/>
						</a>
						<Icon icon="mdi:slash-forward" />
						<a href="/products">products</a>
						<Icon icon="mdi:slash-forward" />
						<p>{product.title}</p>
					</Nav>
					<Container key={product.id}>
						<Content className="img-content" style={{ height: "55vh" }}>
							<img src={product.image} alt={product.title} />
						</Content>
						<Content>
							<h1>{product.title}</h1>
							<p className="price">${product.price}</p>
							<p className="description">{product.description}</p>
							<Buttons>
								<button
									className="amount"
									// onClick={() => dispatch(decreaseAmount({ id }))}
								>
									<Icon icon="bx:minus" />
								</button>
								<p>{amount}</p>
								<button
								// onClick={() => dispatch(increaseAmount({ id }))}
								>
									<Icon icon="bx:plus" />
								</button>
								<button
									className="cart"
									onClick={() => handleAddToCart(product)}
								>
									Add to cart
								</button>
							</Buttons>
						</Content>
					</Container>
				</section>
			)}
		</ProductsStyles>
	);
};

export default Product;
