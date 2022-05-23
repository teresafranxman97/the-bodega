import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	LoginStyles,
	Container,
	Buttons,
} from "../styles/sections/LoginStyles";

const defaultValues = {
	email: "",
	password: "",
	checkbox: false
};

const Login = () => {
	const [values, setValues] = useState(defaultValues);

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('clicked')
	}

	return (
		<LoginStyles>
			<div className="title">
				<h1>Log In</h1>
			</div>
			<Container>
				<form onSubmit={handleSubmit}>
					<label className="label-wrapper">
						E-Mail
						<input type="email" name="email" onChange={handleChange} />
					</label>
					<label className="label-wrapper">
						Password
						<input type="password" name="password" onChange={handleChange} />
					</label>
					<div className="form-content">
						<div className="checkbox">
							<input type="checkbox" name="checkbox" onChange={handleChange} />
							<label>Remember me</label>
						</div>
						<div className="link">
							<Link to="/">Forgot password?</Link>
						</div>
					</div>
					<input type="submit" value="Sign in"/>
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
