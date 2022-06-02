import styled from "styled-components";

const EmptyCart = styled.main`
	height: 86vh;
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
		font-weight: 200;
		font-family: "Poppins";
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

	@media screen and (max-width: 1024px) {
		padding: 5rem 2rem;
	}

	@media screen and (max-width: 425px) {
		padding: 2rem 1rem;
	}
`;
const Header = styled.header`
	h1 {
		font-weight: 300;
		font-size: 24px;
	}
`;

const Body = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;

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
	height: 65vh;
	background: #f3f3f3;

	h3 {
		color: #393939;
		font-size: 20px;
		font-weight: 400;
	}

	.cost-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #393939;
	}

	h4 {
		font-size: 18px;
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
