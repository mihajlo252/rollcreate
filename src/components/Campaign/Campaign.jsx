import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { supabase } from "../../supabase/supabase";


export const Campaign = () => {
	const [imageUrl, setImageUrl] = useState("");

	const getImageFromStorage = async () => {
		const { data } = supabase.storage.from("maps").getPublicUrl("map.png");
		setImageUrl(data.publicUrl);
	};

  useEffect(() => {
    getImageFromStorage();
  }, []);


	return (
		<motion.section
			className="grid w-full grid-cols-[2fr_1fr]"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<div className="flex h-full w-full items-center justify-center bg-black">
				<img src={imageUrl} alt="map" className="h-full w-full" />
			</div>
			<aside className="flex flex-col items-center bg-black bg-opacity-60 px-5 py-10">
				<h2 className="text-4xl text-primary">Campaign Name</h2>
			</aside>
		</motion.section>
	);
};
