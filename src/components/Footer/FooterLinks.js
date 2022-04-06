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
            <div className="footer-links">
              <FaArrowRight
                style={{
                  color: "#64af76",
                  fontSize: "1.4rem",
                }}
              />

              <Link
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
            <a className="footer__links__link__link-wrapper__link">
              {link.link}
            </a>
          )
        )}
      </div>
    </div>
  );
};
