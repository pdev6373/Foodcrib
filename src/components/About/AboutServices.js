import React from "react";

export const AboutServices = ({ text, img }) => {
  return (
    <div className="about__content__services__details">
      <img className="about__content__services__details__img" src={img} />
      <p className="about__content__services__details__text">{text}</p>
    </div>
  );
};
