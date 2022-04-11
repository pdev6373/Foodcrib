import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

export const FooterLinks = ({ header, links, needIcon }) => {
  return (
    <div className="footer__links__link">
      <h3 className="footer__links__link__header">{header}</h3>
      <div className="footer__links__link__link-wrapper">
        {links.map((link) =>
          needIcon ? (
            <div key={link.link} className="footer-links">
              <FaArrowRight className="footer-links__icon" />

              <Link
                key={link.link}
                spy={true}
                to={link.link}
                smooth={true}
                offset={link.offset}
                activeClass="active"
                duration={100}
              >
                <span className="footer__links__link__link-wrapper__link">
                  {link.link}
                </span>
              </Link>
            </div>
          ) : (
            <span
              key={link.link}
              className="footer__links__link__link-wrapper__link"
            >
              {link.link}
            </span>
          )
        )}
      </div>
    </div>
  );
};
