import React, { useEffect, useState } from "react";
import { getDndData } from "../utilities/getDndData";
import { motion } from "framer-motion";
import { pageChange } from "../redux/page";
import { useOutletContext } from "react-router-dom";

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
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			{classes.map((c) => (
				<button className="btn btn-ghost" key={c.name}>
					<p>{c.name}</p>
				</button>
			))}
		</motion.section>
	);
};
