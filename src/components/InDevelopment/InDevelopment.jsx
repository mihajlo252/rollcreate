import { motion } from "framer-motion";
import React from "react";

export const InDevelopment = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex w-full flex-col items-center justify-center gap-10 rounded-[15px] bg-[#09080D] bg-opacity-60 px-20 py-9"
        >
            <h1 className="text-5xl text-warning">This page is currently in <span>development</span>.</h1> 
            <h2 className="text-3xl text-warning"> Please check out our other content that is available and <span className="text-secondary">stay tuned!</span></h2>
        </motion.section>
    );
};
