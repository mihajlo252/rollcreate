import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProfileStyles from "./ProfileStyles.module.css";
import { logout } from "../../redux/user";
import { useDispatch, useSelector } from "react-redux";

export const Profile = () => {
	const { userData } = useSelector((state) => state.userData);
	const [isSignedIn, setIsSignedIn] = useState(false);


	const dispatch = useDispatch();

	const handleSignOut = () => {
		dispatch(logout());
		localStorage.removeItem("sb-ginityejycllnrdlmmue-auth-token");
	};

	useEffect(() => {
		if (localStorage.getItem("sb-ginityejycllnrdlmmue-auth-token")) {
			setIsSignedIn(true);
		} else {
			setIsSignedIn(false);
		}
	}, [userData]);

	return (
		<div>
			{isSignedIn ? (
				<div className="flex gap-5">
					<p>{userData?.user.user_metadata.username}</p>
					<button onClick={handleSignOut}>Sign Out</button>
				</div>
			) : (
				<ul className="flex gap-5 text-primary">
					<li>
						<NavLink to="signin" className={ProfileStyles.nav_link}>
							Sign In
						</NavLink>
					</li>
					<li>
						<NavLink to="/signup" className={ProfileStyles.nav_link}>
							Sign Up
						</NavLink>
					</li>
				</ul>
			)}
		</div>
	);
};
