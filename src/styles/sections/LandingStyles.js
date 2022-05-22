import styled from "styled-components";

const LandingStyles = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	.content {
		position: absolute;
		top: 70vh;
		font-size: clamp(0.85rem, 1.5vw, 2rem);
		width: 100%;
		text-align: center;
		font-family: poppins;
		display: flex;
		flex-direction: column;
		align-items: center;

		h1 {
			font-weight: 300;
			color: white;
			filter: drop-shadow(2px 4px 6px black);
		}
	}

	.container {
		height: 100vh;
		width: 100%;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: brightness(0.8);
	}

	.content-two {
		position: absolute;
		top: 185vh;
		width: 100%;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: "Poppins";

		h1 {
			font-weight: 300;
			color: white;
			filter: drop-shadow(2px 4px 6px black);
			font-size: clamp(2rem, 2vw, 2.5rem);
		}
	}

	.content-three {
		position: absolute;
		top: 153rem;
		font-family: poppins;
		width: 100%;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h1 {
			font-size: clamp(2rem, 2vw, 2.5rem);
			font-weight: 300;
			color: white;
			filter: drop-shadow(2px 4px 6px black);
		}
	}

	.arrow {
		position: absolute;
		bottom: 10px;
		right: 10px;
	}

	@media screen and (max-width: 445px) {
		.content-three {
			top: 278vh;
		}
	}

	@media screen and (min-width: 1044px) {
		.content {
			top: 60vh;
		}
	}

	@media screen and (min-width: 1440px) {
		.content-three {
			top: 280vh;
		}
	}
`;

export default LandingStyles;
