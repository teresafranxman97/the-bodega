import React, { useState, useEffecct } from "react";
import { Link } from "react-router-dom";
import {
	LoginStyles,
	Container,
	Buttons,
} from "../styles/sections/LoginStyles";

const defaultValues = {
	email: "",
	password: "",
};

const Login = () => {
	const [values, setValues] = useState(defaultValues);

	return (
		<LoginStyles>
			<div className="title">
				<h1>Log In</h1>
			</div>
			<Container>
				<form>
					<label>E-Mail</label>
					<input type="email" name="email" />
					<label>Password</label>
					<input type="password" name="password" />
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
