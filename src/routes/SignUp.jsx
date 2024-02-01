import React, { useState } from "react";
import { Form } from "react-router-dom";
import { signUpNewUser } from "../utilities/signUpNewUser";
import { motion } from "framer-motion";

export const SignUp = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = async (event) => {
		event.preventDefault();
		if (email === "" || password === "" || username === "") return;
		await signUpNewUser(email, password, username);
	};

	return (
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Form
				method="post"
				className="flex flex-col gap-10"
				onSubmit={(e) => handleSignUp(e)}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
				<h2>Sign Up</h2>
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-2">
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							placeholder="john@doe.rs"
							name="email"
							id="email"
							autoComplete="on"
							className="w-44 text-neutral-content placeholder:text-gray-500"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							placeholder="johndoe"
							name="username"
							id="username"
							autoComplete="on"
							className="w-44 text-neutral-content placeholder:text-gray-500"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							placeholder="*********"
							name="password"
							id="password"
							className="w-44 text-neutral-content placeholder:text-gray-500"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</div>
				<button type="submit" className="btn btn-primary w-44">
					Sign Up
				</button>
			</Form>
		</motion.section>
	);
};
