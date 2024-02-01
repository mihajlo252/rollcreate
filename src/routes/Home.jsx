import React from "react";
import { Header } from "../components/Home.jsx/Header";
import { motion } from "framer-motion";

export const Home = () => {
	return (
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-start justify-between pb-32 pt-0 max-[600px]:items-center">
			<Header />
		</motion.section>
	);
};
