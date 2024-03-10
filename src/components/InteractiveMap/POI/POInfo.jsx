import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const POInfo = () => {

	const poi = useSelector((state) => state.poi.poi);

	return (
		<>
			<h2 className="self-center text-3xl text-primary">{poi.name}</h2>
			<div className="flex flex-col">
				<h3>NPCs: </h3>
					{poi.npcs}
			</div>
			<div>
				<h3>Lore: </h3>
				<p>
					{poi.lore}
				</p>
			</div>
		</>
	);
};
