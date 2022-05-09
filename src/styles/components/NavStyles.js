import styled from "styled-components";

const NavStyles = styled.div`
	background: ${({ isOpen }) => (isOpen ? "#FFFFFF" : "#ffffff4f")};
	display: flex;
	justify-content: space-between;
	flex-direction: ${({ isOpen }) => (isOpen ? "column" : "row")};
	padding-top: 0.85rem;
	align-items: end;
	position: ${({ isOpen }) => (isOpen ? "unset" : "fixed")};
	top: 0;
	left: 0;
	right: 0;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	padding-bottom: 1rem;

	a {
		text-decoration: none;
		color: #111111;
		font-weight: 400;
	}
`;
const Logo = styled.div`
	font-family: "DM Serif Display", serif;
	font-size: 24px;
	text-align: center;
`;

const Menu = styled.div`
	display: flex;
	gap: 2rem;
	font-family: "Poppins";

	@media (max-width: 769px) {
		display: ${({ isOpen }) => (isOpen ? "" : "none")};
		overflow: hidden;
		flex-direction: column;
		max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
		width: ${({ isOpen }) => (isOpen ? "100vw" : "")};
		transition: ${({ isOpen }) =>
			isOpen ? "max-height 0.3s ease-in" : "0s ease-out"};
	}
`;

const MenuLink = styled.div`
	padding: 1rem;
	cursor: pointer;
	text-align: center;
	font-weight: 400;
	transition: all 0.3s ease-in;
`;

const Icons = styled.div`
	gap: 1rem;
	display: flex;
	width: ${({ isOpen }) => (isOpen ? "100vw" : "")};
	justify-content: center;
`;

const Hamburger = styled.div`
	flex-direction: column;
	cursor: pointer;
	display: flex;

	@media only screen and (min-width: 769px) {
		display: none;
	}
`;

export { NavStyles, Logo, Menu, MenuLink, Icons, Hamburger };
