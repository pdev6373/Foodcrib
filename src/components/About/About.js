import React from "react";
import { SectionHeader } from "../SectionHeader";
import { AboutServices } from "./AboutServices";
import { Button } from "../Button";

import aboutImg from "../../img/grilled-chicken-breast-and-vegetables.png";
import img1 from "../../img/serv-1.png";
import img2 from "../../img/serv-2.png";
import img3 from "../../img/serv-3.png";
import img4 from "../../img/serv-4.png";

export const About = () => {
  const services = [
    {
      img: img1,
      text: "Fast Delivery",
    },
    {
      img: img2,
      text: "Fresh Food",
    },
    {
      img: img3,
      text: "Quality Food",
    },
    {
      img: img4,
      text: "24/7 Support",
    },
  ];

  return (
    <section className="about" id="about">
      <SectionHeader text="About us" />

      <div className="about__body">
        <img className="about__body__image" src={aboutImg} alt="about" />

        <div className="about__body__content">
          <p className="about__body__content__text">
            we are a fast growing food resturant that provides quality foods all
            over the world, we are a remote based company that offers a 24/7
            services to our customers and try our best to provide the best
            services to them.
          </p>
          <Button text="Read More" />
          <h3 className="about__body__content__heading">why choose us</h3>

          <div className="about__body__content__services">
            {services.map((service) => (
              <AboutServices
                key={service.text}
                text={service.text}
                img={service.img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
