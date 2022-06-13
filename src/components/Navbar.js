import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import {
	NavStyles,
	Logo,
	Menu,
	MenuLink,
	Icons,
	Hamburger,
} from "../styles/components/NavStyles";


const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

	const closeMenu = () => {
		setIsOpen(!isOpen)
	};

    return (
			<NavStyles isOpen={isOpen}>
				<Hamburger onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? (
						<Icon
							style={{ color: "#4A4A4A", position: "absolute", right: "1rem" }}
							icon="ep:close-bold"
							width={25}
						/>
					) : (
						<Icon
							style={{ color: "#111111" }}
							icon="system-uicons:menu-hamburger"
							width={25}
						/>
					)}
				</Hamburger>
				<Logo>
					{isOpen ? (
						""
					) : (
						<Link to="/">
							The
							<br />
							Bodega
						</Link>
					)}
				</Logo>
				<Menu isOpen={isOpen}>
					<MenuLink onClick={() => closeMenu}>
						<Link to="products">Products</Link>
					</MenuLink>
					<MenuLink onClick={() =>closeMenu}>
						<Link to="about">About</Link>
					</MenuLink>
					<MenuLink onClick={() => closeMenu}>
						<Link to="contact">Contact</Link>
					</MenuLink>
				</Menu>
				<Icons isOpen={isOpen}>
					<Link to="login">
						<Icon icon="bxs:user" width={20} />
					</Link>
					<Link to="cart">
						<Icon icon="akar-icons:shopping-bag" width={20} />
					</Link>
				</Icons>
			</NavStyles>
		);
};

export default Navbar;