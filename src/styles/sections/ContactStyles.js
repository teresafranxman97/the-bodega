import styled from "styled-components";

const ContactStyles = styled.main`
	min-height: 100vh;
	display: flex;
	justify-content: space-between;
	font-family: "Poppins";
	flex-direction: column;
	align-items: center;

	.title {
		width: 50rem;
	}

	h1 {
		text-align: left;
		font-weight: 400;
		font-size: 26px;
	}

	form {
		width: 50rem;
		display: flex;
		flex-direction: column;
		align-items: baseline;
		gap: 1rem;
		border: 1px solid #e9e9e9;
		padding: 15px;
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
		padding: 15px;
		border: 1px solid #dddddd;
		border-radius: 5px;
	}

	textarea {
		height: 5rem;
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

	@media screen and (max-width: 1024px) {
		.title,
		form {
			width: 80%;
		}
	}

	@media screen and (max-width: 425px) {
		.title,
		form {
			width: 100%;
		}
	}
`;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3rem 1rem;
`;

export { ContactStyles, Wrapper };
