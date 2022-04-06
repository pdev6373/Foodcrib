import React from "react";
import { FaCalendar } from "react-icons/fa";

export const BlogPost = ({ title, text, img, date, link }) => {
  return (
    <div className="blog__post">
      <div className="blog__post__img-wrapper">
        <img className="blog__post__img-wrapper__img" src={img} />
        <h3 className="blog__post__img-wrapper__date">
          <FaCalendar
            style={{
              color: "#64af76",
            }}
          />
          {date}
        </h3>
      </div>

      <div className="blog__post__content">
        <h3 className="blog__post__content__title">{title}</h3>
        <p className="blog__post__content__text">{text}</p>
        <a className="blog__post__content__link" target="_blank" href={link}>
          Read More
        </a>
      </div>
    </div>
  );
};
