import React from "react";
import { HomeImg } from "./HomeImg";
import { HomeText } from "./HomeText";

import img from "../../img/xyz.png";

export const Home = () => {
  return (
    <section className="home" id='home'>
      <HomeText />
      <HomeImg img={img} />
    </section>
  );
};
