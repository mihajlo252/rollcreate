import React from "react";

export const Card = ({ campaign }) => {
	console.log(campaign);
	const { name, description, date, author } = campaign;

	return (
		<div className="flex flex-col">
			<p>{name}</p>
			<p>{description}</p>
			<p>{date}</p>
			<p>{author}</p>
		</div>
	);
};
