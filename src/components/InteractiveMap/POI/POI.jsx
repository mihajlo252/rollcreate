import React, { useState } from "react";
import { poiChange } from "../../../redux/poi";
import { useOutletContext } from "react-router-dom";

export const POI = ({ poi, imageSize, hitbox, createMode, setRevealPOI, poiCircleInner, poiCircleOuter, setCreatePOI }) => {
	const [isHover, setIsHover] = useState(false);

	const { dispatch } = useOutletContext();

	// let innerCircle = poiCircle * .8

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(poiChange(poi));
		setRevealPOI(true);
		setCreatePOI(false);
	};

	return (
		<button
			style={{
				left: poi.x * imageSize.width,
				top: poi.y * imageSize.height,
				width: hitbox,
				height: hitbox,
			}}
			className={`absolute grid place-items-center ${createMode && "bg-black"} bg-opacity-40`}
			onMouseOver={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			onClick={handleClick}
		>
			<div
				className={`grid place-items-center opacity-0 transition-opacity border-[1px] border-red-500 rounded-full text-balance ${
					isHover && "opacity-100"
				}`}
				style={{ width: poiCircleOuter, height: poiCircleOuter }}
			>

				<div className="rounded-full bg-red-500" style={{ width: poiCircleInner, height: poiCircleInner }}></div>
			</div>
		</button>
	);
};
