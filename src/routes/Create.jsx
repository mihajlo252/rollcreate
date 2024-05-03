import React, { useEffect } from "react";
import { getDndData } from "../utilities/getDndData";
import { motion } from "framer-motion";
import { pageChange } from "../redux/page";
import { useOutletContext } from "react-router-dom";
import { InDevelopment } from "../components/InDevelopment/InDevelopment";
import { CreateCard } from "../components/CreateCard/CreateCard";

export const Create = () => {
    const development = false;
    const { dispatch } = useOutletContext();

    useEffect(() => {
        dispatch(pageChange("create"));
    }, []);

    if (development) return <InDevelopment />;

    return (
        <motion.section
            className="flex h-min w-full flex-col items-center justify-center gap-20 lg:gap-44"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h1 className="text-center text-[2.8rem] text-primary">Choose what you want to build</h1>
            <div className="grid h-min w-full gap-10 max-[1000px]:grid-rows-2 min-[1000px]:grid-cols-2">
                <CreateCard to="./character">
                    <h2 className="place-self-center text-center text-5xl text-primary">
                        Create your character!
                    </h2>
                    <p className="text-center text-neutral">
                        Here you will be able to choose between a plethora of
                        customization options. Want to be a heroic knight or an
                        evil mage? You got it! If you think it, you can probably
                        build it. The world is your oyster!
                    </p>
                </CreateCard>
                <CreateCard to="./campaign">
                    <h2 className="place-self-center text-center text-5xl text-primary">
                        Create your campaign!
                    </h2>
                    <p className="text-center text-neutral">
                        Make your dream world come to life. Have fun building
                        and exploring your ideas with us!
                    </p>
                </CreateCard>
            </div>
        </motion.section>
    );
};
