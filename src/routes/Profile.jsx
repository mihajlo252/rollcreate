import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Characters } from "../components/Characters/Characters";
import { ProfileData } from "../components/ProfileData/ProfileData";
import { motion } from "framer-motion";
import { pageChange } from "../redux/page";

export const Profile = () => {
	const { userData } = useSelector((state) => state.userData);

	const navigate = useNavigate();

	const {dispatch} = useOutletContext();

	
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
			<motion.section className="flex w-full gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<Characters userData={userData} />
				<div className="flex w-[50%] flex-col gap-2">
					<ProfileData userData={userData} />
					<div className="flex h-[50%] gap-2">
						<div className="flex h-full w-full flex-col gap-2">
							<div className="h-[50%] w-full bg-black">dsa</div>
							<div className="h-[50%] w-full bg-black">zxv</div>
						</div>
						<div className="w-full bg-black">asd</div>
					</div>
				</div>
			</motion.section>
		</>
	);
};
