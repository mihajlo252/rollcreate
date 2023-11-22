import React from "react";
import { BsGithub } from "react-icons/bs";
import FooterStyles from "./FooterStyles.module.css";

export const Footer = () => {
	return (
		<section className="footer">
			<footer
				className={`footer footer-center p-8 text-white-content ${FooterStyles.footer}`}
			>
				<div>
					<div className="grid grid-flow-col gap-4">
						<a href="https://github.com/mihajlo252/rollcreate" aria-label="Github Link">
							<BsGithub size={30} />
						</a>
					</div>
				</div>
				<div>
					<p className="font-bold">All rights reserved © Mihajlo Kostić 2023</p>
				</div>
			</footer>
		</section>
	);
};
