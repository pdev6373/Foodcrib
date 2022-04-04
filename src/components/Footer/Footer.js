import React from "react";
import { FooterLinks } from "./FooterLinks";
import { FooterNewsletter } from "./FooterNewsletter";
import { FooterSocial } from "./FooterSocial";

export const Footer = () => {
  const links = [
    {
      header: "our menu",
      links: ["pizza", "burger", "chicken", "pasta", "and more..."],
      needIcon: false,
    },
    {
      header: "quick links",
      links: ["home", "menu", "about", "popular", "blog", "contact"],
      needIcon: true,
    },
    {
      header: "extra links",
      links: ["my order", "my account", "terms of use", "privacy policy"],
      needIcon: true,
    },
  ];

  return (
    <section className="footer">
      <FooterNewsletter />

      <div className="footer__links">
        {links.map((link) => (
          <FooterLinks
            header={link.header}
            links={link.links}
            needIcon={link.needIcon}
          />
        ))}
      </div>

      <FooterSocial />
    </section>
  );
};
