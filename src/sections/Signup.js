import React, { useState } from "react";
import {
	SignupStyles,
	Container,
	Buttons,
} from "../styles/sections/SignupStyles";

const defaultValues = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	checkbox: false
}

const Signup = () => {
	const [ values, setValues ] =useState(defaultValues);

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("clicked");
	};

	return (
		<SignupStyles>
			<div className="title">
				<h1>Create Account</h1>
			</div>
			<Container>
				<form onSubmit={handleSubmit}>
					<label className="label-wrapper">
						First Name
						<input type="text" name="firstName" onChange={handleChange} />
					</label>
					<label className="label-wrapper">
						Last Name
						<input type="text" name="lastName" onChange={handleChange} />
					</label>
					<label className="label-wrapper">
						E-Mail
						<input type="email" name="email" onChange={handleChange} />
					</label>
					<label className="label-wrapper">
						Password
						<input type="password" name="password" onChange={handleChange} />
					</label>
					<div className="checkbox">
						<input type="checkbox" name="checkbox" onChange={handleChange} />
						<label>
							I agree to <span>Terms & Conditions</span> and
							<span> Privacy Policy</span>
						</label>
					</div>
					<input type="submit" value="Create account"/>
					<Buttons>
						<p>
							Already have an account? <a href="/login">Sign in</a>
						</p>
						<p>Or</p>
						<button>continue with google</button>
						<button>continue with facebook</button>
					</Buttons>
				</form>
			</Container>
		</SignupStyles>
	);
};

export default Signup;
