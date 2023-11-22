import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
	return (
		<main className="">
			<header className="flex flex-col min-h-[60vh] items-start gap-5 justify-between pt-0 max-[600px]:items-center">
				<div className="flex flex-col gap-10 max-[600px]:text-center">
					<h1 className=" text-7xl text-primary max-[600px]:text-5xl">
						All you have to do is ROLL!
					</h1>
					<p className="text-2xl text-neutral max-[600px]:text-[1rem]">
						Choose from a plethora of customization options. Make your own campaigns and
						feature <br /> them for everyone to see!
					</p>
				</div>
				<NavLink to="/create" className="btn btn-primary hover:bg-primary hover:scale-[1.1] text-neutral-content font-semibold">
					Get Started
				</NavLink>
			</header>
		</main>
	);
};
