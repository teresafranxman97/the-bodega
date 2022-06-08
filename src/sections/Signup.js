import React from "react";
import {
	SignupStyles,
	Container,
	Buttons,
} from "../styles/sections/SignupStyles";
import { useFormik } from "formik";
import signupSchema from "../schema/signupSchema";

const Signup = () => {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
		validationSchema: signupSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<SignupStyles>
			<div className="title">
				<h1>CREATE ACCOUNT</h1>
			</div>
			<Container>
				<form onSubmit={formik.handleSubmit}>
					<label className="label-wrapper">
						First Name
						<input
							type="text"
							name="firstName"
							onChange={formik.handleChange}
							value={formik.values.firstName}
						/>
					</label>
					{formik.errors && formik.errors.firstName ? (
						<div style={{ color: "red", fontSize: "14px" }}>
							{formik.errors.firstName}
						</div>
					) : null}
					<label className="label-wrapper">
						Last Name
						<input
							type="text"
							name="lastName"
							onChange={formik.handleChange}
							value={formik.values.lastName}
						/>
					</label>
					{formik.errors && formik.errors.lastName ? (
						<div style={{ color: "red", fontSize: "14px" }}>
							{formik.errors.lastName}
						</div>
					) : null}
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
						<label>
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
						<button>continue with google</button>
						<button>continue with facebook</button>
					</Buttons>
				</form>
			</Container>
		</SignupStyles>
	);
};

export default Signup;
