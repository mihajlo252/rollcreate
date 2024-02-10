import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";

import { useDispatch } from "react-redux";

export const Root = () => {
	const dispatch = useDispatch();

	return (
		<>
			<Navigation />
			<main
				className={`jusify-center relative flex min-h-[100svh] px-[12rem] pb-20 pt-20 max-[600px]:px-[2rem] max-[600px]:pt-36`}
			>
				<Outlet context={{ dispatch }} />
			</main>
			<Footer />
		</>
	);
};
