import styled from "styled-components";

const SignupStyles = styled.main`
	font-family: poppins;
	padding: 3rem 1rem;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;

	.title {
		width: 40%;

		h1 {
			text-align: left;
			font-weight: 500;
		}
	}

	@media screen and (max-width: 1024px) {
		.title {
			width: 50%;
		}
	}

	@media screen and (max-width: 768px) {
		.title {
			width: 77%;
		}
	}

	@media screen and (max-width: 425px) {
		.title {
			width: 100%;
		}
	}
`;

const Container = styled.div`
	width: 40%;

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	input[type="text"],
	input[type="email"],
	input[type="password"] {
		padding: 15px;
		font-family: "Poppins";
		font-size: 16px;
		border: 1px solid #e5e5e5;
	}

	input[type="button"] {
		padding: 15px;
		background: #111111;
		color: white;
		border: 1px solid #111111;
		border-radius: 4px;
		font-size: 16px;
	}

	span {
		font-weight: 600;
	}

	media screen and (max-width: 1024px) {
		width: 50%;
	}

	@media screen and (max-width: 768px) {
		width: 77%;
	}

	@media screen and (max-width: 425px) {
		width: 100%;
	}
`;

const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		color: #111111;

		a {
			font-weight: 600;
			text-decoration: none;
			color: #111111;
		}
	}
`;

export { SignupStyles, Container, Buttons };
