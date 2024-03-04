import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../../supabase/supabase";

import { InteractiveMap } from "../InteractiveMap/InteractiveMap";

export const Campaign = () => {
	const [mapUrl, setMapUrl] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);

	const { state } = useLocation();

	const getImageFromStorage = async () => {
		const { data } = supabase.storage.from("maps").getPublicUrl(state.meta_data.map);
		setMapUrl(data.publicUrl);
	};

	useEffect(() => {
		getImageFromStorage();
		window.scrollTo(0, 0);
	}, []);

	return (
		<motion.section
			className="flex w-full flex-col items-center gap-20"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<h2 className="text-5xl text-primary">{state.campaign_name}</h2>

			<div className="relative flex-col items-center justify-center overflow-hidden">
				<InteractiveMap campaignId={state.id} mapUrl={mapUrl} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
				<div className={`absolute h-full w-full bg-black animate-pulse z-0}`}></div>
			</div>

			<div className="rounded-lg bg-black bg-opacity-70 px-10 py-5 text-xl">
				<h3 className="text-4xl">Title</h3>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, illos enim debitis quam iure et iusto laborum
				exercitationem? Aliquid nostrum optio autem consequatur laborum iusto repellendus minima, ad consectetur
				voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, illo enim debitis quam iure et iusto
				laborum exercitationem? Aliquid nostrum optio autem consequatur laborum iusto repellendus minima, ad consectetur
				voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, illo enim debitis quam iure et iusto
				laborum exercitationem? Aliquid nostrum optio autem consequatur laborum iusto repellendus minima, ad consectetur
				voluptate?
				<br />
				<h3 className="text-4xl">Title</h3>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, illo enim debitis quam iure et iusto laborum
				exercitationem? Aliquid nostrum optio autem consequatur laborum iusto repellendus minima, ad consectetur
				voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, illo enim debitis quam iure et iusto
				laborum exercitationem? Aliquid nostrum optio autem consequatur laborum iusto repellendus minima, ad consectetur
				voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, illo enim debitis quam iure et iusto
				laborum exercitationem? Aliquid nostrum optio autem consequatur laborum iusto repellendus minima, ad consectetur
				voluptate?
				<br />
				<h3 className="text-4xl">Title</h3>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, illo enim debitis quam iure et iusto laborum
				exercitationem? Aliquid nostrum optio autem consequatur laborum iusto repellendus minima, ad consectetur
				voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, illo enim debitis quam iure et iusto
				laborum exercitationem? Aliquid nostrum optio autem consequatur laborum iusto repellendus minima, ad consectetur
				voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, illo enim debitis quam iure et iusto
				laborum exercitationem? Aliquid nostrum optio autem consequatur laborum iusto repellendus minima, ad consectetur
				voluptate?
				<br />
				<h3 className="text-4xl">Title</h3>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, illo enim debitis quam iure et iusto laborum
				exercitationem? Aliquid nostrum optio autem consequatur laborum iusto repellendus minima, ad consectetur
				voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, illo enim debitis quam iure et iusto
				laborum exercitationem? Aliquid nostrum optio autem consequatur laborum iusto repellendus minima, ad consectetur
				voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, illo enim debitis quam iure et iusto
				laborum exercitationem? Aliquid nostrum optio autem consequatur laborum iusto repellendus minima, ad consectetur
				voluptate?
				<br />
				<h3 className="text-4xl">Title</h3>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, illo enim debitis quam iure et iusto laborum
				exercitationem? Aliquid nostrum optio autem consequatur laborum iusto repellendus minima, ad consectetur
				voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, illo enim debitis quam iure et iusto
				laborum exercitationem? Aliquid nostrum optio autem consequatur laborum iusto repellendus minima, ad consectetur
				voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, illo enim debitis quam iure et iusto
				laborum exercitationem? Aliquid nostrum optio autem consequatur laborum iusto repellendus minima, ad consectetur
				voluptate?
			</div>
		</motion.section>
	);
};
