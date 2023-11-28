import React from "react";
import CardStyles from "./CardStyles.module.css";

export const Card = ({ campaign }) => {
	const { campaign_name, meta_data, featured, created_at } = campaign;

	return (
		<div className={`flex flex-col ${CardStyles.card}`}>
			<p>{campaign_name}</p>
			<p>{meta_data.type}</p>
			<p>{meta_data.players}</p>
			<p>{featured ? "Featured" : "Not featured"}</p>
			<p>{created_at}</p>
		</div>
	);
};
