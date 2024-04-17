import React, { useEffect, useState } from "react";
import { getDndData } from "../utilities/getDndData";
import { motion } from "framer-motion";
import { pageChange } from "../redux/page";
import { useNavigate, useOutletContext } from "react-router-dom";
import { AnimatedCard } from "../components/AnimatedCard/AnimatedCard";

export const Create = () => {
	const { dispatch } = useOutletContext();

	const navigate = useNavigate()


	useEffect(() => {
		dispatch(pageChange("create"));
	}, []);

	return (
		<motion.section
			className="flex w-full items-center justify-around gap-10"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<button onClick={() => navigate("./character")}>
				<AnimatedCard
					text="Create a character"
					bg="assets/images/background-soldier-portrait-sm.png"
				/>
			</button>
			<button onClick={() => navigate("./campaign")}>
				<AnimatedCard
					text="Create a campaign"
					bg="assets/images/background-soldier-portrait-sm.png"
				/>
			</button>
		</motion.section>
	);
};
