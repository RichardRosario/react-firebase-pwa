import { useState, useEffect } from "react";
import "./App.css";
import SignUp from "./SignUp";
import logo from "./img/logo.png";
import { db } from "./firebase-config";
import { collection, getDocs } from "@firebase/firestore";

function App() {
	const [supporters, setSupporters] = useState([]);

	const usersRef = collection(db, "users");
	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(usersRef);
			const userNumber = data.docs.length;
			setSupporters(userNumber);
			console.log(userNumber);
		};
		getUsers();
	}, [usersRef]);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} alt='saraAll' className='saraAll-logo' />
				<h1>SaraALL</h1>
				<p className='signups'>
					Number of signups: <span>{supporters}</span>
				</p>
				<SignUp usersRef={usersRef} />
			</header>
		</div>
	);
}

export default App;
