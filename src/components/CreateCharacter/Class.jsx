import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Class = ({ classes }) => {
	const [selectedClass, setSelectedClass] = useState("Barbarian");
	const [selectedClassData, setSelectedClassData] = useState({});

	

	useEffect(() => {
		setSelectedClassData(classes.find((item) => item.name === selectedClass));
	}, [selectedClass]);

	return (
		<motion.section
			className="flex h-full w-full items-center justify-center gap-10"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="flex h-full w-1/2 flex-col gap-20">
				<h2 className="text-4xl text-primary">Class features</h2>
				<select
					className="select select-bordered bg-[#09080D] bg-opacity-70"
					onChange={(e) => setSelectedClass(e.target.value)}
				>
					{classes.map((item) => (
						<option key={item.name} value={item.name}>
							{item.name}
						</option>
					))}
				</select>
			</div>
			<aside className="flex h-full w-1/2 flex-col items-center overflow-y-scroll rounded-[15px] bg-[#09080D] bg-opacity-70 px-5 py-9 text-sm">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					key={selectedClass}
					className="h-[200px] w-full"
				>
					<p className="mb-2">{selectedClassData.description}</p>
					<p className="mb-1">Hit Dice: {selectedClassData.class_features?.hit_dice}</p>
					<p className="mb-1">Armor: {selectedClassData.class_features?.proficiencies.armor}</p>
					<p className="mb-1">Weapons: {selectedClassData.class_features?.proficiencies.weapons}</p>
					<p className="mb-1">Tools: {selectedClassData.class_features?.proficiencies.tools}</p>
				</motion.div>
			</aside>
		</motion.section>
	);
};
