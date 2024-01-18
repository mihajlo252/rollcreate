import React from "react";
import { Header } from "../components/Home.jsx/Header";
import { motion } from "framer-motion";

export const Home = () => {
	return (
		<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Header />
		</motion.main>
	);
};
