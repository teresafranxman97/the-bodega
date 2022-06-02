import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import {
	EmptyCart,
	CartStyles,
	Header,
	Body,
	Summary,
	ItemContainer,
} from "../styles/sections/CartStyles";

const Cart = () => {
	const { cartItems, amount, total, subtotal } = useSelector(
		(store) => store.cart
	);

	if (amount < 1) {
		return (
			<EmptyCart>
				<h1>Your shopping cart is empty</h1>
				<button>Start shopping</button>
			</EmptyCart>
		);
	}

	return (
		<CartStyles>
			<Header>
				<h1>YOUR SHOPPING CART</h1>
			</Header>
			<Body>
				<ItemContainer>
					{cartItems.map((item) => {
						return <CartItem key={item.id} {...item} />;
					})}
				</ItemContainer>
				<Summary className="summary-container">
					<h3>Order Summary</h3>
					<div className="cost-container">
						<h4>Subtotal</h4>
						<p>${subtotal}</p>
					</div>
					<div className="cost-container">
						<h4>Shipping cost</h4>
						<p>$7.99</p>
					</div>
					<div className="cost-container">
						<h4>Discount</h4>
						<p>$0</p>
					</div>
					<div className="cost-container">
						<h4>Total</h4>
						<p>${total}</p>
					</div>
					<button className="checkout-btn">CHECKOUT</button>
				</Summary>
			</Body>
		</CartStyles>
	);
};

export default Cart;
