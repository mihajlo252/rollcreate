import React, { useState } from 'react'
import { GetAllCampaigns } from '../../utilities/GetAllCampaigns';




export const Filter = ({options, setFilter, setCampaigns}) => {


	const handleFilter = async (target) => {
		
		setFilter(target);
		const res = await GetAllCampaigns();
		setCampaigns(res.data);
	};

  return (
    <select
				name="filter"
				id=""
				onChange={(e) => {
					handleFilter(e.target.value);
				}}
			>
        {options.map((option, idx) => (
          <option key={idx} value={option} name="filter" defaultChecked={option === "all"}>{option}</option>
        ))}
			</select>
  )
}
