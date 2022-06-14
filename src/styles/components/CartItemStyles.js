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
		color: #4a4a4a;
		text-align: left;
	}

	h4 {
		font-weight: 300;
	}

	h5 {
		font-weight: 500;
	}

	button {
		border: transparent;
		background: transparent;
		color: #868686;
		padding: 0;
		text-decoration: underline;
	}

	h4,
	h5,
	button {
		font-size: 14px;
	}

	@media screen and (max-width: 320px) {
		h4,
		h5,
		button {
			font-size: 12px;
		}
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
		font-size: 14px;
		height: 0;
		display: flex;
		align-items: center;
	}
`;

export { CartItemStyles, Content, Amount };
