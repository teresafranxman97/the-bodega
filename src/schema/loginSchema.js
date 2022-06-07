import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Email required"),
	password: Yup.string()
		.min(2, "Password is too short")
		.required("Password is required"),
});

export default LoginSchema;
