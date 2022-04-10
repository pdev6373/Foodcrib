import React from "react";

export const AboutServices = ({ text, img }) => {
  return (
    <div className="about__body__content__services__details">
      <img
        className="about__body__content__services__details__img"
        src={img}
        alt="service"
      />
      <p className="about__body__content__services__details__text">{text}</p>
    </div>
  );
};
