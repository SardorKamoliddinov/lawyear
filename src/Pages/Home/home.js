import React from "react";
import Showcase from "../../components/Showcase/showcase";
import Card from "../../components/Cards/card";
import History from "../../components/History/history";
import Material from "../../components/Material/material";

function Home() {
  return (
    <div>
      <Showcase />
      <Card />
      <History />
      <Material />
    </div>
  );
}

export default Home;
