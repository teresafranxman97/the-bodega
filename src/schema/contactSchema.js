import * as Yup from "yup";

const contactSchema = Yup.object({
	user_name: Yup.string()
		.min(2, "Name is too short")
		.required("*Name is required"),
	user_email: Yup.string().email("Invalid email").required("*Email is required"),
	message: Yup.string()
		.min(2, "Message is too short")
		.required("*Message is Required"),
});

export default contactSchema;
