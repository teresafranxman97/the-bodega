import { Icon } from "@iconify/react";
import {
	CartItemStyles,
	Content,
	Amount,
} from "../styles/components/CartItemStyles";

const CartItem = ({ id, image, title, price, amount }) => {
	return (
		<CartItemStyles>
			<Content className="content">
				<div className="image-container">
					<img src={image} alt={title} />
				</div>
				<div className="info-container">
					<h4>{title}</h4>
					<h5>${price}</h5>
					<button>REMOVE</button>
				</div>
			</Content>
			<Amount className="amount">
				<button>
					<Icon icon="ant-design:plus-outlined" />
				</button>
				<p>{amount}</p>
				<button>
					<Icon icon="ant-design:minus-outlined" />
				</button>
			</Amount>
		</CartItemStyles>
	);
};

export default CartItem;
