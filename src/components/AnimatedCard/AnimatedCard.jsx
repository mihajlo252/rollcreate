import React from "react";
import AnimatedCardStyles from "./AnimatedCardStyles.module.css";

export const AnimatedCard = ({text, bg}) => {
	return (
		<div className={`${AnimatedCardStyles.cardd}`}>
			<img
				src={bg}
				alt="lich king"
				className={`${AnimatedCardStyles.bg}`}
			/>
			<h2 className={`${AnimatedCardStyles.title}`}>{text}</h2>
		</div>
	);
};
