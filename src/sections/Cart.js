import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import {
	EmptyCart,
	CartStyles,
	Header,
	Body,
	Summary,
	ItemContainer,
} from "../styles/sections/CartStyles"; 
import { addSubtotal, calculateTotalCost } from "../features/cart/cartSlice";

const Cart = () => {
	const { cartItems, total, subtotal } = useSelector(
		(store) => store.cart
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(addSubtotal(cartItems))
		dispatch(calculateTotalCost(cartItems))
	}, [dispatch, cartItems])

	if (cartItems < 1) {
		return (
			<EmptyCart>
				<h1>Your shopping cart is empty</h1>
				<Link to="/products"><button>Start shopping</button></Link>
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
