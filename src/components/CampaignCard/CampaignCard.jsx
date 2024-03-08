import React from "react";
import CardStyles from "./CampaignCardStyles.module.css";
import { NavLink } from "react-router-dom";

export const CampaignCard = ({ campaign }) => {
  const { campaign_name } = campaign;

  return (
    <NavLink to={`./${campaign.id}`} state={campaign}>
      <div
        className={`flex flex-col px-5 py-2 ${CardStyles.card}`}
      >
        <h3 className="text-2xl text-primary">{campaign_name}</h3>
      </div>
    </NavLink>
  );
};
