import Markdown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase";
import { useSelector } from "react-redux";

export const CampaignDescription = ({ state }) => {
    const [desc, setDesc] = useState("");
    const [updatedDesc, setUpdatedDesc] = useState({});
    const { userData } = useSelector((state) => state.userData);

    const updateDescription = async () => {
        const parsedDesc = await updatedDesc.text();
        const { error } = await supabase
            .from("campaigns")
            .update({ campaign_description:  parsedDesc})
            .eq("id", state.id);
            if (error) {
                console.error(error);
                return;
            }
            setDesc(parsedDesc);
    };

    useEffect(() => {
        (async () => {
            const { data, error } = await supabase 
                .from("campaigns")
                .select("campaign_description")
                .eq("id", state.id)
                .single();
            if (error) {
                console.error(error);
                return;
            }
            setDesc(data.campaign_description);
        })();
    }, [updatedDesc]);


    return (
        <>
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
                            onSubmit={updateDescription}
                        >
                            <div className="flex flex-col gap-2">
                                <label htmlFor="description">
                                    Upload your updated description (*.md):
                                </label>
                                <input
                                    type="file"
                                    id="description"
                                    name="description"
                                    onChange={(e) => setUpdatedDesc(e.target.files[0])}
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
                                <h1 className="mb-10 text-5xl font-bold text-primary max-[700px]:text-4xl">
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
                {desc}
            </Markdown>
        </>
    );
};
