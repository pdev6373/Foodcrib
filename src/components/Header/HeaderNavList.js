import React from "react";
// import { HeaderNavItems } from "./HeaderNavItems";
import { Link } from "react-scroll";

export const HeaderNavList = () => {
  const links = [
    { link: "home", offset: -150 },
    { link: "menu", offset: -150 },
    { link: "about", offset: -150 },
    { link: "blog", offset: -150 },
    { link: "contact", offset: -40 },
  ];
  return (
    <ul className="header__nav__list">
      {links.map((link, linkIndex) =>
        linkIndex == 0 ? (
          <Link
            spy={true}
            to={link.link}
            smooth={true}
            offset={link.offset}
            activeClass="active"
            duration={100}
          >
            <li className="header__nav__list__items">{link.link}</li>
          </Link>
        ) : (
          <Link
            spy={true}
            to={link.link}
            smooth={true}
            offset={link.offset}
            duration={100}
          >
            <li className="header__nav__list__items">{link.link}</li>
          </Link>
        )
      )}
    </ul>
  );
};
