import React from "react";
import CardStyles from "./CardStyles.module.css";

export const Card = ({ campaign }) => {
	const { campaign_name, meta_data, featured, created_at } = campaign;

	return (
		<div className={`flex flex-col px-5 py-2 min-h-[15rem] bg-neutral-content bg-opacity-70 rounded-md backdrop-blur ${CardStyles.card}`}>
			<h3 className="text-2xl text-primary">{campaign_name}</h3>
			<p>{meta_data.type}</p>
			<p>{meta_data.players}</p>
			<p>{featured ? "Featured" : "Not featured"}</p>
			<p>{created_at}</p>
		</div>
	);
};
