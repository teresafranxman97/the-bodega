import { Route, Routes } from "react-router-dom";
import Landing from "./sections/Landing";
import Products from "./sections/Products";
import Signup from "./sections/Signup";
import Login from "./sections/Login";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Cart from "./sections/Cart";
import { app } from "./firebaseConfig";

import { ToastContainer } from "react-toastify";
import { AppStyles, GlobalStyle } from "./styles/GlobalStyles";


function App() {
	// console.log(app)

	return (
		<AppStyles className="App">
			<Navbar />
			<ToastContainer />

			<Routes>
				<Route exact path="/" element={<Landing />} />
				<Route path="login" element={<Login />} />
				<Route path="products" element={<Products />} />
				<Route path="products/:id" element={<Product />} />
				<Route path="signup" element={<Signup />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact/>} />
				<Route path="cart" element={<Cart/>} />
			</Routes>
			<GlobalStyle />
		</AppStyles>
	);
}

export default App;
