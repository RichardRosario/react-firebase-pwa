import React, { useState } from "react";
import { Form, Button, FormLabel, FormGroup } from "react-bootstrap";
import { addDoc } from "firebase/firestore";

const SignUp = ({ usersRef }) => {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [precint, setPrecint] = useState("");
	const [contact, setContact] = useState("");
	const [message, setMessage] = useState("");

	const submitHandler = e => {
		e.preventDefault();
		const createUser = async () => {
			await addDoc(usersRef, { name, address, precint, contact });
		};
		createUser();
		setMessage("Thank you! You have successfully signed up!");
		setAddress("");
		setName("");
		setContact("");
		setPrecint("");
	};

	return (
		<div className='form-container'>
			{message && message}
			<Form onSubmit={submitHandler}>
				<FormGroup controlId='Name'>
					<FormLabel>Name: </FormLabel>
					<Form.Control
						type='text'
						required
						value={name}
						placeholder='Enter Name'
						onChange={e => setName(e.target.value)}
					/>
				</FormGroup>
				<FormGroup controlId='Address'>
					<FormLabel>Address: </FormLabel>
					<Form.Control
						type='address'
						required
						value={address}
						placeholder='Enter Address'
						onChange={e => setAddress(e.target.value)}
					/>
				</FormGroup>
				<FormGroup controlId='Precint'>
					<FormLabel>Precint No. </FormLabel>
					<Form.Control
						type='number'
						required
						value={precint}
						placeholder='000000'
						onChange={e => setPrecint(e.target.value)}
					/>
				</FormGroup>
				<FormGroup controlId='contact'>
					<FormLabel>Contact #: </FormLabel>
					<Form.Control
						type='number'
						required
						value={contact}
						placeholder='0xxx xxx xxxx'
						onChange={e => setContact(e.target.value)}
					/>
				</FormGroup>
				<Button type='submit' variant='primary'>
					Sign me Up!
				</Button>
			</Form>
		</div>
	);
};
export default SignUp;
