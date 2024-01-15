import React from "react";

export const Filter = ({ options, setFilter }) => {
	return (
		<select onChange={(e) => setFilter(e.target.value)}>
			{options.map((option, idx) => (
				<option key={idx} value={option} defaultChecked={option === "all"}>
					{option}
				</option>
			))}
		</select>
	);
};
