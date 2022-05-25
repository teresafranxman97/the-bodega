import { useSelector } from "react-redux";

const Cart = () => {
    const { amount, total } = useSelector((store) => store.cart);

    return (
			<main>
				<div className="title">
					<h1>YOUR SHOPPING CART</h1>
				</div>
				<div className="summary-container">
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
				</div>
			</main>
		);
};

export default Cart;