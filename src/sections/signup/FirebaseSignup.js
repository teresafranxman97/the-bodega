import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const FirebaseSignup = ({ email, password }) => {
	const auth = getAuth();

	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
		})
		.catch((error) => {
			console.log(error);
		});
};
