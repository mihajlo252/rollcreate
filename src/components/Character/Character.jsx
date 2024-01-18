import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const Character = () => {
	const location = useLocation();

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			{location.state.name}
		</motion.div>
	);
};
