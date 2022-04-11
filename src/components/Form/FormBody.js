import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export const FormBody = ({
  containerClass,
  formTitle,
  buttonText,
  hasAccount,
  formOption,
}) => {
  const { toggleFormClass } = useContext(DataContext);

  const formContainerClass = () => {
    if (toggleFormClass) {
      if (!hasAccount)
        return `form-container ${containerClass} form-container--is-txl form-container--is-z200`;
      else return `form-container ${containerClass} form-container--is-txl`;
    } else return `form-container ${containerClass}`;
  };

  return (
    <div className={formContainerClass()}>
      <form className="form-container__form" method="" action="">
        <h2 className="form-container__form__title">{formTitle}</h2>
        <div className="form-container__form__icons">
          <FaFacebook className="form-container__form__icons__icon" />
          <FaLinkedin className="form-container__form__icons__icon" />
          <FaTwitter className="form-container__form__icons__icon" />
        </div>
        <span className="form-container__form__span">{formOption}</span>
        {!hasAccount && (
          <input
            className="form-container__form__input"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          className="form-container__form__input"
          type="text"
          placeholder="Email"
          autoComplete="on"
        />
        <input
          className="form-container__form__input"
          type="password"
          placeholder="Password"
          autoComplete="off"
        />
        {hasAccount && (
          <div className="remember-me">
            <input id="remember-me" type="checkbox" value="Remember" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
        )}
        <button
          onClick={(e) => e.preventDefault()}
          className="form-container__form__button submit"
        >
          {buttonText}
        </button>

        {hasAccount && (
          <span className="form-container__form__link">
            Forgot your password?
            <a href="#void">Click here</a>
          </span>
        )}
      </form>
    </div>
  );
};
