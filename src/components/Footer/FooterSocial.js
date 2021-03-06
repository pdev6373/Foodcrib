import React from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

export const FooterSocial = () => {
  let links = [<FaFacebookF />, <FaTwitter />, <FaLinkedin />, <FaPinterest />];
  return (
    <div className="footer__social">
      {links.map((link, index) => (
        <button key={index} className="footer__social__links">
          {link}
        </button>
      ))}
    </div>
  );
};
