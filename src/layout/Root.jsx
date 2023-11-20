import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";

export const Root = () => {
	return (
		<>
			<Navigation />
			<div className="px-[12rem] mt-20 min-h-[100dvh] relative">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};
