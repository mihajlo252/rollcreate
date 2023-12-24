import React from "react";
import CardStyles from "./CharacterCardStyles.module.css";

export const CharacterCard = ({character}) => {
	const { meta_data } = character;
	
	return (
		<div className={`w-[50%] px-10 py-5 items-center bg-neutral-content bg-opacity-20 ${CardStyles.card}`}>
			<h1 className={`text-3xl ${CardStyles.char_name}`}>{meta_data.name}</h1>
			<div className={`${CardStyles.main_traits}`}>
				<div className="grid grid-cols-3 gap-2 min-h-6 place-items-center px-1">
					<p className="place-self-start self-center">Race</p>
					<p>Class</p>
					<p className="place-self-end self-center">Affiliation</p>
					<p className="place-self-start self-center text-neutral-400">{meta_data.race.main}, {meta_data.race.sub}</p>
					<p className=" text-neutral-400">{meta_data.class.main}, {meta_data.class.sub}</p>
					<p className="place-self-end self-center text-neutral-400">{meta_data.affiliation}</p>
				</div>
			</div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
