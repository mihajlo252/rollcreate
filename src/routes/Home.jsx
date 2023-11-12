import React from "react";

export const Home = () => {
	return (
		<div className="flex flex-col justify-center items-start min-h-screen pl-10">
			<div className="flex flex-col items-start text-xl gap-10">
				<button className="btn btn-ghost">Build</button>
				<button className="btn btn-ghost">Options</button>
			</div>
		</div>
	);
};
