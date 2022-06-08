import styled from "styled-components";

const LandingStyles = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	min-height: 100vh;

	.banner-container {
		position: relative;
		width: 100%;

		img {
			height: 93vh;
			width: 98%;
			object-position: top;
		}
	}

	.banner-content {
		position: absolute;
		top: 55vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		h1 {
			color: white;
			font-family: "Poppins";
			font-weight: 200;
			letter-spacing: 2px;
			font-size: 30px;
			filter: drop-shadow(2px 4px 6px black);
		}
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: brightness(0.8);
	}

	.wrapper {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, 1fr);
		margin: 5rem 1rem;
	}

	.content {
		height: 61vh;
		text-align: left;
		font-family: "Poppins";
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.img-wrapper {
		height: 78%;
	}

	.text-wrapper {
		display: flex;
		flex-direction: column;

		p {
			color: #4a4a4a;
			font-size: 14px;
			font-weight: 300;
		}

		a {
			text-decoration: none;
			color: #4a4a4a;
			font-size: 14px;
			font-weight: 400;
			display: flex;
			align-items: center;
		}
	}

	@media screen and (max-width: 880px) {
		.wrapper {
			grid-template-columns: repeat(1, 1fr);
			height: 100%;
			width: 100%;
			padding: 0.5rem;
			margin: 1rem 0;
		}

		.content {
			height: 95vh;
			justify-content: center;
		}

		.text-wrapper {
			p,
			a {
				font-size: 14px;
			}
		}

		.img-wrapper {
			height: 90%;
		}
	}

	@media screen and (max-width: 620px) {
		.banner-container img {
			width: 100%;
		}

		.content {
			height: 55vh;
		}

		.wrapper {
			gap: 2rem;
		}
	}
`;

export default LandingStyles;
