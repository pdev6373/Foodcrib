import React from "react";
import { Button } from "../Button";

export const HomeText = () => {
  return (
    <div className="home__text">
      <span>Are you hungry? </span>
      <h3>We are here to satisfy your cravings</h3>
      <p>
        We offer you the best food combination you can ever find, our products
        includes pizza, coca-cola, milk, hamburger, fried rice and a lot more.
        patronize us today and get the best foods at the best price
      </p>
      <Button text="Our menu" />
    </div>
  );
};
