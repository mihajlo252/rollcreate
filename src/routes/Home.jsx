import React, { useEffect } from "react";
import { Header } from "../components/Home.jsx/Header";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { pageChange } from "../redux/page";

export const Home = () => {
	const {dispatch} = useOutletContext();

	useEffect(() => {
		dispatch(pageChange("home"));
	}, [])

	return (
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-start justify-between pb-32 pt-0 max-[600px]:items-center">
			<Header />
		</motion.section>
	);
};
