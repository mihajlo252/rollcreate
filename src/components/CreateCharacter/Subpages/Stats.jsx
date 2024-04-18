import React, { useState } from "react";
import { motion } from "framer-motion";

export const Stats = () => {
	const [stats, setStats] = useState([
		{ stat: "cha", value: 0 },
		{ stat: "con", value: 0 },
		{ stat: "dex", value: 0 },
		{ stat: "int", value: 0 },
		{ stat: "str", value: 0 },
		{ stat: "wis", value: 0 },
	]);



	const rollDie = (stat) => {
		setStats(stats.map((s) => (s.stat === stat.stat ? { ...s, value: Math.floor(Math.random() * 20) } : s)));
	};
	const rollAll = () => {
		setStats(stats.map((s) => ({ ...s, value: Math.floor(Math.random() * 20) })));
	};

	return (
		<motion.section
			className="grid h-full w-full items-center justify-around"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="flex gap-2">
				{stats.map((stat) => (
					<div key={stat.stat} className="grid">
						<label>{stat.stat}</label>
						<input value={stat.value} className="text-neutral-content" readOnly></input>
						<button className="btn btn-ghost mt-2" onClick={() => rollDie(stat)}>
							ROLL
						</button>
					</div>
				))}
			</div>
			<button className="btn btn-ghost mt-2" onClick={() => rollAll()}>
				ROLL ALL
			</button>
		</motion.section>
	);
};
