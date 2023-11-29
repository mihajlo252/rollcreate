import React, { useState } from "react";
import { Form } from "react-router-dom";
import { signUpNewUser } from "../utilities/SignUpNewUser";

export const Register = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleRegister = async (event) => {
		event.preventDefault();
		if(email === "" || password === "" || username === "") return;
		await signUpNewUser(email, password, username);
	}

	return (
		<Form method="post" className="flex flex-col gap-10" onSubmit={(e) => handleRegister(e)}>
			<h2>Register</h2>
			<div className="flex flex-col gap-5">
				<div className="flex flex-col gap-2">
					<label htmlFor="email">Email:</label>
					<input type="email" placeholder="john@doe.rs" name="email" id="email" className="w-44 placeholder:text-gray-500 text-neutral-content" value={email} onChange={(e) => setEmail(e.target.value)}/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="username">Username:</label>
					<input type="text" placeholder="johndoe" name="username" id="username" className="w-44 placeholder:text-gray-500 text-neutral-content" value={username} onChange={(e) => setUsername(e.target.value)}/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="password">Password:</label>
					<input type="password" placeholder="*********" name="password" id="password" className="w-44 placeholder:text-gray-500 text-neutral-content" value={password} onChange={(e) => setPassword(e.target.value)}/>
				</div>
			</div>
			<button type="submit" className="btn btn-primary w-44">Register</button>
		</Form>
	);
};
