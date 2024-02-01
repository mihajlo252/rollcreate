import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BurgerClose } from "react-burger-icons";
import MAPGStyles from "./MenuAndProfileGroupStyles.module.css";

export const MenuAndProfileGroup = ({ isOpen, setIsOpen, isSignedIn }) => {
	return (
		<div className="flex items-center gap-3">
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
			<button
				className="btn btn-ghost p-0 min-[600px]:hidden"
				onClick={() => setIsOpen(!isOpen)}
			>
				<BurgerClose size={35} isClosed={isOpen} />
			</button>
		</div>
	);
};
