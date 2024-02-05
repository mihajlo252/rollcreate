import React, { useEffect, useState } from "react";
import { Form, NavLink, useOutletContext } from "react-router-dom";
import { signUpNewUser } from "../utilities/signUpNewUser";
import { motion } from "framer-motion";
import { pageChange } from "../redux/page";

export const SignUp = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { dispatch } = useOutletContext();

	const handleSignUp = async (event) => {
		event.preventDefault();
		if (email === "" || password === "" || username === "") return;
		await signUpNewUser(email, password, username);
	};

	useEffect(() => {
		dispatch(pageChange("signup"));
	}, []);

	return (
		<motion.section
			className="flex w-full items-center gap-10 pb-32 pt-0"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<div className="card w-full max-w-sm shrink-0 bg-[#0e0d14] bg-opacity-70 shadow-2xl">
				<Form
					method="post"
					className="card-body gap-10"
					onSubmit={(e) => handleSignUp(e)}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					<h1 className="self-center text-5xl font-bold text-primary">Sign Up</h1>
					<div className="flex flex-col gap-5">
						<div className="form-control gap-1">
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								placeholder="john@doe.rs"
								name="email"
								id="email"
								autoComplete="on"
								className="input input-bordered placeholder:text-gray-500"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								autoFocus
								aria-label="email"
								aria-required="true"
								title="Must be a valid email address"
							/>
						</div>
						<div className="form-control gap-1">
							<label htmlFor="username">Username:</label>
							<input
								type="text"
								placeholder="johndoe"
								name="username"
								id="username"
								autoComplete="on"
								className="input input-bordered placeholder:text-gray-500"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</div>
						<div className="form-control gap-1">
							<label htmlFor="password">Password:</label>
							<input
								type="password"
								placeholder="*********"
								name="password"
								id="password"
								className="input input-bordered placeholder:text-gray-500"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								minLength="8"
								maxLength="20"
								title="Must contain at least one lowercase letter"
								aria-label="password"
								aria-required="true"
							/>
						</div>
					</div>
					<p>
						Already have an account? <NavLink className="link-hover link-secondary link" to="/signin">Sign In</NavLink>
					</p>
					<button type="submit" className="btn btn-primary">
						Sign Up
					</button>
				</Form>
			</div>
		</motion.section>
	);
};
