import React, { useEffect, useState } from "react";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import { getAllUserCharacters } from "../../utilities/getAllUserCharacters";
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
		const res = await getAllUserCharacters(userData.user.id);
		setCharacters(res.data);
	};

	useEffect(() => {
		handleGetAllUserCharacters();

		// getting all characters
		// handleGetAllData();
	}, []);

	return (
		<div className={`w-[50%] h-[80%] px-5 py-9 flex flex-col gap-5 bg-[#0e0d14] rounded-[15px] bg-opacity-70`}>
      <h2 className="text-4xl text-neutral">Characters</h2>
			<div className={`overflow-y-scroll ${CharactersStyles.scrollable}`}>
				<div className="h-[500px] flex flex-col gap-2 pe-2">
					{characters.map((character) => (
						<CharacterCard key={character.id} character={character} />
					))}
				</div>
			</div>
		</div>
	);
};
