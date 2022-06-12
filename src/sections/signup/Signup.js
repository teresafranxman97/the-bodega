import React, { useState } from "react";
import { useFormik } from "formik";
import signupSchema from "../../schema/signupSchema";
import { FirebaseSignup } from "./FirebaseSignup";
import { signInWithPopup } from "firebase/auth";
import { auth, google, facebook } from "../../firebaseConfig";

import {
	SignupStyles,
	Container,
	Buttons,
} from "../../styles/sections/SignupStyles";
import googleSvg from "../../images/googlesvg.svg";
import facebookSvg from "../../images/facebooksvg.svg";

const Signup = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: signupSchema,
		onSubmit: (values) => {
			FirebaseSignup(values);
		},
	});

	const login = async (provider) => {
		const result = await signInWithPopup(auth, provider);
		setIsLoggedIn(true);
		console.log(result);
	};

	return (
		<SignupStyles>
			<div className="title">
				<h1>CREATE ACCOUNT</h1>
			</div>
			<Container>
				<form onSubmit={formik.handleSubmit}>
					<label className="label-wrapper">
						E-Mail
						<input
							type="email"
							name="email"
							onChange={formik.handleChange}
							value={formik.values.email}
						/>
					</label>
					{formik.errors && formik.errors.email ? (
						<div style={{ color: "red", fontSize: "14px" }}>
							{formik.errors.email}
						</div>
					) : null}
					<label className="label-wrapper">
						Password
						<input
							type="password"
							name="password"
							onChange={formik.handleChange}
							value={formik.values.password}
						/>
					</label>
					{formik.errors && formik.errors.password ? (
						<div style={{ color: "red", fontSize: "14px" }}>
							{formik.errors.password}
						</div>
					) : null}
					<div className="checkbox">
						<input type="checkbox" name="checkbox" />
						<label className="checkbox-label" >
							I agree to <span>Terms & Conditions</span> and
							<span> Privacy Policy</span>
						</label>
					</div>
					<input type="submit" value="Create account" />
					<Buttons>
						<p>
							Already have an account? <a href="/login">Sign in</a>
						</p>
						<p>Or</p>
						<button onClick={() => login(google)}>
							<img src={googleSvg} alt="google logo" />
							Continue with Google
						</button>
						<button onClick={() => login(facebook)}>
							<img src={facebookSvg} alt="facebook logo" />
							Continue with Facebook
						</button>
					</Buttons>
				</form>
			</Container>
		</SignupStyles>
	);
};

export default Signup;
