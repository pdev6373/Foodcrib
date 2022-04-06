import React from "react";
import { FooterLinks } from "./FooterLinks";
import { FooterNewsletter } from "./FooterNewsletter";
import { FooterSocial } from "./FooterSocial";

export const Footer = () => {
  const links = [
    {
      header: "our menu",
      links: [
        { link: "burger", offset: -150 },
        { link: "chicken", offset: -150 },
        { link: "pasta", offset: -150 },
        { link: "rice", offset: -150 },
        { link: "fries", offset: -40 },
        { link: "and more...", offset: -40 },
      ],
      needIcon: false,
    },
    {
      header: "quick links",
      links: [
        { link: "home", offset: -150 },
        { link: "menu", offset: -150 },
        { link: "about", offset: -150 },
        { link: "blog", offset: -150 },
        { link: "contact", offset: -40 },
      ],
      needIcon: true,
    },
    {
      header: "extra links",
      links: [
        { link: "my order", offset: -150 },
        { link: "my account", offset: -150 },
        { link: "terms of use", offset: -150 },
        { link: "privacy policy", offset: -150 },
      ],
      needIcon: true,
    },
  ];

  return (
    <section className="footer" id="contact">
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
