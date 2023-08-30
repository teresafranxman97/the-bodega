import { Route, Routes } from "react-router-dom";
import Landing from "./sections/Landing";
import Products from "./sections/Products";
import Signup from "./sections/signup/Signup";
import Login from "./sections/login/Login";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Cart from "./sections/Cart";
import Dashboard from "./sections/Dashboard";
import ErrorPage from "./sections/ErrorPage";
import { ToastContainer } from "react-toastify";
import { AppStyles, GlobalStyle } from "./styles/GlobalStyles";

function App() {
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
				<Route path="contact" element={<Contact />} />
				<Route path="cart" element={<Cart />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<GlobalStyle />
		</AppStyles>
	);
}

export default App;
