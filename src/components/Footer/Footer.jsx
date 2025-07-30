import React from "react";
import { BsGithub } from "react-icons/bs";

import FooterStyles from "./FooterStyles.module.css";
import { AnimatePresence } from "framer-motion";
import { Popup } from "../Popup";

export const Footer = () => {
  const [archived, setArchived] = React.useState(true);

  const handleArchived = (bool) => {
    localStorage.setItem("archived", bool);
    setArchived(bool);
  };

  return (
    <footer className={`text-white-content footer footer-center pb-8 pt-16 ${FooterStyles.footer}`}>
      <div className="flex flex-col gap-3">
        <AnimatePresence>
          {archived && (
            <Popup closerFunc={handleArchived}>
              <div className="relative flex h-min flex-col gap-5 bg-black bg-opacity-70 px-10 py-10">
                <button className="absolute right-5 top-5 text-lg text-accent" onClick={() => handleArchived(false)}>
                  x
                </button>
                <p className="text-md flex flex-col gap-2 text-left text-warning">
                  <span>⚠️ Project Archived</span>
                  <span>
                    This project is no longer actively maintained. It began as a personal tool for managing Dungeons & Dragons campaigns, with a
                    secondary feature for character creation. Over time, the focus shifted toward building a more robust and dedicated system for
                    character sheets and creation — not just for D&D, but with support for other TTRPGs planned in the future.
                  </span>
                  <span>
                    Development on the new project began in 2024 and is nearing it's first iteration. Key insights and lessons from this original version have
                    been carried over into the new system. Please feel free to explore the new project for the latest updates and continued work {" "}
                    <a href="https://https://github.com/mihajlo252/the-scrollforge" target="_blank" className="link text-primary">
                      here
                    </a>
                    and see the current version <a href="https://thescrollforge.netlify.app" target="_blank" className="link text-primary">here</a>.
                  </span>
                  <span className="text-sm text-secondary">This project remains available for reference purposes.</span>
                </p>
              </div>
            </Popup>
          )}
        </AnimatePresence>
        <button className="btn btn-circle btn-primary fixed bottom-5 right-5 px-10" onClick={() => handleArchived(true)} aria-label="Project Status">Project Status</button>
        <a href="https://github.com/mihajlo252" aria-label="Github Link">
          <BsGithub size={30} />
        </a>
        <div>
          <p className="font-bold">All rights reserved © Mihajlo Kostić 2023</p>
        </div>
      </div>
    </footer>
  );
};
