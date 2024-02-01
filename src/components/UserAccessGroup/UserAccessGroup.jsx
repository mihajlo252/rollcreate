import React from "react";
import { NavLink } from "react-router-dom";
import UAGStyles from "./UserAccessGroupStyles.module.css";
import { SignOutButton } from "../SignOutButton/SignOutButton";

export const UserAccessGroup = ({ isSignedIn }) => {
	return (
		<>
			{isSignedIn ? (
				<div>
					<SignOutButton />
				</div>
			) : (
				<ul className="flex gap-5">
					<li>
						<NavLink
							to="/signin"
							className={`btn btn-outline border-secondary bg-secondary text-neutral hover:border-primary hover:bg-primary hover:text-neutral-content`}
						>
							Sign In
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/signup"
							className={`btn btn-outline bg-neutral text-neutral-content`}
						>
							Sign Up
						</NavLink>
					</li>
				</ul>
			)}
		</>
	);
};
