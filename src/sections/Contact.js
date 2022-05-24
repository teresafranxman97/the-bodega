import React, { useState } from "react";
import ContactStyles from "../styles/sections/ContactStyles";

const defaultValues = {
	user_name: "",
	user_email: "",
	message: "",
};

const Contact = () => {
	const [values, setValues] = useState(defaultValues);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.value]: e.target.name
        })
    }

	return (
		<ContactStyles>
			<div className="title">
				<h1>Contact us</h1>
			</div>
			<form>
				<label>
					Name
					<input type="text" name="user_name" onChange={handleChange} />
				</label>
				<label>
					E-Mail
					<input type="email" name="user_email" onChange={handleChange} />
				</label>
				<label>
					Message
					<textarea name="message" onChange={handleChange} />
					<input
						type="submit"
						placeholder="Submit"
						name="submit"
						value="Send"
					/>
				</label>
			</form>
		</ContactStyles>
	);
};

export default Contact;
