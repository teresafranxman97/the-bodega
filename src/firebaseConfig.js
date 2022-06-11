import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBU8eMhcpOORnFfHcNWno8w4SBv3dgWGp0",
	authDomain: "the-bodega-d712f.firebaseapp.com",
	projectId: "the-bodega-d712f",
	storageBucket: "the-bodega-d712f.appspot.com",
	messagingSenderId: "361940472240",
	appId: "1:361940472240:web:bd105bc11175aed82cc675",
	measurementId: "G-SR2HKG5R5Q",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
