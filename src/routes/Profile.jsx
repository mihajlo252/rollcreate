import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Characters } from "../components/Characters/Characters";
import { ProfileData } from "../components/ProfileData/ProfileData";

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
			<div className="flex gap-2 z-10">
				<Characters userData={userData} />
				<div className="w-[50%] flex-col">
					<ProfileData userData={userData} />
				</div>
			</div>
		</>
	);
};
