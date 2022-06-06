import styled from "styled-components";

const ProductsStyles = styled.main`
	height: 100%;
	font-family: "Poppins";
`;

const Container = styled.div`
	display: flex;
	gap: 2rem;
	margin-bottom: 18vh;
	justify-content: center;
	padding: 5rem;

	@media screen and (max-width: 1023px) {
		flex-direction: column;
		padding: 3rem;
	}

	@media screen and (max-width: 768px) {
		padding: 1rem;
	}
`;

const Content = styled.div`
	width: 50rem;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
	}

	h1 {
		font-size: 16px;
		font-weight: 300;
	}

	.price {
		font-size: 15px;
		font-weight: 500;
	}

	.description {
		font-size: 15px;
		letter-spacing: 1px;
		padding: 1rem 0;
		font-weight: 300;
	}

	.price,
	.description {
		color: #4a4a4a;
	}

	@media screen and (min-width: 1023px) {
		h1 {
			font-size: 20px;
		}
	}

	@media screen and (min-width: 425px) {
		height: 55vh;
	}

	@media screen and (max-width: 1023px) {
		width: 100%;
	}

	@media screen and (max-width: 425px) {
		.price,
		.description {
			font-size: 14px;
		}
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
		letter-spacing: 1px;
		font-weight: 200;
		font-family: poppins;
	}

	@media screen and (max-width: 320px) {
		.cart {
			font-size: 13px;
		}
	}
`;

const Nav = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	color: #b0b0b0;
	font-size: 14px;
	padding: 1rem;

	.arrow {
		display: flex;
		align-items: end;
	}

	a {
		text-decoration: none;
		color: #b0b0b0;
	}
`;

export { Container, Content, ProductsStyles, Buttons, Nav };
