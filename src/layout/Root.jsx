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
				className={`jusify-center relative flex min-h-[100svh] px-[2rem] pb-20 pt-20 max-[600px]:pt-36 md:px-[6rem] lg:px-[12rem]`}
			>
				<Outlet context={{ dispatch }} />
			</main>
			<Footer />
		</>
	);
};
