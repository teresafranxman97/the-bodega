import styled from "styled-components";

const EmptyCart = styled.main`
	min-height: 100vh;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	font-family: poppins;

	h1 {
		font-weight: 300;
	}

	button {
		padding: 18px;
		color: white;
		background: #111111;
		border: 1px solid #111111;
		border-radius: 5px;
		font-size: 16px;
		letter-spacing: 1px;
		font-weight: 200;
		font-family: "Poppins";
		cursor: pointer;
	}

	@media screen and (max-width: 768px) {
		padding: 1rem;

		button {
			width: 100%;
		}
	}

	@media screen and (min-width: 768px) {
		margin: 0 12rem;

		button {
			width: 30rem;
		}
	}

	@media screen and (min-width: 425px) {
		padding: 3rem;
	}
`;

const CartStyles = styled.main`
	padding: 5rem;
	font-family: "Poppins";
	min-height: 100vh;

	@media screen and (max-width: 1024px) {
		padding: 5rem 2rem;
	}

	@media screen and (max-width: 425px) {
		padding: 2rem 1rem;
	}
`;
const Header = styled.header`
	h1 {
		font-weight: 200;
		font-size: 20px;
	}
`;

const Body = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	margin-bottom: 9vh;

	@media screen and (max-width: 780px) {
		flex-direction: column;
	}
`;

const ItemContainer = styled.section`
	width: 50rem;

	@media screen and (max-width: 780px) {
		width: 100%;
	}
`;

const Summary = styled.section`
	width: 38rem;
	padding: 3rem;
	height: 40%;
	background: #f3f3f3;
	color: #4a4a4a;

	h3 {
		font-size: 18px;
		font-weight: 400;
	}

	.cost-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #4a4a4a;
		font-size: 14px;
	}

	h4 {
		font-weight: 300;
	}

	button {
		width: 100%;
		background: #111111;
		color: white;
		border: 1px solid #111111;
		border-radius: 5px;
		padding: 10px;
		cursor: pointer;
	}

	@media screen and (max-width: 780px) {
		width: 100%;
		height: 100%;
		padding: 1rem;
	}
`;

export { EmptyCart, CartStyles, Header, Body, Summary, ItemContainer };
