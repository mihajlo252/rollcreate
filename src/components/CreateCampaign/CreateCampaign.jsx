import React, { useState } from "react";
import { motion } from "framer-motion";
import { Form } from "react-router-dom";

export const CreateCampaign = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  return (
    <motion.section
      className="flex flex-col gap-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-5xl text-primary">Create Campaign</h2>
      <Form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name your campaign:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Indispensables" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="type">Type:</label>
          <input type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} placeholder="Oneshot" />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="map">Upload your map:</label>
            <input type="file" />
        </div>
      </Form>
    </motion.section>
  );
};
