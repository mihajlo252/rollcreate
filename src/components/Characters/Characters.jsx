import React, { useEffect, useState } from "react";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import { getAllUserTables } from "../../utilities/getAllUserTables";
import CharactersStyles from "./CharactersStyles.module.css";
// getting all characters
// import { getAllData } from "../utilities/getAllData";

export const Characters = ({ userData }) => {
	const [characters, setCharacters] = useState([]);

	// getting all characters
	// const handleGetAllData = async () => {
	// 	const res = await getAllData("characters");
	// 	setCharacters(res.data);
	// };

	const handleGetAllUserCharacters = async () => {
		const res = await getAllUserTables("characters", userData.user.id);
		setCharacters(res.data);
	};

	useEffect(() => {
		handleGetAllUserCharacters();

		// getting all characters
		// handleGetAllData();
	}, []);

	return (
		<div
			className={`flex h-full w-full flex-col gap-24 rounded-[15px] bg-[#09080D] bg-opacity-70 px-5 py-9`}
		>
			<h2 className="text-5xl text-neutral">Characters</h2>
			<div className={`overflow-y-scroll ${CharactersStyles.scrollable}`}>
				<div className="flex h-[500px] flex-col gap-2 pe-2">
					{characters.map((character) => (
						<CharacterCard key={character.id} character={character} />
					))}
				</div>
			</div>
		</div>
	);
};
