import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { signInUser } from "../utilities/signInUser";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";
import { motion } from "framer-motion";

export const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [badLogin, setBadLogin] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSignIn = async (event) => {
		event.preventDefault();
		if (email === "" || password === "") return;
		const { data, error } = await signInUser(email, password);
		if (error) {
			setBadLogin(true);
			return;
		}
		dispatch(login(data));
		navigate("/profile");
		setBadLogin(false);
	};

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Form
				method="post"
				className="flex flex-col gap-10"
				id="signin_form"
				name="signin_form"
				onSubmit={(e) => handleSignIn(e)}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
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
							className="w-44 placeholder:text-gray-500 text-neutral-content"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							autoFocus
							aria-label="email"
							aria-required="true"
							title="Must be a valid email address"
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
							required
							minLength="8"
							maxLength="20"
							title="Must contain at least one lowercase letter"
							aria-label="password"
							aria-required="true"
						/>
					</div>
					{badLogin ? <p className="text-red-500">Invalid email or password</p> : null}
				</div>
				<button type="submit" className="btn btn-primary w-44">
					Sign In
				</button>
			</Form>
		</motion.div>
	);
};
