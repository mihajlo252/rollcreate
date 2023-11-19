import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
	return (
		<main>
			<header className="flex flex-col items-start gap-5 ">
				<h1 className="text-7xl text-primary indent-[-.5rem]">All you have to do is ROLL!</h1>
				<p className="text-2xl text-neutral">Choose from a plethora of customization options. Make your own campaigns and feature <br /> them for everyone to see!</p>
				<NavLink to="/characters" className="btn btn-primary mt-44">Get Started</NavLink>
			</header>
		</main>
	);
};
