import { Route, Routes } from "react-router-dom";
import Landing from "./sections/Landing";
import Products from "./sections/Products";
import Signup from "./sections/Signup";
import Login from "./sections/Login";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

import { AppStyles, GlobalStyle } from "./styles/GlobalStyles";

function App() {
	return (
		<AppStyles className="App">
			<Navbar />

			<Routes>
				<Route exact path="/" element={<Landing />} />
				<Route path="login" element={<Login />} />
				<Route path="products" element={<Products />} />
				<Route path="products/:id" element={<Product />} />
				<Route path="signup" element={<Signup />} />
			</Routes>
			<GlobalStyle />
		</AppStyles>
	);
}

export default App;
