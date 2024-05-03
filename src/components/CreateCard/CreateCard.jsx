import React from "react";
import { Link } from "react-router-dom";
import CreateCardStyles from "./CreateCardStyles.module.css";

export const CreateCard = ({ children, to }) => {
    return (
        <Link
            to={to}
            className={`card w-full place-items-center gap-20 bg-[#09080D] bg-opacity-70 transition-transform hover:scale-[1.05] ${CreateCardStyles.card}`}
        >
            {children}
        </Link>
    );
};
