import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabase";

import { useSelector } from "react-redux";

import { InteractiveMap } from "../InteractiveMap/InteractiveMap";
import Markdown from "markdown-to-jsx";

export const Campaign = () => {
    const [mapUrl, setMapUrl] = useState("");
    const [description, setDescription] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [updatedDescription, setUpdatedDescription] = useState();

    const { state } = useLocation();

    const { userData } = useSelector((state) => state.userData);
    const navigate = useNavigate();

    const getImageFromStorage = async () => {
        const { data } = supabase.storage
            .from("maps")
            .getPublicUrl(state.meta_data.map);
        setMapUrl(data.publicUrl);
    };
    const getDescriptionFromStorage = async () => {
        const { data } = supabase.storage
            .from("descriptions")
            .getPublicUrl(state.meta_data.description);
        const response = await fetch(`${data.publicUrl}.md`);
        setDescription(await response.text());
    };

    const updateDescription = async (e) => {
        const { data, error } = await supabase.storage
            .from("descriptions")
            .update(`${state.meta_data.description}.md`, updatedDescription, {
                cacheControl: "3600",
                upsert: true,
            });
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

	useEffect(() => {
		getDescriptionFromStorage();
	}, [updatedDescription])

    if (!state?.id) return <h1>This campaign doesn't exist!</h1>;

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
                {userData.user.id === state.profile && (
                    <div className="w-full px-10 py-5">
                        <button
                            className="btn btn-ghost"
                            onClick={() => window.my_modal_1.showModal()}
                        >
                            Upload edit
                        </button>
                        <dialog id="my_modal_1" className="modal">
                            <form
                                method="dialog"
                                className="modal-box"
                                onSubmit={(e) => updateDescription(e)}
                            >
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="map">
                                        Upload your updated description (.md):
                                    </label>
                                    <input
                                        type="file"
                                        id="description"
                                        onChange={(e) =>
                                            setUpdatedDescription(
                                                e.target.files[0]
                                            )
                                        }
                                    />
                                </div>
                                <button type="submit">Update</button>
                            </form>
                        </dialog>
                    </div>
                )}
                <Markdown
                    options={{
                        overrides: {
                            h1: {
                                component: (props) => (
                                    <h1 className="mb-10 text-5xl font-bold text-secondary max-[700px]:text-4xl">
                                        {props.children}
                                    </h1>
                                ),
                            },
                            p: {
                                component: (props) => (
                                    <p className="py-6 max-[700px]:text-[.9rem]">
                                        {props.children}
                                    </p>
                                ),
                            },
                        },
                    }}
                >
                    {description}
                </Markdown>
            </div>
        </motion.section>
    );
};
