import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactSchema from "../schema/contactSchema";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { ContactStyles, Wrapper } from "../styles/sections/ContactStyles";
import Footer from "../components/Footer";

const Contact = () => {
	const form = useRef();
	const formik = useFormik({
		initialValues: {
			user_name: "",
			user_email: "",
			message: "",
		},
		validationSchema: contactSchema,
		onSubmit: (values) => {
			console.log(values);
			emailjs
				.sendForm(
					"service_1gaftse",
					"contact_form",
					form.current,
					"user_08idYLJZO7AtHuPUQ55EA"
				)
				.then((result) => {
					toast.success("Your message was sent successfully", {
						position: "bottom-center"
					})
					formik.resetForm();
				})
				.catch((error) => {
					console.log(error.text);
				});
		},
	});

	return (
		<ContactStyles>
			<Wrapper>
				<div className="title">
					<h1>CONTACT US</h1>
				</div>
				<form ref={form} onSubmit={formik.handleSubmit}>
					<label>
						Name
						<input
							type="text"
							name="user_name"
							onChange={formik.handleChange}
							value={formik.values.user_name}
						/>
					</label>
					{formik.touched.user_name && formik.errors.user_name ? (
						<div style={{ color: "red", fontSize: "14px" }}>
							{formik.errors.user_name}
						</div>
					) : null}
					<label>
						E-Mail
						<input
							type="email"
							name="user_email"
							onChange={formik.handleChange}
							value={formik.values.user_email}
						/>
					</label>
					{formik.touched.user_email && formik.errors.user_email ? (
						<div style={{ color: "red", fontSize: "14px" }}>
							{formik.errors.user_email}
						</div>
					) : null}
					<label>
						Message
						<textarea
							name="message"
							onChange={formik.handleChange}
							value={formik.values.message}
						/>
					</label>
					{formik.touched.message && formik.errors.message ? (
						<div style={{ color: "red", fontSize: "14px" }}>
							{formik.errors.message}
						</div>
					) : null}
					<input
						type="submit"
						placeholder="Submit"
						name="submit"
						value="Send"
					/>
				</form>
			</Wrapper>
			<Footer />
		</ContactStyles>
	);
};

export default Contact;
