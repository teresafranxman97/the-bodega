import styled from "styled-components";

const CartItemStyles = styled.main`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	border-bottom: 1px solid #eeeeee;
	padding: 15px 0;

	button {
		cursor: pointer;
	}
`;

const Content = styled.div`
	display: flex;
	gap: 3rem;

	.image-container {
		height: 20vh;
		width: 8rem;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
	}

	.info-container {
		width: 15rem;
	}

	h4 {
		font-weight: 300;
		color: #393939;
		font-size: 16px;
	}

	h5 {
		font-size: 16px;
		color: #393939;
		font-weight: 500;
	}

	button {
		border: transparent;
		background: transparent;
		font-size: 16px;
		color: #868686;
		text-decoration: underline;
	}
`;

const Amount = styled.div`
	display: flex;
	width: 7rem;
	justify-content: space-between;
	border: 1px solid #9b9b9b;
	border-radius: 5px;
	height: 5vh;
	padding: 5px;
	align-items: center;

	button {
		padding: 5px 0;
		height: 100%;
		background: transparent;
		border: transparent;
	}

	p {
		font-size: 19px;
		height: 0;
		display: flex;
		align-items: center;
	}
`;

export { CartItemStyles, Content, Amount };
