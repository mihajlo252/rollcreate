import React from "react";
import { Logo } from "../Logo";
import { NavLink } from "react-router-dom";
import NavigationStyles from "./NavigationStyles.module.css";
import { UserAccessGroup } from "../UserAccessGroup/UserAccessGroup";


export const Navigation = () => {
	return (
		<header className="flex flex-row justify-between items-center text-center px-20 py-5 max-[600px]:px-5">
			<Logo />
			<nav className="place-self-end">
				<ul className={`flex text-[1.2rem] text-primary ${NavigationStyles.nav_list}`}>
					<li>
						<NavLink to="/" className={NavigationStyles.nav_link}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/create" className={NavigationStyles.nav_link}>
							Create
						</NavLink>
					</li>
					<li>
						<NavLink to="/campaigns" className={NavigationStyles.nav_link}>
							Campaigns
						</NavLink>
					</li>
				</ul>
			</nav>
			<UserAccessGroup />

		</header>
	);
};
