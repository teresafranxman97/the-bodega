import { Icon } from "@iconify/react";
import {
	CartItemStyles,
	Content,
	Amount,
} from "../styles/components/CartItemStyles";
import {
	increaseAmount,
	decreaseAmount,
	removeItem,
} from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, image, title, price, amount }) => {
	const dispatch = useDispatch();

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
				<button onClick={() => dispatch(increaseAmount({ id }))}>
					<Icon icon="ant-design:plus-outlined" />
				</button>
				<p>{amount}</p>
				<button
					onClick={() => {
						if (amount === 1) {
							dispatch(removeItem(id));
							return;
						}
						dispatch(decreaseAmount({ id }));
					}}
				>
					<Icon icon="ant-design:minus-outlined" />
				</button>
			</Amount>
		</CartItemStyles>
	);
};

export default CartItem;
