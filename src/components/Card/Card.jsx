import React from "react";

export const Card = ({ campaign }) => {
	const { campaign_name, meta_data, featured, created_at } = campaign;

	return (
		<div className="flex flex-col">
			<p>{campaign_name}</p>
			<p>{meta_data.type}</p>
			<p>{meta_data.players}</p>
			<p>{featured ? "Featured" : "Not featured"}</p>
			<p>{created_at}</p>
		</div>
	);
};
