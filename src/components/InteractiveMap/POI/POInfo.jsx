import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const POInfo = ({ pois, setPois }) => {
	const [editMode, setEditMode] = useState(false);

	const { poi } = useSelector((state) => state.poi);
	const [localLore, setLocalLore] = useState(poi.lore);
	const [localNpcs, setLocalNpcs] = useState(poi.npcs);
	const [localName, setLocalName] = useState(poi.name);

	const handleDelete = (e) => {
		e.preventDefault();
		setPois(pois.filter((p) => p !== poi));
		localStorage.setItem("pois", JSON.stringify(pois.filter((p) => p !== poi)));
	};

	const handleEdit = (e) => {
		e.preventDefault();
		setPois(pois.map((p) => (p === poi ? { ...poi, name: "New Name" } : p)));
		localStorage.setItem("pois", JSON.stringify(pois.map((p) => (p === poi ? { ...poi, name: "New Name" } : p))));
	};

	const handleToggleEditMode = (e) => {
		e.preventDefault();
		setEditMode(!editMode);
	};

	return (
		<>
			{editMode ? <input value={localName} onChange={(e) => setLocalName(e.target.value)} /> : <h2 className="self-center text-3xl text-primary">{poi.name}</h2>}
			<div className="flex flex-col">
				<h3>NPCs: </h3>
				{editMode ? (
					<input
						value={localNpcs}
						onChange={(e) => setLocalNpcs(e.target.value)}
						// setPois(pois.map((p) => (p === poi ? { ...poi, npcs: e.target.value } : p)))
					/>
				) : (
					<p>{poi.npcs}</p>
				)}
			</div>
			<div>
				<h3>Lore: </h3>
				{editMode ? (
					
					<textarea
						rows="10" 
						cols="20"
						value={localLore}
						onChange={(e) => setLocalLore(e.target.value)}
						// setPois(pois.map((p) => (p === poi ? { ...poi, lore: e.target.value } : p)))}
					/>
				) : (
					<p>{poi.lore}</p>
				)}
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
