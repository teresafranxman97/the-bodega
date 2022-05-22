import styled from "styled-components";

const ButtonStyles = styled.div`
	cursor: pointer;
	background: #111111;
	width: 15rem;
	padding: 15px 30px;
	text-align: center;
	border-radius: 5px;

	a {
		color: white;
		text-decoration: none;
		font-size: 19px;
		font-weight: 200;
		letter-spacing: 5px;
	}

	@media screen and (max-width: 425px) {
		width: 90%;
	}
`;

export default ButtonStyles;
