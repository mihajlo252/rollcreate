import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Backstory = ({setMetaData}) => {
    const [backstory, setBackstory] = useState("");

    useEffect(() => {
        setMetaData((prev) => ({ ...prev, backstory }));
    }, [backstory])

    return (
        <motion.section
            className="flex h-full w-full flex-col items-center justify-around gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2 className="text-5xl text-primary">
                Please tell me about your character
            </h2>
            <textarea
                name="backstory"
                id="backstory"
                cols="100"
                rows="15"
                onChange={(e) => setBackstory(e.target.value)}
                value={backstory}
                className="textarea textarea-bordered resize-none bg-[#09080D] bg-opacity-70"
            ></textarea>
        </motion.section>
    );
};
