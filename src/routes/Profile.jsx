import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import { useSelector } from "react-redux";
import { pageChange } from "../redux/page";

import { motion } from "framer-motion";

import { Characters } from "../components/Characters/Characters";
import { ProfileData } from "../components/ProfileData/ProfileData";
import { Stats } from "../components/Stats/Stats";
import { UserCampaigns } from "../components/UserCampaigns/UserCampaigns";

export const Profile = () => {
	const { userData } = useSelector((state) => state.userData);

	const navigate = useNavigate();

	const { dispatch } = useOutletContext();

	useEffect(() => {
		if (!userData) {
			navigate("/");
			return;
		}
		dispatch(pageChange("profile"));
	}, []);

	if (!userData) return;

	return (
		<>
			<motion.section
				className="flex w-full gap-2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
				<Characters userData={userData} />
				<div className="flex w-[50%] flex-col gap-2">
					<ProfileData userData={userData} />
					<div className="flex h-[50%] gap-2">
						<div className="flex h-full w-full flex-col gap-2">
							<div className="h-[40%] w-full rounded-[15px] bg-[#0e0d14] bg-opacity-70 px-5 py-9">Misc</div>
							<div className="h-[60%] w-full rounded-[15px] bg-[#0e0d14] bg-opacity-70 px-5 py-9">
								<Stats />
							</div>
						</div>
						<div className="flex w-full flex-col gap-10 rounded-[15px] bg-[#0e0d14] bg-opacity-70 px-5 py-9">
							<UserCampaigns userData={userData} />
						</div>
					</div>
				</div>
			</motion.section>
		</>
	);
};
