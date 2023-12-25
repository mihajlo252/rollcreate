import { useEffect, useState } from "react";
import { CharacterCard } from "../components/CharacterCard/CharacterCard";
import { getAllUserCharacters } from "../utilities/getAllUserCharacters";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// getting all characters
// import { getAllData } from "../utilities/getAllData";

export const Profile = () => {
	const [characters, setCharacters] = useState([]);

	const { userData } = useSelector((state) => state.userData);

	// getting all characters
	// const handleGetAllData = async () => {
	// 	const res = await getAllData("characters");
	// 	setCharacters(res.data);
	// };

	const navigate = useNavigate();

	const handleGetAllUserCharacters = async () => {
		const res = await getAllUserCharacters(userData.user.id);
		setCharacters(res.data);
	};

	useEffect(() => {
		if (!userData) {
			navigate("/");
			return;
		}
		
		handleGetAllUserCharacters();

		// getting all characters
		// handleGetAllData();
	}, []);

	return (
		<div className="flex flex-col gap-10">
			{characters.map((character) => (
				<CharacterCard key={character.id} character={character} />
			))}
		</div>
	);
};
