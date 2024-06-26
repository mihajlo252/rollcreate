import React from "react";
import { motion } from "framer-motion";

export const Race = () => {
	return (
		<motion.section
			className="flex h-full w-full items-center justify-around"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			Race
		</motion.section>
	);
};
