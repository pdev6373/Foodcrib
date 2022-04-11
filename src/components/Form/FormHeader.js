import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export const FormHeader = ({
  title,
  description,
  buttonText,
  switchClass,
  switchHidden,
}) => {
  const { toggleFormClass, setToggleFormClass } = useContext(DataContext);

  const mySwitchClass = () => {
    if (toggleFormClass) {
      if (switchHidden) return switchClass;
      else return `${switchClass} switch__container--is-hidden`;
    } else {
      if (switchHidden) return `${switchClass} switch__container--is-hidden`;
      else return switchClass;
    }
  };

  return (
    <div className={mySwitchClass()}>
      <h2 className="switch__container__title">{title}</h2>
      <p className="switch__container__description">{description}</p>
      <button
        onClick={() => setToggleFormClass(!toggleFormClass)}
        className="switch__container__button button switch-btn"
      >
        {buttonText}
      </button>
    </div>
  );
};
