import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
	const { cartItems, amount, total } = useSelector((store) => store.cart);

	return (
		<main>
			<header className="title">
				<h1>YOUR SHOPPING CART</h1>
			</header>
			<div className="body">
				<section>
					{cartItems.map((item) => {
						return <CartItem key={item.id} {...item} />;
					})}
				</section>
				<section className="summary-container">
					<h3>Order Summary</h3>
					<div className="cost-container">
						<h4>Subtotal</h4>
						<p>${amount}</p>
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
				</section>
			</div>
		</main>
	);
};

export default Cart;
