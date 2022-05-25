import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { ContactStyles, Wrapper } from "../styles/sections/ContactStyles";
import Footer from "../components/Footer";

const defaultValues = {
	user_name: "",
	user_email: "",
	message: "",
};

const Contact = () => {
	const [values] = useState(defaultValues);
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_1gaftse",
				"contact_form",
				form.current,
				"user_08idYLJZO7AtHuPUQ55EA"
			)
			.then((result) => {
				alert("Your message was sent successfully");
			})
			.catch((error) => {
				console.log(error.text);
			});
	};

	return (
		<ContactStyles>
			<Wrapper>
				<div className="title">
					<h1>CONTACT US</h1>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<label>
						Name
						<input type="text" name="user_name" />
					</label>
					<label>
						E-Mail
						<input type="email" name="user_email" />
					</label>
					<label>
						Message
						<textarea name="message" />
						<input
							type="submit"
							placeholder="Submit"
							name="submit"
							value="Send"
						/>
					</label>
				</form>
			</Wrapper>
			<Footer />
		</ContactStyles>
	);
};

export default Contact;
