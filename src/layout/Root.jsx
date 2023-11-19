import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation/Navigation";

export const Root = () => {
	return (
		<>
			<Navigation />
			<div className="px-[12rem] min-h-screen min-h-[100dvh] pt-10">
				<Outlet />
			</div>
		</>
	);
};
