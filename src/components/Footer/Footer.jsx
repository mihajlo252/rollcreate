import React from "react";
import { BsGithub } from "react-icons/bs";
import FooterStyles from "./FooterStyles.module.css";

export const Footer = () => {
	return (
		<footer
			className={`footer footer-center p-8 text-white-content ${FooterStyles.footer}`}
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
