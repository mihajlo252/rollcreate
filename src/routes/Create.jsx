import React, { useEffect } from "react";
import { getDndData } from "../utilities/getDndData";
import { motion } from "framer-motion";
import { pageChange } from "../redux/page";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { InDevelopment } from "../components/InDevelopment/InDevelopment";

export const Create = () => {
    const development = false;
    const { dispatch } = useOutletContext();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(pageChange("create"));
    }, []);

    if (development) return <InDevelopment />;

    return (
        <motion.section
            className="flex w-full items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="grid h-min w-full grid-cols-2 gap-10">
                <Link to="./character" className="card place-items-center gap-20 bg-[#09080D] bg-opacity-70 px-20 py-10">
                    <h2 className="place-self-center text-5xl text-primary">
                        Create your character!
                    </h2>
                    <p className="text-2xl text-neutral">
                        Here you will be able to choose between a plethora of
                        customization options. Want to be a heroic knight or an
                        evil mage? You got it! If you think it, you can probably
                        build it. The world is your oyster!
                    </p>
                </Link>
                <Link to="./campaign" className="card place-items-center gap-20 bg-[#09080D] bg-opacity-70 px-20 py-10">
                    <h2 className="place-self-center text-5xl text-primary">
                        Create your campaign!
                    </h2>
                    <p className="text-2xl text-neutral">
                        Make your dream world come to life. Have fun building
                        and exploring your ideas with us!
                    </p>
                </Link>
            </div>
        </motion.section>
    );
};
