import React from "react";
import { SectionHeader } from "../SectionHeader";

export const FooterNewsletter = () => {
  return (
    <div className="footer__newsletter">
      <SectionHeader text="Subscribe To Our Newsletter Today" />
      <form className="footer__newsletter__form">
        <input
          className="footer__newsletter__form__email"
          type="email"
          placeholder="enter your email"
        />
        <input
          onClick={(e) => e.preventDefault()}
          className="footer__newsletter__form__submit"
          type="submit"
          value="subscribe"
        />
      </form>
    </div>
  );
};
