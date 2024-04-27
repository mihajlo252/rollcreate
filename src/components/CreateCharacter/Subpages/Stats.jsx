import React from "react";
import { motion } from "framer-motion";

export const Stats = ({ metaData, setMetaData }) => {
    const calcStatMod = (value) => {
        return value >= 10
            ? "+" + Math.floor((value - 10) / 2).toString()
            : "+0";
    };

    const rollDie = (stat) => {
        setMetaData((prev) => ({
            ...prev,
            stats: prev.stats.map((s) =>
                s.name === stat.name
                    ? { ...s, value: Math.floor(Math.random() * 20).toString() }
                    : s
            ),
        }));
        setMetaData((prev) => ({
            ...prev,
            stats: prev.stats.map((s) =>
                s.name === stat.name
                    ? {
                          ...s,
                          mod: calcStatMod(parseInt(s.value)),
                      }
                    : s
            ),
        }));
    };

    return (
        <motion.section
            className="grid h-full w-full items-center justify-around"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="flex gap-2">
                {metaData.stats.map((stat) => (
                    <div key={stat.name} className="grid">
                        <label>{stat.name}</label>
                        <input
                            value={stat.value}
                            className="text-neutral-content"
                            readOnly
                        ></input>
                        <button
                            className="btn btn-ghost mt-2"
                            onClick={() => rollDie(stat)}
                        >
                            ROLL
                        </button>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};
