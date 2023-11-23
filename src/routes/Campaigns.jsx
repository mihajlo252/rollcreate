import React, { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { GetAllCampaigns } from "../utilities/GetAllCampaigns";

export const Campaigns = () => {
	const [campaigns, setCampaigns] = useState([]);
	const [filter, setFilter] = useState("");

	const handleFilter = (target) => {
		setFilter(target);
	};

	const handleGetAllCampaigns = async () => {
		const campaigns = await GetAllCampaigns();
		setCampaigns(campaigns.data);
	};

	useEffect(() => {
		handleGetAllCampaigns();
	}, []);


	return (
		<main className="flex flex-col gap-20">
			<select
				name="filter"
				id=""
				onChange={(e) => {
					handleFilter(e.target.value);
				}}
			>
				<option value="all" name="filter" defaultChecked>
					All
				</option>
				<option value="featured" name="filter">
					Featured
				</option>
			</select>

			<div className="grid grid-cols-4 gap-5">

				<h2 className="text-5xl text-primary font-semibold">
					{filter == "featured" ? "Featured" : "All"} Campaigns
				</h2>

				{campaigns.map((campaign) =>
					filter == "featured" ? (
						campaign.featured && <Card key={campaign.id} campaign={campaign} />
					) : (
						<Card key={campaign.id} campaign={campaign} />
					)
				)}

			</div>
		</main>
	);
};
