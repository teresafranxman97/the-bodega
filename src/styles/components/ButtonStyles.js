import styled from "styled-components";

const ButtonStyles = styled.div`
	cursor: pointer;
	background: #111111;
	width: 15rem;
	padding: 10px 20px;
	text-align: center;
	border-radius: 5px;

	a {
		color: white;
		text-decoration: none;
		font-size: 17px;
		font-weight: 200;
		letter-spacing: 5px;
	}

	@media screen and (max-width: 425px) {
		width: 97%;
	}
`;

export default ButtonStyles;
