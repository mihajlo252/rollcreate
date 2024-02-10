import React from "react";

export const ProfileData = ({userData}) => {

	return (
		<div className={`flex h-full w-full flex-col gap-5 rounded-[15px] bg-[#09080D] bg-opacity-70 px-5 py-9`}>
			<h2 className="text-5xl text-neutral">{userData.user.user_metadata.username.toUpperCase()}</h2>
		</div>
	);
};
