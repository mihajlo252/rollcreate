import React, { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { GetAllCampaigns } from "../utilities/GetAllCampaigns";
import { Filter } from "../components/Filter/Filter";
import { SkeletonCard } from "../components/SkeletonCard/SkeletonCard";

export const Campaigns = () => {
	const [campaigns, setCampaigns] = useState([]);
	const [filter, setFilter] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	const handleGetAllCampaigns = async () => {
		const res = await GetAllCampaigns();
		setCampaigns(res.data);
		setIsLoading(false);
	};

	useEffect(() => {
		handleGetAllCampaigns();
	}, []);

	return (
		<main className="flex flex-col gap-20">
			<Filter options={["all", "featured"]} setFilter={setFilter} setCampaigns={setCampaigns}/>

			<h2 className="text-5xl text-primary font-semibold">
				{filter == "featured" ? "Featured" : "All"} Campaigns
			</h2>
			<div className="grid grid-cols-4 gap-36">
				{isLoading ? (
					<>
						<SkeletonCard />
						<SkeletonCard />
						<SkeletonCard />
					</>
				) : (
					<>
					{campaigns.map((campaign) =>
						filter == "featured" ? (
							(campaign.featured) && <Card key={campaign.id} campaign={campaign} />
						) : (
							<Card key={campaign.id} campaign={campaign} />
						)
					)}
					</>
				)}
			</div>
		</main>
	);
};
