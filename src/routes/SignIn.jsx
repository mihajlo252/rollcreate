import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { signInUser } from "../utilities/SignInUser";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";

export const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSignIn = async (event) => {
		event.preventDefault();
		if (email === "" || password === "") return;
		const data = await signInUser(email, password);
		dispatch(login(data));
		navigate("/");
	};

	return (
		<Form
			method="post"
			className="flex flex-col gap-10"
			id="signin_form"
			name="signin_form"
			onSubmit={(e) => handleSignIn(e)}
		>
			<h2>Sign In</h2>
			<div className="flex flex-col gap-5">
				<div className="flex flex-col gap-2">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						placeholder="john@doe.rs"
						name="email"
						id="email"
						autoComplete="on"
						className="w-44 placeholder:text-gray-500 text-neutral-content"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						placeholder="*********"
						name="password"
						id="password"
						className="w-44 placeholder:text-gray-500 text-neutral-content"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
			</div>
			<button type="submit" className="btn btn-primary w-44">
				Sign In
			</button>
		</Form>
	);
};
