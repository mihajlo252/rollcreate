import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateCardStyles from "./CreateCardStyles.module.css";

export const CreateCard = ({ children, to, inDevelopment }) => {
    return (
        <Link
            to={to}
            className={`card w-full place-items-center gap-10 bg-[#09080D] bg-opacity-70 transition-transform hover:scale-[1.05] animate-pulse animate-delay-1000 animate-once animate-alternate animate-duration-1000 animate-ease-in-out ${CreateCardStyles.card}`}
        >
            {children}
            {inDevelopment && <p className="text-warning">Currently in Development</p>}
        </Link>
    );
};
