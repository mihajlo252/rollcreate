import React from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import { pageChange } from "../../redux/page";

export const Character = () => {

	const {dispatch} = useOutletContext();

	const location = useLocation();
	
	useEffect(() => {
		dispatch(pageChange("character"));
	}, [])
	
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			{location.state.name}
		</motion.div>
	);
};
