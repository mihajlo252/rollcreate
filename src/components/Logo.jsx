import React from "react";
import { NavLink } from "react-router-dom";

export const Logo = () => {
	return (
		<div className="left-20 top-10">
			<NavLink to="/">
				<img
					className="w-24"
					src="assets/images/ai-image-logo-rollcreate.png"
					alt="Rollcreate logo"
				/>
			</NavLink>
		</div>
	);
};
