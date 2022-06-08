// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBU8eMhcpOORnFfHcNWno8w4SBv3dgWGp0",
	authDomain: "the-bodega-d712f.firebaseapp.com",
	projectId: "the-bodega-d712f",
	storageBucket: "the-bodega-d712f.appspot.com",
	messagingSenderId: "361940472240",
	appId: "1:361940472240:web:bd105bc11175aed82cc675",
	measurementId: "G-SR2HKG5R5Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
