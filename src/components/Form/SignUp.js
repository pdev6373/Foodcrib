import React from "react";

export const SignUp = () => {
  return (
    <form className={viewLoginForm ? "login-form" : "invisible"}>
      <h3 className="login-form__header">REATE AN AOUNT</h3>
      <input className="login-form__email" type="email" placeholder="email" />
      <input
        className="login-form__password"
        type="password"
        placeholder="password"
      />
      <div className="login-form__remember-wrapper">
        <input
          id="login-form__remember"
          className="login-form__remember__box"
          type="checkbox"
        />
        <label className="login-form__remember" htmlFor="login-form__remember">
          Remember me
        </label>
      </div>
      <input className="login-form__submit" type="button" value="Login" />
      <div className="login-form__text">
        <p className="login-form__text__forgot">
          forgot password? <a href="#">click here</a>
        </p>
        <p className="login-form__text__create">
          don't have an account? <a href="#">sign up</a>
        </p>
      </div>
    </form>
  );
};
