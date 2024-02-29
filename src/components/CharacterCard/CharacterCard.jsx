import React from "react";
import CardStyles from "./CharacterCardStyles.module.css";
import { NavLink } from "react-router-dom";

export const CharacterCard = ({character }) => {
	const { meta_data } = character;

	return (
		<NavLink
			to={`./characters/${character.id}`}
			state={{...meta_data, id: character.id}}
			className="transition-transform hover:scale-[1.01]"
		>
			<div
				className={`relative items-center justify-center bg-[#09080D] py-5 pe-5 ps-10`}
			>
				<div className={`${CardStyles.card}`}>
					<h1 className={`text-3xl text-neutral self-center ${CardStyles.char_name}`}>
						{meta_data.name}
					</h1>
					<div className={`${CardStyles.main_traits}`}>
						<div className="min-h-6 grid grid-cols-3 place-items-center gap-2 px-1 text-sm">
							<p className="place-self-start self-center">Race</p>
							<p>Class</p>
							<p className="place-self-end self-center">Affiliation</p>
							<p className="place-self-start self-center text-neutral-400">
								{meta_data.race.main}, {meta_data.race.sub}
							</p>
							<p className="text-neutral-400">{meta_data.class.main}</p>
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
