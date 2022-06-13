import styled from "styled-components";

const AboutStyles = styled.main`
	font-family: poppins;
`;

const Banner = styled.div`
	height: 33vh;

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: bottom;
	}

	h1 {
		color: white;
		position: absolute;
		font-weight: 200;
		width: 100%;
		text-align: center;
		letter-spacing: 5px;
		font-size: 15px;
		top: 35vh;
	}

	@media screen and (min-width: 425px) {
		height: 45vh;

		h1 {
			top: 44vh;
			font-size: 17px;
		}
	}

	@media screen and (min-width: 768px) {
		height: 57vh;

		h1 {
			top: 54vh;
			font-size: 21px;
		}
	}

	@media screen and (min-width: 1024px) {
		height: 70vh;

		h1 {
			top: 60vh;
			font-size: 28px;
		}
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1rem;
	gap: 4rem;

	.top-content,
	.center-content,
	.last-content {
		display: flex;
		gap: 2rem;
	}

	.center-content {
		flex-direction: row-reverse;
	}

	.image-container,
	.content-wrapper {
		width: 50vw;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}

	h3 {
		margin-top: 0;
		border-bottom: 1px solid #efefef;
		width: 70%;
		font-size: 24px;
		font-weight: 400;
	}

	.content-wrapper p {
		font-size: 14px;
		color: #393939;
		letter-spacing: 1px;
		font-weight: 400;
	}

	@media screen and (max-width: 425px) {
		.content-wrapper p {
			font-size: 12px;
		}
	}

	@media screen and (max-width: 768px) {
		.top-content,
		.center-content,
		.last-content {
			flex-direction: column;
		}

		.image-container,
		.content-wrapper {
			width: 100%;
		}

		h3 {
			width: 100%;
		}
	}

	@media screen and (min-width: 1024px) {
		padding: 3rem 10rem;

		.top-content,
		.center-content,
		.last-content {
			height: 50vh;
		}
	}
`;
const Content = styled.div`
	text-align: center;
	padding: 1rem;

	h2 {
		font-size: 24px;
		font-weight: 400;
		border-bottom: 1px solid #efefef;
	}

	p {
		font-size: 12px;
		font-weight: 400;
		letter-spacing: 2px;
		color: #393939;
	}

	@media screen and (min-width: 425px) {
		padding: 3rem;

		p {
			font-size: 14px;
		}
	}

	@media screen and (min-width: 768px) {
		padding: 6rem;
	}

	@media screen and (min-width: 1024px) {
		padding: 3rem 10rem;
	}
`;

const Footer = styled.div`
	.title {
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	h2 {
		font-weight: 400;
		width: 80%;
		border-bottom: 1px solid #efefef;
	}

	.icons {
		background: #f3f3f3;
		padding: 5rem 10rem;
	}

	.icon {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #e7e7e7;
	}

	h3 {
		font-size: 20px;
		font-weight: 600;
	}

	@media screen and (max-width: 768px) {
		.icons {
			padding: 3rem;
		}
	}

	@media screen and (max-width: 425px) {
		.icons {
			padding: 5rem 1rem;
		}
	}
`;

export { AboutStyles, Banner, Container, Content, Footer };
