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
			<motion.div className="flex gap-2 w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<Characters userData={userData} />
				<div className="flex w-[50%] flex-col gap-2">
					<ProfileData userData={userData} />
					<div className="flex h-[50%] gap-2">
						<div className="h-full flex flex-col gap-2 w-full">
							<div className="w-full h-[50%] bg-black">dsa</div>
							<div className="w-full h-[50%] bg-black">zxv</div>
						</div>
						<div className="w-full bg-black">asd</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};
