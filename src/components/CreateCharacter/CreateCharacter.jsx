import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Form, useLocation } from "react-router-dom";
import { submitCharacter } from "../../utilities/submitCharacter";
import { getAllData } from "../../utilities/getAllData";
import { useSelector } from "react-redux";
import { Class } from "./Class";
import { Race } from "./Race";
import { Stats } from "./Stats";

export const CreateCharacter = () => {
	const { userData } = useSelector((state) => state.userData);

	const { state } = useLocation();

	const [metaData, setMetaData] = useState({
		name: "",
		race: {
			sub: "",
			main: "",
		},
		class: {
			sub: "",
			main: "",
		},
		stats: {
			cha: "",
			con: "",
			dex: "",
			int: "",
			str: "",
			wis: "",
		},
		backstory: "",
		affiliation: "",
	});
	const [campaigns, setCampaigns] = useState([]);
	const [campaignId, setCampaignId] = useState("");
	const [subPage, setSubPage] = useState("race");

	const handleSubmit = async (e) => {
		e.preventDefault();
		await submitCharacter(metaData, userData.user.id, campaignId);
	};

	const handleGetAllCampaigns = async () => {
		const res = await getAllData("campaigns");
		setCampaigns(res.data);
	};

	const handleSetCampaignId = (e) => {
		setCampaignId(e.target.value);
	};

	const handleSetSubPage = (e) => {
		e.preventDefault();
		setSubPage(e.target.value);
	};

	useEffect(() => {
		handleGetAllCampaigns();
	}, []);

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="flex w-full flex-col items-center justify-center gap-20"
		>
			<header className="flex gap-10">
				<button value="race" className="btn btn-ghost" onClick={handleSetSubPage}>
					Race
				</button>
				<button value="class" className="btn btn-ghost" onClick={handleSetSubPage}>
					Class
				</button>
				<button value="stats" className="btn btn-ghost" onClick={handleSetSubPage}>
					Stats
				</button>
			</header>
			{subPage === "class" && <Class classes={state} />}
			{subPage === "race" && <Race />}
			{subPage === "stats" && <Stats />}
			<Form className="flex flex-col gap-2" onSubmit={(e) => handleSubmit(e)}>
				<select onChange={handleSetCampaignId} className="select select-bordered w-full max-w-xs">
					{campaigns.map((campaign) => (
						<option key={campaign.id} value={campaign.id}>
							{campaign.campaign_name}
						</option>
					))}
				</select>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</Form>
		</motion.section>
	);
};
