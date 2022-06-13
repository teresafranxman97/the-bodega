import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import FooterStyles from "../styles/components/FooterStyles";

const Footer = () => {
	return (
		<FooterStyles>
			<div className="links left">
				<h5>Categories</h5>
				<Link to="/products">Women</Link>
				<Link to="/products">Men</Link>
				<Link to="/products">Jewelry</Link>
				<Link to="/products">Electronics</Link>
			</div>
			<div className="links right">
				<h5>Company</h5>
				<Link to="/about">About Us</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/login">Login</Link>
				<Link to="/signup">Signup</Link>
			</div>
			<div className="links left">
				<h5>Follow Us</h5>
				<div className="icons">
					<Icon
						icon="akar-icons:twitter-fill"
						style={{ color: "white", marginRight: "1rem" }}
						width={20}
					/>
					<Icon icon="cib:facebook-f" style={{ color: "white" }} width={20} />
				</div>
			</div>
		</FooterStyles>
	);
};

export default Footer;
