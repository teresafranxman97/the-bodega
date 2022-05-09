import ButtonStyles from "../styles/components/ButtonStyles";
import { Link } from "react-router-dom";

const Button = ({ content, link }) => {
	return (
		<ButtonStyles>
			<Link to={link}>{content}</Link>
		</ButtonStyles>
	);
};

export default Button;
