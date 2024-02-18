import React, { useEffect, useState } from "react";
import { getDndData } from "../utilities/getDndData";
import { motion } from "framer-motion";
import { pageChange } from "../redux/page";
import { NavLink, useOutletContext } from "react-router-dom";
import { AnimatedCard } from "../components/AnimatedCard/AnimatedCard";

export const Create = () => {
	const { dispatch } = useOutletContext();

	const [classes, setClasses] = useState([]);

	const handleGetClasses = async () => {
		const type_of_file = "Classes";
		const res = await getDndData(type_of_file);
		setClasses(res);
	};

	useEffect(() => {
		handleGetClasses();
		dispatch(pageChange("create"));
	}, []);

	return (
		<motion.section
			className="flex w-full items-center justify-around gap-10"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<NavLink to="./character">
				<AnimatedCard
					text="Create a character"
					bg="assets/images/background-soldier-portrait-sm.png"
				/>
			</NavLink>
			<NavLink to="./campaign">
				<AnimatedCard
					text="Create a campaign"
					bg="assets/images/background-soldier-portrait-sm.png"
				/>
			</NavLink>
		</motion.section>
	);
};
