import styled from "styled-components";

const ProductsStyles = styled.div`
	margin-top: 11vh;
	margin-left: 12rem;
	margin-right: 12rem;

	.title {
		font-size: 18px;
		text-align: center;

		h1 {
			font-family: "Poppins";
			font-weight: 400;
			border-bottom: 1px solid #f1f1f1;
		}
	}

	nav {
		display: flex;
		justify-content: space-evenly;
		margin: 4rem 0;

		a {
			text-decoration: none;
			color: #111111;
			font-family: poppins;
		}
	}

	@media screen and (max-width: 1440px) {
		margin-left: 6rem;
		margin-right: 6rem;
	}

	@media screen and (max-width: 1023px) {
		margin-left: 2rem;
		margin-right: 2rem;
	}

	@media screen and (max-width: 425px) {
		margin-left: 1rem;
		margin-right: 1rem;
	}
`;
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 4rem;
	font-family: poppins;
	margin-bottom: 18vh;

	@media screen and (max-width: 1440px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	@media screen and (max-width: 1023px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 425px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid #ededed;
	padding: 10px;

	.image-container {
		height: 40vh;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}

	a {
		text-decoration: none;
		color: #ffffff;
		background: #111111;
		border: 2px solid #111111;
		width: 40%;
		text-align: center;
		font-size: 18px;
		font-weight: 200;
		letter-spacing: 2px;
		border-radius: 5px;
		padding: 4px 7px;
	}

	h4 {
		font-weight: 300;
		margin: 0.5rem 0;
	}

	p {
		font-weight: 600;
	}

	@media screen and (max-width: 769px) {
		.image-container {
			height: 30vh;
		}
	}
`;

const Buttons = styled.div`
	display: flex;
	justify-content: center;
	gap: ${({ isOpen }) => (isOpen ? "0" : "1rem")};
	margin: 2rem 0;

	button {
		cursor: pointer;
		padding: 7px 10px;
		font-size: 12px;
		font-family: poppins;
		background: transparent;
		border: 2px solid #f1f1f1;
	}

	.drop-down-button {
		width: 100%;
		background: #111111;
		color: white;
		font-family: "Poppins";
		font-size: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	@media screen and (min-width: 769px) {
		.drop-down-button {
			display: none;
		}
	}

	@media screen and (max-width: 769px) {
		flex-direction: column;
	}
`;

const Menu = styled.div`
	@media screen and (max-width: 769px) {
		display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
		flex-direction: column;
	}
`;

export { ProductsStyles, GridContainer, Card, Buttons, Menu };
