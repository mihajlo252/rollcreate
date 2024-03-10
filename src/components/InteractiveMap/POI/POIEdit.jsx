import React from "react";
import { Form } from "react-router-dom";

export const POIEdit = ({ setPOIs, pois, currentCoordinates, campaignId }) => {
	const handleSubmit = (e) => {
		e.preventDefault();

		setPOIs([
			...pois,
			{ ...currentCoordinates, name: e.target.name.value, npcs: e.target.npcs.value, lore: e.target.lore.value },
		]);
		localStorage.setItem(
			campaignId,
			JSON.stringify([
				...pois,
				{ ...currentCoordinates, name: e.target.name.value, npcs: e.target.npcs.value, lore: e.target.lore.value },
			])
		);
	};

	return (
		<>
			<h1>Point of Interest</h1>
			<Form className="flex flex-col gap-2" onSubmit={handleSubmit}>
				<label htmlFor="name">POI name: </label>
				<input id="name" type="text" placeholder="Jiggle Valley" />
				<label htmlFor="npcs">POI npcs: </label>
				<input id="npcs" type="text" placeholder="NPC 1" />
				<label htmlFor="lore">POI lore: </label>
				<input id="lore" type="text" placeholder="In the village..." />
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</Form>
		</>
	);
};
