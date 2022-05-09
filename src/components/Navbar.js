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

    return (
    <NavStyles isOpen={isOpen}>
			<Hamburger onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? (
					<Icon style={{ color: "#111111" }} icon="ep:close-bold" width={28} />
				) : (
					<Icon
						style={{ color: "#111111" }}
						icon="system-uicons:menu-hamburger"
						width={28}
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
				<MenuLink>
					<Link to="products">Products</Link>
				</MenuLink>
				<MenuLink>
					<Link to="about">About</Link>
				</MenuLink>
				<MenuLink>
					<Link to="contact">Contact</Link>
				</MenuLink>
			</Menu>
			<Icons>
				<Link to="login">
					<Icon icon="bxs:user" width={22} />
				</Link>
				<Link to="/">
					<Icon icon="akar-icons:shopping-bag" width={22} />
				</Link>
			</Icons>
		</NavStyles>
	);
};

export default Navbar;