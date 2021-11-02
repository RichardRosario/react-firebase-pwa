import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	// apiKey: process.env.apiKey,
	// authDomain: process.env.authDomain,
	// projectId: process.env.projectId,
	// storageBucket: process.env.storageBucket,
	// messagingSenderId: process.env.messagingSenderId,
	// appId: process.env.appId,
	// measurementId: process.env.measurementId

	apiKey: "AIzaSyCvGxxPIc5esJ53_3y6i0UpBf0V8bTidvc",
	authDomain: "saraall-c9222.firebaseapp.com",
	projectId: "saraall-c9222",
	storageBucket: "saraall-c9222.appspot.com",
	messagingSenderId: "461732003567",
	appId: "1:461732003567:web:a2fe1de5ca7af6aea0e51a",
	measurementId: "G-WXYPM6SY1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
