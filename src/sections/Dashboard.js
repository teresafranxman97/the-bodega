import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";

import Navbar from "../styles/sections/DashboardStyles";

const Dashboard = ({ email }) => {
	return (
		<main>
			<Navbar>
				<h4>Welcome user,</h4>
				<Link to="/">Logout</Link>
			</Navbar>
			<section>
				<Cart />
			</section>
		</main>
	);
};

export default Dashboard;
