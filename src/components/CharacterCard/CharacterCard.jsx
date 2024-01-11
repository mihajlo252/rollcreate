import React from "react";
import CardStyles from "./CharacterCardStyles.module.css";
import { NavLink } from "react-router-dom";

export const CharacterCard = ({ character }) => {
	const { meta_data } = character;

	return (
		<NavLink
			to={`./characters/${character.id}`}
			state={meta_data}
			className="hover:scale-[1.01] transition-transform"
		>
			<div
				className={`bg-[#0e0d14] bg-opacity-80 ps-10 pe-5 py-5 items-center justify-center relative`}
			>
				<div className={`${CardStyles.card}`}>
					<h1 className={`text-3xl text-neutral self-center ${CardStyles.char_name}`}>
						{meta_data.name}
					</h1>
					<div className={`${CardStyles.main_traits}`}>
						<div className="grid grid-cols-3 gap-2 min-h-6 place-items-center px-1 text-sm">
							<p className="place-self-start self-center">Race</p>
							<p>Class</p>
							<p className="place-self-end self-center">Affiliation</p>
							<p className="place-self-start self-center text-neutral-400">
								{meta_data.race.main}, {meta_data.race.sub}
							</p>
							<p className=" text-neutral-400">{meta_data.class.main}</p>
							<p className="place-self-end self-center text-neutral-400">
								{meta_data.affiliation}
							</p>
						</div>
					</div>
				</div>
			</div>
		</NavLink>
	);
};
