import React from "react";
import { HeaderNavItems } from "./HeaderNavItems";
import { Link } from "react-scroll";

export const HeaderNavList = () => {
  const links = ["home", "menu", "about", "blog", "contact"];
  return (
    <ul className="header__nav__list">
      {links.map((link, linkIndex) =>
        linkIndex == 0 ? (
          <Link spy={true} to={link} smooth={true} activeClass="activeClass">
            <HeaderNavItems key={link} link={link} />
          </Link>
        ) : (
          <Link spy={true} to={link} smooth={true}>
            <HeaderNavItems key={link} link={link} />
          </Link>
        )
      )}
    </ul>
  );
};
