import React from "react";
import { SectionHeader } from "../SectionHeader";
import useWindowDimension from "../../hooks/useWindowDimensions";

export const FooterNewsletter = () => {
  const { width } = useWindowDimension();

  return (
    <div className="footer__newsletter">
      {width > 930 ? (
        <SectionHeader text="Subscribe To Our Newsletter" />
      ) : (
        <SectionHeader text="Newsletter" />
      )}
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
