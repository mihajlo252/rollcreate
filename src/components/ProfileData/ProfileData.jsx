import React from "react";

export const ProfileData = ({userData}) => {

	return (
		<div className={`w-[100%] h-[50%] px-5 py-9 flex flex-col gap-5 bg-[#0e0d14] rounded-[15px] bg-opacity-70`}>
			<h2 className="text-4xl text-neutral">{userData.user.user_metadata.username.toUpperCase()}</h2>
		</div>
	);
};
