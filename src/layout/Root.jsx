import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";

export const Root = () => {
	return (
		<>
			<Navigation />
			<main className={`jusify-center relative flex min-h-[100svh] px-[12rem] pb-20 pt-20 max-[600px]:px-[2rem] max-[600px]:pt-36`}>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
