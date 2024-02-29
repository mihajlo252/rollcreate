import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { submitCharacter } from "../../utilities/submitCharacter";
import { getAllData } from "../../utilities/getAllData";
import { useSelector } from "react-redux";

export const CreateCharacter = () => {
	const { userData } = useSelector((state) => state.userData);

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

	useEffect(() => {
		handleGetAllCampaigns();
	}, []);

	return (
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Form
				className="flex flex-col gap-2 text-neutral-content"
				onSubmit={(e) => handleSubmit(e)}
			>
				<label className="label text-neutral-focus">Name</label>
				<input
					name="name"
					value={metaData.name}
					onChange={(e) => setMetaData({ ...metaData, name: e.target.value })}
				/>
				<label className="label text-neutral-focus">Race</label>
				<input
					name="raceMain"
					value={metaData.race.main}
					onChange={(e) =>
						setMetaData({ ...metaData, race: { ...metaData.race, main: e.target.value } })
					}
				/>
				<input
					name="raceSub"
					value={metaData.race.sub}
					onChange={(e) =>
						setMetaData({ ...metaData, race: { ...metaData.race, sub: e.target.value } })
					}
				/>
				<label className="label text-neutral-focus">Class</label>
				<input
					name="classMain"
					value={metaData.class.main}
					onChange={(e) =>
						setMetaData({
							...metaData,
							class: { ...metaData.class, main: e.target.value },
						})
					}
				/>
				<input
					name="classSub"
					value={metaData.class.sub}
					onChange={(e) =>
						setMetaData({
							...metaData,
							class: { ...metaData.class, sub: e.target.value },
						})
					}
				/>
				<label className="label text-neutral-focus" htmlFor="backstory">
					Backstory
				</label>
				<textarea
					name="backstory"
					id="backstory"
					value={metaData.backstory}
					onChange={(e) => setMetaData({ ...metaData, backstory: e.target.value })}
				/>
				<label className="label text-neutral-focus">Affiliation</label>
				<input
					name="affiliation"
					value={metaData.affiliation}
					onChange={(e) => setMetaData({ ...metaData, affiliation: e.target.value })}
				/>
				<label className="label text-neutral-focus">Campaign</label>
				<select onChange={handleSetCampaignId}>
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
