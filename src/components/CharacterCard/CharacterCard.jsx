import React, { useState } from "react";
import CardStyles from "./CharacterCardStyles.module.css";
import { NavLink } from "react-router-dom";

export const CharacterCard = ({ character }) => {
	const { meta_data } = character;
	const [expanded, setExpanded] = useState(false);
	const scaleSize = expanded ? "1" : "0";

	return (
		<div
			className={`w-[50%] bg-black bg-opacity-40 px-10 py-5 items-center justify-center relative`}
		>
			<div className={`${CardStyles.card}`}>
				<h1 className={`text-3xl self-center ${CardStyles.char_name}`}>{meta_data.name}</h1>
				<div className={`${CardStyles.main_traits}`}>
					<div className="grid grid-cols-3 gap-2 min-h-6 place-items-center px-1">
						<p className="place-self-start self-center">Race</p>
						<p>Class</p>
						<p className="place-self-end self-center">Affiliation</p>
						<p className="place-self-start self-center text-neutral-400">
							{meta_data.race.main}, {meta_data.race.sub}
						</p>
						<p className=" text-neutral-400">
							{meta_data.class.main}, {meta_data.class.sub}
						</p>
						<p className="place-self-end self-center text-neutral-400">
							{meta_data.affiliation}
						</p>
					</div>
				</div>
				<NavLink to={`./characters/${character.id}`} state={meta_data} className="btn btn-ghost">
					MORE
				</NavLink>
				{/* <button onClick={() => setExpanded(!expanded)}>MORE</button> */}
			</div>
			{/* <div
				className={`scale-y-[${scaleSize}] origin-top transition-transform bg-black bg-opacity-40 px-10 py-5 absolute top-[100%] left-0 w-full ${CardStyles.more_info}`}
			>
				<div className="text-xl">
					<p>STR: {meta_data.stats.str}</p>
					<p>DEX: {meta_data.stats.dex}</p>	
					<p>CON: {meta_data.stats.con}</p>
					<p>INT: {meta_data.stats.int}</p>
					<p>WIS: {meta_data.stats.wis}</p>
					<p>CHA: {meta_data.stats.cha}</p>
				</div>
				<div className="flex flex-col">
					<div className="w-full h-[80%] bg-black bg-opacity-80">

					</div>
					<div className="flex place-self-end">
						<button className="btn btn-ghost">Spells</button>
						<button className="btn btn-ghost">Inventory</button>
					</div>
				</div>
			</div> */}
		</div>
	);
};
