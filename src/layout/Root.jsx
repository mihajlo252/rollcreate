import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";

export const Root = () => {
	return (
		<div className="">
			<Navigation />
			<div className="px-[12rem] my-36 min-h-[100dvh] relative max-[600px]:px-[2rem]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};
