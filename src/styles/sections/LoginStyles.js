import styled from "styled-components";

const LoginStyles = styled.main`
	font-family: poppins;
	padding: 3rem 1rem;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;

	.title {
		width: 40rem;
		margin: 1rem 0;

		h1 {
			text-align: left;
			font-weight: 200;
			font-size: 24px;
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

	input[type="email"],
	input[type="password"] {
		padding: 15px;
		font-size: 16px;
		border: 1px solid #dddddd;
		border-radius: 5px;
	}

	input[type="email"],
	input[type="password"],
	input[type="submit"] {
		font-family: poppins;
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
			color: #4a4a4a;
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

	input[type="submit"] {
		height: 50px;
		background: #111111;
		color: white;
		border: 1px solid #111111;
		border-radius: 5px;
		font-size: 16px;
		cursor: pointer;
		width: 100%;
		font-weight: 200;
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
		color: #4a4a4a;

		a {
			font-weight: 600;
		}
	}

	button {
		width: 247px;
		padding: 5px;
		height: 40px;
		font-size: 15px;
		margin: 1rem 0;
		font-weight: 500;
		border: 1px solid #dddddd;
		background: transparent;
		border-radius: 5px;
		font-family: "Poppins";
		color: #818181;
		display: flex;
		align-items: center;
	}

	img {
		height: 100%;
		margin-right: 8px;
	}
`;

export { LoginStyles, Container, Buttons };
