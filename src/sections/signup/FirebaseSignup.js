import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export const FirebaseSignup = ({ email, password }) => {
	const auth = getAuth();

	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
		})
		.catch((error) => {
            toast.error("Email is already in use", {
                position: "bottom-center"
            })
			console.log(error);
		});
};
