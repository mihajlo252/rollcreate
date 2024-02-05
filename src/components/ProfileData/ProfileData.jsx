import React from "react";

export const ProfileData = ({userData}) => {

	return (
		<div className={`flex h-[50%] w-[100%] flex-col gap-5 rounded-[15px] bg-[#0e0d14] bg-opacity-70 px-5 py-9`}>
			<h2 className="text-4xl text-neutral">{userData?.user.user_metadata.username.toUpperCase()}</h2>
		</div>
	);
};
