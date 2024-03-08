import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Header = () => {

	const { userData } = useSelector((state) => state.userData);


	return (
		<>
			<div className="flex flex-col gap-10 max-[600px]:text-center">
				<h1 className="text-7xl text-primary max-[600px]:text-5xl">
					All you have to do is ROLL!
				</h1>
				<p className="text-2xl text-neutral max-[600px]:text-[1rem]">
					Choose from a plethora of customization options. Make your own campaigns and
					feature <br /> them for everyone to see!
				</p>
			</div>
			<NavLink
				to={userData ? "/create" : "/signin"}
				className="btn btn-primary font-semibold text-neutral-content hover:scale-[1.1] hover:bg-primary"
			>
				Get Started
			</NavLink>
		</>
	);
};
