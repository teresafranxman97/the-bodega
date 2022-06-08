import styled from "styled-components";

const SignupStyles = styled.main`
	font-family: poppins;
	padding: 3rem 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;

	.title {
		width: 40rem;

		h1 {
			text-align: left;
			font-weight: 500;
			font-size: 24px;
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
	width: 40rem;

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.label-wrapper {
		display: flex;
		flex-direction: column;
		margin-bottom: 0.5rem;
	}

	input[type="text"],
	input[type="email"],
	input[type="password"] {
		padding: 15px;
		font-family: "Poppins";
		font-size: 16px;
		border: 1px solid #dddddd;
		border-radius: 5px;
	}

	input[type="submit"] {
		padding: 15px;
		background: #111111;
		color: white;
		border: 1px solid #111111;
		border-radius: 5px;
		font-size: 16px;
		cursor: pointer;
	}

	label {
		font-size: 14px;
		color: #868686;
	}

	.checkbox,
	label {
		color: #111111;
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
