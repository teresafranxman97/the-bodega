import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const FirebaseLogin = ({ email, password }) => {
	const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
            console.log(user)
        })
		.catch((error) => {
			console.log(error)
		});
};

// https://the-bodega-d712f.firebaseapp.com/__/auth/handler