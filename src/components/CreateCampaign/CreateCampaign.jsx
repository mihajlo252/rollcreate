import React, { useState } from "react";
import { motion } from "framer-motion";
import { Form, useNavigate } from "react-router-dom";
import { submitCampaign } from "../../utilities/submitCampaign";
import { useSelector } from "react-redux";

export const CreateCampaign = () => {
  const [name, setName] = useState("");
  const [map, setMap] = useState()

  const { userData } = useSelector((state) => state.userData);
  const navigate = useNavigate()


  // const handleNavigate = async (data) => {
  //   const reroute = `/campaigns/${data.dbData[0].id}`
  //   navigate(reroute)
  // }

  const handleCreateCampaign = async (e) => {
    e.preventDefault()
    const data = await submitCampaign(userData.user.id, name, map);
    // await handleNavigate(data)
  };

  return (
    <motion.section
      className="flex flex-col gap-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-5xl text-primary">Create Campaign</h2>
      <Form className="flex flex-col gap-5" onSubmit={handleCreateCampaign}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name your campaign:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Indispensables" />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="map">Upload your map:</label>
            <input type="file" onChange={(e) => setMap(e.target.files[0])}/>
        </div>
        <button className="btn btn-primary">Create</button>
      </Form>
    </motion.section>
  );
};
