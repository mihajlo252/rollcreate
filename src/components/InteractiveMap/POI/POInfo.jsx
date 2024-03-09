import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const POInfo = () => {

	const poi = useSelector((state) => state.poi.poi);

	useEffect(() => {
		console.log(poi);
	}, [])

	return (
		<>
			<h2 className="self-center text-3xl text-primary">{poi.name}</h2>
			<div className="flex flex-col">
				<h3>NPCs: </h3>
        <ul>
          <li>NPC 1</li>
          <li>NPC 2</li>
          <li>NPC 3</li>
        </ul>
			</div>
			<div>
				<h3>Lore: </h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis culpa, voluptates rerum repellendus labore
					ipsa unde beatae dolorum expedita perspiciatis modi minus consequuntur voluptatem, exercitationem dignissimos
					autem ea nesciunt cumque.
				</p>
			</div>
		</>
	);
};
