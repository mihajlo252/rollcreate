import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { submitCharacter } from "../../utilities/submitCharacter";
import { getAllData } from "../../utilities/getAllData";
import { useSelector } from "react-redux";
import { Class } from "./Subpages/Class";
import { Race } from "./Subpages/Race";
import { Stats } from "./Subpages/Stats";
import { Backstory } from "./Subpages/Backstory";
import { InDevelopment } from "../InDevelopment/InDevelopment";

export const CreateCharacter = () => {
	const { userData } = useSelector((state) => state.userData);

	const inDevelopment = true;

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
		stats: [
			{name: "con", value: 0, mod: "", save: ""},
			{name: "dex", value: 0, mod: "", save: ""},
			{name: "cha", value: 0, mod: "", save: ""},
			{name: "int", value: 0, mod: "", save: ""},
			{name: "str", value: 0, mod: "", save: ""},
			{name: "wis", value: 0, mod: "", save: ""}
		],
		backstory: "",
		affiliation: "",
	});
	const [campaigns, setCampaigns] = useState([]);
	const [campaignId, setCampaignId] = useState("");
	const [subPage, setSubPage] = useState("race");
	const [classes, setClasses] = useState([]);

	

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Commented to prevent api calls
		// await submitCharacter(metaData, userData.user.id, campaignId);
	};

	

	const handleSetCampaignId = (e) => {
		setCampaignId(e.target.value);
	};

	const handleSetSubPage = (e) => {
		e.preventDefault();
		setSubPage(e.target.value);
	};

	useEffect(() => {
		const getClasses = async () => {
			const res = await fetch("assets/dndData/Classes.json")
			const data = await res.json();
			setClasses(data);
		}
		
		const handleGetAllCampaigns = async () => {
			const res = await getAllData("campaigns");
			setCampaigns(res.data);
		};
		// Commented to prevent api calls
		// handleGetAllCampaigns();
		getClasses();
	}, []);

	if(inDevelopment) return <InDevelopment />

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
				<button value="backstory" className="btn btn-ghost" onClick={handleSetSubPage}>
					Backstory
				</button>
			</header>
			{subPage === "class" && <Class classes={classes} setMetaData={setMetaData} />}
			{subPage === "race" && <Race />}
			{subPage === "stats" && <Stats metaData={metaData} setMetaData={setMetaData}/>}
			{subPage === "backstory" && <Backstory setMetaData={setMetaData}/>}
			<Form className="flex flex-col gap-2" onSubmit={(e) => handleSubmit(e)}>
				<select onChange={handleSetCampaignId} className="select select-bordered w-full max-w-xs">
					{/* Commented to prevent api calls */}
					{/* {campaigns.map((campaign) => (
						<option key={campaign.id} value={campaign.id}>
							{campaign.campaign_name}
						</option>
					))} */}
				</select>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</Form>
		</motion.section>
	);
};
