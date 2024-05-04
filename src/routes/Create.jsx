import React, { useEffect } from "react";
import { getDndData } from "../utilities/getDndData";
import { motion } from "framer-motion";
import { pageChange } from "../redux/page";
import { useNavigate, useOutletContext } from "react-router-dom";
import { CreateCard } from "../components/CreateCard/CreateCard";
import { useSelector } from "react-redux";

export const Create = () => {
    const { dispatch } = useOutletContext();
    const { userData } = useSelector((state) => state.userData);

    const navigate = useNavigate();

    useEffect(() => {
        if (!userData) {
            navigate("/signin");
        }
        dispatch(pageChange("create"));
    }, []);

    if (!userData) return <></>;

    return (
        <motion.section
            className="flex h-min w-full flex-col items-center justify-center gap-20 lg:gap-44"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h1 className="text-center text-[2.8rem] text-primary">
                Choose what you want to create
            </h1>
            <div className="grid h-min w-full gap-10 max-[1000px]:grid-rows-2 min-[1000px]:grid-cols-2">
                <CreateCard to="./campaign">
                    <h2 className="place-self-center text-center text-5xl text-primary">
                        Create your campaign
                    </h2>
                    <p className="text-center text-neutral">
                        Make your dream world come to life. Have fun building
                        and exploring your ideas with us!
                    </p>
                </CreateCard>
                <CreateCard to="./character" inDevelopment={true}>
                    <h2 className="place-self-center text-center text-5xl text-primary">
                        Create your character
                    </h2>
                    <p className="text-center text-neutral">
                        Want to be a heroic knight or an evil warlock? You got
                        it! If you think it, you can probably build it. The
                        world is your oyster!
                    </p>
                </CreateCard>
            </div>
        </motion.section>
    );
};
