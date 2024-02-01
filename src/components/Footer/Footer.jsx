import React from "react";
import { BsGithub } from "react-icons/bs";

export const Footer = () => {
	return (
		<footer
			className={`text-white-content footer footer-center bg-[#0e0d14] bg-opacity-80 p-8 min-[600px]:backdrop-blur-sm`}
		>
			<div className="flex flex-col gap-3">
				<a href="https://github.com/mihajlo252" aria-label="Github Link">
					<BsGithub size={30} />
				</a>
				<div>
					<p className="font-bold">All rights reserved © Mihajlo Kostić 2023</p>
				</div>
			</div>
		</footer>
	);
};
