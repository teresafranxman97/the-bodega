import React, { useState, useEffecct } from "react";
import { Link } from "react-router-dom";
import {
	LoginStyles,
	Container,
	Buttons,
} from "../styles/sections/LoginStyles";

const state = {
	email: "",
	password: "",
};

const Login = () => {
	const [values, setValues] = useState(state);

	return (
		<LoginStyles>
			<div className="title">
				<h1>Log In</h1>
			</div>
			<Container>
				<form>
					<input type="email" placeholder="E-Mail" name="email" />
					<input type="password" placeholder="Password" name="password" />
					<div className="form-content">
						<div className="checkbox">
							<input type="checkbox" name="checkbox" />
							<label>Remember me</label>
						</div>
						<div className="link">
							<Link to="/">Forgot password?</Link>
						</div>
					</div>
					<input type="button" value="Submit" name="button" />
					<Buttons>
						<p>
							Don't have an account? <a href="signup">Sign up</a>
						</p>
						<p>
							<span>Or</span>
						</p>
						<button>continue with google</button>
						<button>continue with facebook</button>
					</Buttons>
				</form>
			</Container>
		</LoginStyles>
	);
};

export default Login;
