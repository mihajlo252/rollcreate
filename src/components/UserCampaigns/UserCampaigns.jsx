import React, { useEffect, useState } from 'react'
import { getAllUserTables } from '../../utilities/getAllUserTables';

export const UserCampaigns = ({ userData }) => {

  const [campaigns, setCampaigns] = useState([]);

  const handleGetAllUserCampaigns = async () => {
		const res = await getAllUserTables("campaigns", userData.user.id);
		setCampaigns(res.data);
    console.log(res.data);
	};

	useEffect(() => {
		handleGetAllUserCampaigns();
	}, []);

  return (
    <>
			<h2 className="self-center text-5xl text-neutral">Campaigns</h2>
			<div className={`overflow-y-scroll`}>
				<div className="flex h-[200px] flex-col gap-2 pe-2">
					{campaigns.map((campaign) => (
						<h3 key={campaign.id}>{campaign.campaign_name}</h3>
					))}
				</div>
			</div>
		</>
  )
}
