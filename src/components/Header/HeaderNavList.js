import React, { useEffect, useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";
import { Link } from "react-scroll";
import useWindowDimension from "../../hooks/useWindowDimensions";

export const HeaderNavList = () => {
  const { setViewMenu } = useContext(DataContext);
  const { width } = useWindowDimension();
  const [contact, setContact] = useState(-40);

  useEffect(() => {
    if (width <= 350) setContact(550);
    else if (width <= 385) setContact(540);
    else if (width <= 440) setContact(500);
    else if (width <= 670) setContact(490);
    else if (width <= 946) setContact(200);
    else setContact(-40);
  }, [width]);

  const links = [
    { link: "home", offset: -150 },
    { link: "menu", offset: -150 },
    { link: "about", offset: -150 },
    { link: "blog", offset: -150 },
    { link: "contact", offset: contact },
  ];

  const handleClick = () => {
    setViewMenu(false);
  };

  return (
    <ul className="header__nav__list">
      {links.map((link, linkIndex) =>
        linkIndex === 0 ? (
          <Link
            key={link.link}
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
            key={link.link}
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
