import styled from "styled-components";

const LoginStyles = styled.main`
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

	.label-wrapper {
		display: flex;
		flex-direction: column;
		margin-bottom: 0.5rem;
	}

	input[type="email"],
	input[type="password"] {
		padding: 15px;
		font-family: "Poppins";
		font-size: 16px;
		border: 1px solid #dddddd;
		border-radius: 5px;
	}

	.form-content {
		display: flex;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.checkbox {
		display: flex;
		align-items: center;

		label {
			color: #111111;
		}
	}

	a {
		text-decoration: none;
		color: #111111;
		font-size: 14px;
	}

	label {
		font-size: 14px;
		color: #868686;
	}

	input[type="button"] {
		padding: 15px;
		background: #111111;
		color: white;
		border: 1px solid #111111;
		border-radius: 5px;
		font-size: 16px;
		cursor: pointer;
	}

	@media screen and (max-width: 1024px) {
		width: 50%;
	}

	@media screen and (max-width: 768px) {
		width: 77%;
	}

	@media screen and (max-width: 425px) {
		width: 100%;
	}

	@media screen and (max-width: 300px) {
		label,
		.link a {
			font-size: 12px;
		}
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
		}
	}
`;

export { LoginStyles, Container, Buttons };
