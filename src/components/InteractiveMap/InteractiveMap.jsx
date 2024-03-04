import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase";

export const InteractiveMap = ({ campaignId, mapUrl, isLoaded, setIsLoaded }) => {
	const [coords, setCoords] = useState([]);
	const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

	const [isHover, setIsHover] = useState(false);

	let SCALE = imageSize.width / 100;
	let hitbox = 5 * SCALE;

	const handleClick = (e) => {
		e.preventDefault();

		let calcCoords = {
			x: (e.nativeEvent.offsetX - hitbox / 2) / imageSize.width,
			y: (e.nativeEvent.offsetY - hitbox / 2) / imageSize.height,
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
			.update([{ coordinates: [...coords] }])
			.eq("id", campaignId)
			.select();
	};

	const getCoordinates = async () => {
		const { data, error } = await supabase.from("campaigns").select("coordinates").eq("id", campaignId);
		if (error) {
			console.error(error);
			return [];
		}
		return [...data[0].coordinates];
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
			<button onClick={handleDelete}>Delete</button>
			<button onClick={() => submitCoordinates()}>Save</button>

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
						<div
							key={idx}
							style={{
								left: coord.x * imageSize.width,
								top: coord.y * imageSize.height,
								width: hitbox,
								height: hitbox,
							}}
							className={`absolute bg-red-500`}
						/>
					);
				})}
			</div>
		</>
	);
};
