import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase";
import { POI } from "./POI/POI";
import { useSelector } from "react-redux";

export const InteractiveMap = ({ profile, campaignId, mapUrl, isLoaded, setIsLoaded }) => {
	const [coords, setCoords] = useState([]);
	const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
	const [POIName, setPOIName] = useState("");
	const [editMode, setEditMode] = useState(false);
	const [revealPOI, setRevealPOI] = useState(false);

	const { userData } = useSelector((state) => state.userData);

	let SCALE = imageSize.width / 100;
	let hitbox = 5 * SCALE;
	let coordsFontSize = imageSize.width / 1500 + "rem";

	const handleClick = (e) => {
		e.preventDefault();
		if (!editMode) return;
		let calcCoords = {
			x: (e.nativeEvent.offsetX - hitbox / 2) / imageSize.width,
			y: (e.nativeEvent.offsetY - hitbox / 2) / imageSize.height,
			name: POIName,
		};

		setCoords([...coords, calcCoords]);
		localStorage.setItem(campaignId, JSON.stringify([...coords, calcCoords]));
	};

	const handleLoad = (e) => {
		setIsLoaded(true);
		setImageSize({ width: e.target.scrollWidth, height: e.target.scrollHeight });
	};

	const handleDelete = () => {
		localStorage.removeItem(campaignId);
		setCoords([]);
	};

	const submitCoordinates = async () => {
		const { data, error } = await supabase
			.from("campaigns")
			.update([{ poi: [...coords] }])
			.eq("id", campaignId)
			.select();
	};

	const getCoordinates = async () => {
		const { data, error } = await supabase.from("campaigns").select("poi").eq("id", campaignId);
		if (error) {
			console.error(error);
			return [];
		}
		return [...data[0].poi];
	};

	const handleSetCoords = async () => {
		setCoords(JSON.parse(localStorage.getItem(campaignId)) || (await getCoordinates()));
	};

	useEffect(() => {
		handleSetCoords();
	}, []);

	useEffect(() => {
		function handleResize() {
			let image = document.getElementById("map");
			setImageSize({ width: image.scrollWidth, height: image.scrollHeight });
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{userData.user.id == profile && (
				<div className={`flex gap-5 rounded-tl-xl rounded-tr-xl bg-black bg-opacity-50 px-10 py-5`}>
					<button className="btn btn-ghost" onClick={handleDelete}>
						Delete
					</button>
					<button className="btn btn-ghost" onClick={() => submitCoordinates()}>
						Save
					</button>
					<button className={`btn btn-ghost`} onClick={() => setEditMode(!editMode)}>
						{!editMode ? "Edit Mode" : "Done"}
					</button>
					{editMode && (
						<>
							<input
								type="text"
								value={POIName}
								onChange={(e) => setPOIName(e.target.value)}
								placeholder="POI name"
								className="text-neutral-content"
							/>
						</>
					)}
				</div>
			)}

			<div className="relative h-full w-full">
				<img
					src={mapUrl}
					alt="map"
					className={`opacity-1 transition-opacity duration-[250ms] ${!isLoaded && "opacity-0"}`}
					onClick={handleClick}
					onLoad={handleLoad}
					id="map"
				/>
				{coords.map((coord, idx) => {
					return (
						<POI
							key={idx}
							coord={coord}
							imageSize={imageSize}
							setRevealPOI={setRevealPOI}
							hitbox={hitbox}
							editMode={editMode}
							coordsFontSize={coordsFontSize}
						/>
					);
				})}
			</div>
			{/* {revealPOI && (
				<POI
			)} */}
		</>
	);
};
