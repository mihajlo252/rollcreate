import React from "react";
import { NavLink } from "react-router-dom";
import { CgMenu, CgProfile } from "react-icons/cg";
import MAPGStyles from "./MenuAndProfileGroupStyles.module.css";

export const MenuAndProfileGroup = ({ isOpen, setIsOpen, isSignedIn }) => {
	return (
		<div className="flex">
			{isSignedIn ? (
				<NavLink
					to="/profile"
					className={`btn btn-circle text-neutral bg-transparent border-transparent hover:border-transparent hover:bg-transparent ${MAPGStyles.profile}`}
				>
					<CgProfile size={35} />
				</NavLink>
			) : (
				<></>
			)}
			<div className="min-[600px]:hidden">
				<button onClick={() => setIsOpen(!isOpen)}><CgMenu size={35} /></button>
			</div>
		</div>
	);
};
