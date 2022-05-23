import {
	SignupStyles,
	Container,
	Buttons,
} from "../styles/sections/SignupStyles";

const Signup = () => {
	return (
		<SignupStyles>
			<div className="title">
				<h1>Create Account</h1>
			</div>
			<Container>
				<form>
					<label className="label-wrapper">
						First Name
						<input type="text" name="firstName" />
					</label>
					<label className="label-wrapper">
						Last Name
						<input type="text" name="lastName" />
					</label>
					<label className="label-wrapper">
						E-Mail
						<input type="email" name="email" />
					</label>
					<label className="label-wrapper">
						Password
						<input type="password" name="password" />
					</label>
					<div className="checkbox">
						<input type="checkbox" name="checkbox" />
						<label>
							I agree to <span>Terms & Conditions</span> and
							<span> Privacy Policy</span>
						</label>
					</div>
					<input type="button" value="Create account" name="button" />
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
