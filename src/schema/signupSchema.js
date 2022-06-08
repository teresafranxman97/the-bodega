import * as Yup from 'yup';

const signupSchema = Yup.object({
	firstName: Yup.string()
		.min(2, "*First name is too short")
		.required("*First name is required"),
	lastName: Yup.string()
		.min(2, "*Last name is too short")
		.required("*Last name is required"),
	email: Yup.string().email("*Invalid email").required("*Email is required"),
    password: Yup.string()
        .min(7, "*Password is too short")
        .required("*Password is required")
});

export default signupSchema;