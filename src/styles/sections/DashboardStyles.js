import styled from "styled-components";

const Navbar = styled.nav`
	width: 100%;
	font-family: poppins;
	height: 5vh;
	display: flex;
	align-items: center;
	justify-content: right;
	border: 1px solid #eeeeee;

	h4 {
		font-weight: 300;
		padding-right: 1rem;
	}

	a {
		font-size: 14px;
		font-family: "Poppins";
		text-decoration: none;
		color: #4a4a4a;
		padding-right: 1rem;
		font-weight: 400;
	}
`;
export default Navbar;
