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
import { useGetProductByIdQuery } from "../features/api/api";

const Product = () => {
	const { id } = useParams();
	const { data: product, isLoading } = useGetProductByIdQuery(id);

	return (
		<ProductsStyles>
			{isLoading ? (
				<Loading isLoading={isLoading} />
			) : (
				<div>
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
								<button className="amount">
									<Icon icon="bx:minus" />
									0
									<Icon icon="bx:plus" />
								</button>
								<button className="cart">Add to cart</button>
							</Buttons>
						</Content>
					</Container>
				</div>
			)}
		</ProductsStyles>
	);
};

export default Product;
