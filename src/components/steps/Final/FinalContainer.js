import React, { useState } from "react";
import Final from "./Final";

const FinalContainer = () => {
  const [services, setServices] = useState([
    { id: 111, title: "FARDAL" },
    { id: 222, title: "REINSVOLL 1" },
    { id: 333, title: "REINSVOLL 2" },
    { id: 444, title: "FORSAND" }
  ]);

  const removeServiceCreator = id => {
    console.log(`REMOVE ${id}`);
  };

  return <Final services={services} removeItem={removeServiceCreator} />;
};

export default FinalContainer;
