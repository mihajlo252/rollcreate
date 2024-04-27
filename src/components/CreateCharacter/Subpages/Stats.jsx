import React from "react";
import { motion } from "framer-motion";

export const Stats = ({metaData, setMetaData}) => {
	


	const rollDie = (stat) => {
		// setStats(stats.map((s) => (s.stat === stat.stat ? { ...s, value: Math.floor(Math.random() * 20).toString() } : s)));
		setMetaData((prev) => ({ ...prev, stats: prev.stats.map((s) => (s.name === stat.name ? { ...s, value: Math.floor(Math.random() * 20).toString() } : s)) }));
	};
	// const rollAll = () => {
	// 	setStats(stats.map((s) => ({ ...s, value: Math.floor(Math.random() * 20).toString() })));
	// };



	// useEffect(() => {
	// 	setMetaData((prev) => ({ ...prev, stats: [...stats] }));
	// }, [stats])

	return (
		<motion.section
			className="grid h-full w-full items-center justify-around"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="flex gap-2">
				{metaData.stats.map((stat) => (
					<div key={stat.name} className="grid">
						<label>{stat.name}</label>
						<input value={stat.value} className="text-neutral-content" readOnly></input>
						<button className="btn btn-ghost mt-2" onClick={() => rollDie(stat)}>
							ROLL
						</button>
					</div>
				))}
			</div>
			{/* <button className="btn btn-ghost mt-2" onClick={() => rollAll()}>
				ROLL ALL
			</button> */}
		</motion.section>
	);
};
