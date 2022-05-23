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
					<label>First Name</label>
					<input type="text" name="firstName" />
					<label>Last Name</label>
					<input type="text" name="lastName" />
					<label>E-Mail</label>
					<input type="email" name="email" />
					<label>Password</label>
					<input type="password" name="password" />
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
