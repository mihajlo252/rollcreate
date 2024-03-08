import React, { useState } from "react";

export const POI = ({coord, imageSize, hitbox, editMode, setRevealPOI, coordsFontSize }) => {

  const [isHover, setIsHover] = useState(false);

	return (
		<button
			style={{
				left: coord.x * imageSize.width,
				top: coord.y * imageSize.height,
				width: hitbox,
				height: hitbox,
			}}
			className={`absolute ${editMode && "bg-black"} bg-opacity-40`}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
			onClick={() => setRevealPOI(true)}
		>
      {isHover && <p className="left-0 top-0 text-balance text-white" style={{fontSize: coordsFontSize}}>{coord.name}</p>}
    </button>
	);
};
