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
  // const [mySwitchClass, setMySwitchClass] = useState(switchClass);

  // const changeForm = () => {
  // const switchCtn = document.querySelector(".switch");
  // const switchC1 = document.querySelector(".switch__container--one");
  // const switchC2 = document.querySelector(".switch__container--two");
  // const switchCircle = document.querySelectorAll(".switch__circle");
  // const aContainer = document.querySelector(".form-container--signup");
  // const bContainer = document.querySelector(".form-container--login");
  // // setToggleSwitchClass(!toggleSwitchClass);
  // switchCtn.classList.add("switch--is-gx");
  // setTimeout(function () {
  //   switchCtn.classList.remove("switch--is-gx");
  // }, 1500);

  // switchCtn.classList.toggle("switch--is-txr");
  // switchCircle[0].classList.toggle("switch__circle--is-txr");
  // switchCircle[1].classList.toggle("switch__circle--is-txr");

  // // if (toggleSwitchClass) {
  // //   setMySwitchClass(`${mySwitchClass} switch__container--is-hidden`);
  // // } else {
  // //   setMySwitchClass(switchClass);
  // // }

  // switchC1.classList.toggle("switch__container--is-hidden");
  // switchC2.classList.toggle("switch__container--is-hidden");
  // aContainer.classList.toggle("form-container--is-txl");
  // bContainer.classList.toggle("form-container--is-txl");

  // bContainer.classList.toggle("form-container--is-z200");
  // };

  // const handleChangeForm = () => {
  //   setToggleFormClass(!toggleFormClass);

  //   if (toggleFormClass) {
  //     setMySwitchClass(`${switchClass} switch--is-gx switch--is-txr`);
  //     setTimeout(() => setMySwitchClass(`${switchClass} switch--is-txr`), 1500);
  //   } else {
  //     setMySwitchClass(`${switchClass} switch--is-gx`);
  //     setTimeout(() => setMySwitchClass(switchClass), 1500);
  //   }

  // setMySwitchClass(`${mySwitchClass} switch--is-gx`);
  // setTimeout(() => setMySwitchClass(switchClass), 1500);

  // toggleFormClass
  //   ? setMySwitchClass(`${mySwitchClass} switch--is-txr`)
  //   : setMySwitchClass(switchClass);
  // };

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
