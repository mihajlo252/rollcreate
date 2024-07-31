import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabase";

import { useSelector } from "react-redux";

import { InteractiveMap } from "../InteractiveMap/InteractiveMap";
import { CampaignDescription } from "./CampaignDescription";

export const Campaign = () => {
    const [mapUrl, setMapUrl] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    const { state } = useLocation();

    const { userData } = useSelector((state) => state.userData);
    const navigate = useNavigate();


    const getImageFromStorage = async () => {
        const { data } = supabase.storage
            .from("maps")
            .getPublicUrl(state.meta_data.map);
        setMapUrl(data.publicUrl);
    };

    useEffect(() => {
        if (!userData) {
            navigate("/signin");
            return;
        }
        if (!state?.id) return;
        getImageFromStorage();
        window.scrollTo(0, 0);
    }, []);
    

    if (!state?.id) return (
        <motion.section
            className="flex h-full w-full flex-col justify-center gap-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h2 className="text-5xl text-warning">Nothing to see here!</h2>
        </motion.section>

        
    )

    return (
        <motion.section
            className="flex w-full flex-col items-center gap-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h2 className="text-5xl text-primary">{state.campaign_name}</h2>

            <div className="relative flex-col items-center justify-center overflow-hidden">
                <InteractiveMap
                    campaignId={state.id}
                    profile={state.profile}
                    mapUrl={mapUrl}
                    isLoaded={isLoaded}
                    setIsLoaded={setIsLoaded}
                />
                <div
                    className={`absolute h-full w-full bg-black animate-pulse z-0}`}
                ></div>
            </div>

            <div className="rounded-lg bg-black bg-opacity-70 px-10 py-5 text-xl">
                <CampaignDescription state={state}/>
            </div>
        </motion.section>
    );
};
