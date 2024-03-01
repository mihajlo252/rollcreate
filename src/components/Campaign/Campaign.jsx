import { motion } from "framer-motion";
import React, { lazy, useEffect, useState } from "react";
import { Form, useLocation } from "react-router-dom";
import { supabase } from "../../supabase/supabase";

export const Campaign = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const {state} = useLocation()

  const getImageFromStorage = async () => {
    const { data } = supabase.storage.from("maps").getPublicUrl(state.meta_data.map);
    setImageUrl(data.publicUrl);
  };

  useEffect(() => {
    getImageFromStorage();
  }, []);

  return (
    <motion.section
      className="grid w-full grid-cols-[2fr_1fr] bg-black bg-opacity-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex h-full w-full relative items-center justify-center ">
        {!isLoaded && <div className={`w-full h-full bg-[#0d0d0d] animate-pulse opacity-35 ${isLoaded && "hidden"}`}></div> }
          <img
            src={imageUrl}
            alt="map"
            className={`h-full w-full absolute opacity-1 transition-all duration-[250ms] ${!isLoaded && "opacity-0"}`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
        
      </div>
      <aside className="flex flex-col items-center px-5 py-10">
        <h2 className="text-4xl text-primary">{state.campaign_name}</h2>
      </aside>
    </motion.section>
  );
};
