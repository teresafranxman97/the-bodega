import styled from "styled-components";

const ProductsStyles = styled.main`
	height: 100%;
	font-family: "Poppins";
	padding: 5rem;

	@media screen and (max-width: 1023px) {
		padding: 3rem;
	}

	@media screen and (max-width: 425px) {
		padding: 1rem;
	}
`;

const Container = styled.div`
	display: flex;
	gap: 2rem;
	margin-bottom: 18vh;

	@media screen and (max-width: 1023px) {
		flex-direction: column;
	}
`;

const Content = styled.div`
	width: 50vw;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
	}

	h1 {
		font-size: 16px;
		font-weight: 600;
	}

	.price {
		font-size: 16px;
		font-weight: 500;
	}

	.description {
		font-size: 14px;
		letter-spacing: 1px;
		padding: 1rem 0;
	}

	@media screen and (min-width: 1023px) {
		h1 {
			font-size: 18px;
		}
	}

	@media screen and (max-width: 1023px) {
		width: 100%;
	}
`;

const Buttons = styled.div`
	display: flex;
	gap: 2rem;
	justify-content: space-between;

	button {
		cursor: pointer;
	}

	.amount {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: transparent;
		font-size: 15px;
		border-radius: 4px;
		border: 1px solid #111111;
		padding: 10px;
		color: #111111;
	}

	.cart {
		font-size: 15px;
		background: #111111;
		color: #ffffff;
		border: 1px solid #111111;
		padding: 10px 20px;
		border-radius: 5px;
		width: 100%;
	}
`;

export { Container, Content, ProductsStyles, Buttons };
