import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { Link } from "react-scroll";

export const HeaderNavList = () => {
  const { setViewMenu } = useContext(DataContext);

  const links = [
    { link: "home", offset: -150 },
    { link: "menu", offset: -150 },
    { link: "about", offset: -150 },
    { link: "blog", offset: -150 },
    { link: "contact", offset: -40 },
  ];

  const handleClick = () => {
    setViewMenu(false);
  };

  return (
    <ul className="header__nav__list">
      {links.map((link, linkIndex) =>
        linkIndex == 0 ? (
          <Link
            className="header__nav__list__link"
            spy={true}
            to={link.link}
            smooth={true}
            offset={link.offset}
            activeClass="active"
            duration={100}
          >
            <li className="header__nav__list__items" onClick={handleClick}>
              {link.link}
            </li>
          </Link>
        ) : (
          <Link
            className="header__nav__list__link"
            spy={true}
            to={link.link}
            smooth={true}
            offset={link.offset}
            duration={100}
          >
            <li className="header__nav__list__items" onClick={handleClick}>
              {link.link}
            </li>
          </Link>
        )
      )}
    </ul>
  );
};
