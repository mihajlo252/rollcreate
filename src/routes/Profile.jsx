import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Characters } from "../components/Characters/Characters";
import { ProfileData } from "../components/ProfileData/ProfileData";
import { motion } from "framer-motion";

export const Profile = () => {
	const { userData } = useSelector((state) => state.userData);

	const navigate = useNavigate();

	useEffect(() => {
		if (!userData) {
			navigate("/");
			return;
		}
	}, []);
	
	return (
		<>
			<motion.div className="flex gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<Characters userData={userData} />
				<div className="w-[50%] flex-col">
					<ProfileData userData={userData} />
					<div className="flex min-h-[50%]">
						<div className="w-full ">
							<div className="w-full min-h-[50%] bg-black">dsa</div>
							<div className="w-full min-h-[50%] bg-black">zxv</div>
						</div>
						<div className="w-full bg-black">asd</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};
