import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const POInfo = ({ pois, setPois }) => {
	const [editMode, setEditMode] = useState(false);

	const { poi } = useSelector((state) => state.poi);

	const handleDelete = (e) => {
		e.preventDefault()
		setPois(pois.filter((p) => p !== poi));
		localStorage.setItem("pois", JSON.stringify(pois.filter((p) => p !== poi)));
	};

	const handleEdit = (e) => {
		e.preventDefault()
		setPois(pois.map((p) => (p === poi ? { ...poi, name: "New Name" } : p)));
		localStorage.setItem("pois", JSON.stringify(pois.map((p) => (p === poi ? { ...poi, name: "New Name" } : p))));
	};

	const handleToggleEditMode = (e) => {
		e.preventDefault()
		setEditMode(!editMode);
	}

	return (
		<>
			<h2 className="self-center text-3xl text-primary">{poi.name}</h2>
			<div className="flex flex-col">
				<h3>NPCs: </h3>
				{poi.npcs}
			</div>
			<div>
				<h3>Lore: </h3>
				<p>{poi.lore}</p>
			</div>
			<div className="flex flex-col justify-center gap-5">
				{editMode ? (
					<>
						<button className="btn btn-success" onClick={handleEdit}>
							Save
						</button>
						<button className="btn btn-error" onClick={handleToggleEditMode}>
							Cancel
						</button>
					</>
				) : (
					<>
					<button className="btn btn-success" onClick={handleToggleEditMode}>
							Edit
						</button>
					<button className="btn btn-error" onClick={handleDelete}>
						Delete
					</button>
					</>
				)}
			</div>
		</>
	);
};
