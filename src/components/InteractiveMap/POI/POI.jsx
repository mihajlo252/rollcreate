import React, { useState } from "react";
import { poiChange } from "../../../redux/poi";
import { useOutletContext } from "react-router-dom";

export const POI = ({ coord, imageSize, hitbox, editMode, setRevealPOI, poiCircleInner, poiCircleOuter }) => {
	const [isHover, setIsHover] = useState(false);

	const { dispatch } = useOutletContext();

	// let innerCircle = poiCircle * .8

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(poiChange(coord));
		setRevealPOI(true);
		console.log(coord);
	};

	return (
		<button
			style={{
				left: coord.x * imageSize.width,
				top: coord.y * imageSize.height,
				width: hitbox,
				height: hitbox,
			}}
			className={`absolute grid place-items-center ${editMode && "bg-black"} bg-opacity-40`}
			onMouseOver={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			onClick={handleClick}
		>
			<div
				className={`grid place-items-center opacity-0 transition-opacity border-2 border-red-500 rounded-full text-balance ${
					isHover && "opacity-100"
				}`}
				style={{ width: poiCircleOuter, aspectRatio: 1 }}
			>

				<div className="rounded-full bg-red-500" style={{ width: poiCircleInner, aspectRatio: 1 }}></div>
			</div>
		</button>
	);
};
