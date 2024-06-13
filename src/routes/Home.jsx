import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { NavLink } from "react-router-dom"
;
import { useSelector } from "react-redux";
import { pageChange } from "../redux/page";




export const Home = () => {
	const {dispatch} = useOutletContext();
	const { userData } = useSelector((state) => state.userData);


	useEffect(() => {
		dispatch(pageChange("home"));
	}, [])

	return (
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-start justify-between pb-32 pt-0 max-[600px]:items-center">
			<div className="flex flex-col gap-10 max-[600px]:text-center">
				<h1 className="text-7xl text-primary max-[600px]:text-5xl">
					All you have to do is ROLL!
				</h1>
				<p className="text-2xl text-neutral max-[600px]:text-[1rem]">
					Choose from a plethora of customization options. Make your own campaigns and
					feature <br /> them for everyone to see!
				</p>
			</div>
			<NavLink
				to={userData ? "/create" : "/signin"}
				className="btn btn-primary font-semibold text-neutral-content hover:scale-[1.1] hover:bg-primary"
			>
				Get Started
			</NavLink>
		</motion.section>
	);
};
