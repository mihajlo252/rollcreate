import React, { useEffect } from "react";
import { NavLink, useLocation, useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import { pageChange } from "../../redux/page";
import { deleteData } from "../../utilities/deleteData";

export const Character = () => {
	const { dispatch } = useOutletContext();

	const { state } = useLocation();

	const handleDelete = async () => {
		const data = await deleteData("characters", state.id);
	};

	useEffect(() => {
		dispatch(pageChange("character"));
	}, []);

	if (!state) return <div>Nothing to see here!</div>;

	return (
		<motion.div
			className={`flex w-full flex-col gap-20 rounded-[15px] bg-[#09080D] bg-opacity-70 px-20 py-9`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<div className="grid w-full grid-cols-2">
				<div className="flex flex-col gap-1">
					<h1 className="text-7xl text-neutral">{state.name}</h1>
					<h2 className="text-2xl text-neutral">
						{state.race.main}, {state.class.main}
					</h2>
					<div className="w-[40%]">
						<div className="mt-20 grid grid-cols-4 place-items-center gap-2 text-2xl">
							<p></p>
							<p>STAT</p>
							<p>MOD</p>
							<p>SAVE</p>
						</div>
						{state.stats.map((stat) => (
							<p key={stat.name} className="grid grid-cols-4 place-items-center gap-2 text-2xl">
								<span className="place-self-start">{stat.name.toUpperCase()}</span>
								<span>{stat.value} </span>
								<span>{stat.mod}</span>
								<span>{stat.save}</span>
							</p>
						))}
					</div>
				</div>
				<div>
					<p>SPELLS/EQUIPMENT</p>
				</div>
			</div>

			<p>{state.backstory}</p>
			<NavLink to="/profile" className="btn btn-ghost" onClick={handleDelete}>
				Delete
			</NavLink>
		</motion.div>
	);
};
