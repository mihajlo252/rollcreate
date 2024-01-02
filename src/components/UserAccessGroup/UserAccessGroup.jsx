import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UAGStyles from "./UserAccessGroupStyles.module.css";
import { logout } from "../../redux/user";
import { useDispatch, useSelector } from "react-redux";

export const UserAccessGroup = () => {
	const { userData } = useSelector((state) => state.userData);
	const [isSignedIn, setIsSignedIn] = useState(false);

	const navigate = useNavigate()

	const dispatch = useDispatch();

	const handleSignOut = () => {
		dispatch(logout());
		localStorage.removeItem("sb-ginityejycllnrdlmmue-auth-token");
		navigate("/")
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
					<NavLink to="/profile" className="btn btn-ghost">{userData?.user?.user_metadata.username}</NavLink>
					<button className="btn bg-neutral text-neutral-content btn-outline" onClick={handleSignOut}>Sign Out</button>
				</div>
			) : (
				<ul className="flex gap-5">
					<li>
						<NavLink to="/signin" className={`btn bg-primary text-neutral-content btn-outline ${UAGStyles.nav_link}`}>
							Sign In
						</NavLink>
					</li>
					<li>
						<NavLink to="/signup" className={`btn bg-neutral text-neutral-content btn-outline ${UAGStyles.nav_link}`}>
							Sign Up
						</NavLink>
					</li>
				</ul>
			)}
		</div>
	);
};
