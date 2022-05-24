import styled from "styled-components";

const ContactStyles = styled.main`
	min-height: 100vh;
	min-height: 65vh;
	display: flex;
	justify-content: center;
	font-family: "Poppins";
	flex-direction: column;
	align-items: center;
	padding: 1rem;

	.title {
		width: 50rem;
	}

	h1 {
		text-align: left;
		font-weight: 400;
	}

	form {
		width: 50rem;
		display: flex;
		flex-direction: column;
		align-items: baseline;
	}

	label {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 0.5rem;
		color: #868686;
	}

	input[type="text"],
	input[type="email"] {
		padding: 10px;
		border: 1px solid #dddddd;
		border-radius: 5px;
	}

	textarea {
		height: 5rem;
		border: 1px solid #dddddd;
		border-radius: 5px;
	}

	input[type="submit"] {
		padding: 10px;
		background: #111111;
		color: white;
		border: 1px solid #111111;
		border-radius: 5px;
		font-size: 16px;
		cursor: pointer;
	}

	@media screen and (max-width: 1024px) {
		.title,
		form {
			width: 70%;
		}
	}

	@media screen and (max-width: 425px) {
		.title,
		form {
			width: 100%;
		}
	}
`;

export default ContactStyles;
