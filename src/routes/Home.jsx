import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
	return (
		<main>
			<header className="flex flex-col min-h-[60vh] items-start gap-5 justify-between pt-0">
				<div className="flex flex-col gap-10">
					<h1 className="text-7xl text-primary">
						All you have to do is ROLL!
					</h1>
					<p className="text-2xl text-neutral">
						Choose from a plethora of customization options. Make your own campaigns and
						feature <br /> them for everyone to see!
					</p>
				</div>
				<NavLink to="/characters" className="btn btn-primary text-neutral-content font-medium">
					Get Started
				</NavLink>
			</header>
		</main>
	);
};
