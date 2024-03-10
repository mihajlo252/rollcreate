import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase";
import { POI } from "./POI/POI";
import { useSelector } from "react-redux";
import { POInfo } from "./POI/POInfo";
import { POIEdit } from "./POI/POIEdit";

export const InteractiveMap = ({ profile, campaignId, mapUrl, isLoaded, setIsLoaded }) => {
	const [pois, setPOIs] = useState([]);
	const [currentCoordinates, setCurrentCoordinates] = useState({ x: "", y: "" });
	const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
	const [editMode, setEditMode] = useState(false);
	const [revealPOI, setRevealPOI] = useState(false);
	const [editPOI, setEditPOI] = useState(false);

	const { userData } = useSelector((state) => state.userData);

	let SCALE = imageSize.width / 100;
	let hitbox = 3 * SCALE;
	let poiCircleOuter = imageSize.width / 1500 + "rem";
	let poiCircleInner = imageSize.width / 1500 / 2 + "rem";

	const handleClick = (e) => {
		e.preventDefault();
		if (!editMode) {
			setRevealPOI(false);
			setEditPOI(false);
			return;
		}
		setEditPOI(true);
		let calcCoords = {
			x: (e.nativeEvent.offsetX - hitbox / 2) / imageSize.width,
			y: (e.nativeEvent.offsetY - hitbox / 2) / imageSize.height
		};

		setCurrentCoordinates({ ...currentCoordinates, ...calcCoords });
	};

	const handleLoad = (e) => {
		setIsLoaded(true);
		setImageSize({ width: e.target.scrollWidth, height: e.target.scrollHeight });
	};

	const handleDelete = () => {
		localStorage.removeItem(campaignId);
		setPOIs([]);
	};

	const submitCoordinates = async () => {
		const { data, error } = await supabase
			.from("campaigns")
			.update([{ poi: [...pois] }])
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

	const handleSetPOIs = async () => {
		setPOIs(JSON.parse(localStorage.getItem(campaignId)) || (await getCoordinates()));
	};

	const handleSetEditMode = () => {
		setEditMode(!editMode);
		setRevealPOI(false);
	}

	useEffect(() => {
		handleSetPOIs();
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
					<button className={`btn btn-ghost`} onClick={handleSetEditMode}>
						{!editMode ? "Edit Mode" : "Done"}
					</button>
				</div>
			)}

			<div className="relative w-full">
				<img
					src={mapUrl}
					alt="map"
					className={`opacity-1 transition-opacity duration-[250ms] ${!isLoaded && "opacity-0"}`}
					onClick={handleClick}
					onLoad={handleLoad}
					id="map"
				/>
				{pois.map((poi, idx) => {
					return (
						<div key={idx}>
							<POI
								poi={poi}
								imageSize={imageSize}
								setRevealPOI={setRevealPOI}
								hitbox={hitbox}
								editMode={editMode}
								poiCircleInner={poiCircleInner}
								poiCircleOuter={poiCircleOuter}
							/>
						</div>
					);
				})}
				<div
					className={`absolute flex flex-col rounded-tl-xl rounded-bl-xl px-4 py-10 gap-20 top-0 right-0 h-full bg-black bg-opacity-50 w-1/5 scale-x-0 opacity-0 origin-right transition-all duration-[250ms] ${
						revealPOI && "scale-x-100 opacity-100"
					}`}
				>
					<POInfo />
				</div>

				{editMode && (
					<div
						className={`absolute flex flex-col rounded-tl-xl rounded-bl-xl px-4 py-10 gap-20 top-0 right-0 h-full bg-black bg-opacity-50 w-1/5 scale-x-0 opacity-0 origin-right transition-all duration-[250ms] ${
							editPOI && "scale-x-100 opacity-100"
						}`}
					>
						<POIEdit currentCoordinates={currentCoordinates} pois={pois} setPOIs={setPOIs} campaignId={campaignId} />
					</div>
				)}
			</div>
		</>
	);
};
