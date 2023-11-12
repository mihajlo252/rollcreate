import React from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "../components/Logo";

export const Root = () => {
	return (
		<>
			<Logo />
			<Outlet />
		</>
	);
};
