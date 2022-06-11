import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginSchema from "../../schema/loginSchema";
import { FirebaseLogin } from "./FirebaseLogin";
import { signInWithPopup } from "firebase/auth";
import { auth, google, facebook } from "../../firebaseConfig";
import googleSvg from "../../images/googlesvg.svg";
import facebookSvg from "../../images/facebooksvg.svg";

import {
	LoginStyles,
	Container,
	Buttons,
} from "../../styles/sections/LoginStyles";

const Login = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: loginSchema,
		onSubmit: (values) => {
			FirebaseLogin(values);
		},
	});

	const login = async (provider) => {
		const result = await signInWithPopup(auth, provider);
		setIsLoggedIn(true);
		console.log(result);
	};

	return (
		<LoginStyles>
			<div className="title">
				<h1>LOG IN</h1>
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
					{formik.touched.email && formik.errors.email ? (
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
					{formik.touched.password && formik.errors.password ? (
						<div style={{ color: "red", fontSize: "14px" }}>
							{formik.errors.password}
						</div>
					) : null}
					<div className="form-content">
						<div className="checkbox">
							<input type="checkbox" name="checkbox" />
							<label>Remember me</label>
						</div>
						<div className="link">
							<Link to="/">Forgot password?</Link>
						</div>
					</div>
					<input type="submit" value="Sign in" />
					<Buttons>
						<p>
							Don't have an account? <a href="signup">Sign up</a>
						</p>
						<p>
							<span>Or</span>
						</p>
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
		</LoginStyles>
	);
};

export default Login;
