import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { Logo } from "../Logo";
import { UserAccessGroup } from "../UserAccessGroup/UserAccessGroup";
import { MenuAndProfileGroup } from "../MenuAndProfileGroup/MenuAndProfileGroup";

import NavigationStyles from "./NavigationStyles.module.css";

export const Navigation = () => {
	const { userData } = useSelector((state) => state.userData);
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("sb-ginityejycllnrdlmmue-auth-token")) {
			setIsSignedIn(true);
		} else {
			setIsSignedIn(false);
		}
	}, [userData]);

	return (
		<header className="relative z-10 flex flex-row items-center justify-between bg-[#0e0d14] bg-opacity-50 px-20 py-7 text-center max-[600px]:px-5 max-[600px]:py-5">
			<Logo />
			<nav className={`${NavigationStyles.nav}`} data-isopen={isOpen}>
				<div className="min-[600px]:hidden">
					<UserAccessGroup isSignedIn={isSignedIn} />
				</div>
				<ul
					className={`flex text-[1.2rem] text-primary min-[600px]:ml-20 ${NavigationStyles.nav_list}`}
				>
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
			<div className="flex gap-5">
				<MenuAndProfileGroup
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					isSignedIn={isSignedIn}
				/>
				<div className={`max-[600px]:hidden ${NavigationStyles.user_access}`}>
					<UserAccessGroup isSignedIn={isSignedIn} />
				</div>
			</div>
		</header>
	);
};
