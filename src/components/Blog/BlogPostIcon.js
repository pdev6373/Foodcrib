import React from 'react'
import { FaTag } from 'react-icons/fa';

export const BlogPostIcon = ({ food }) => {
  return (
    <div className="blog__post__content__tags__icon">
      <FaTag
        style={{
          color: "#64af76",
          fontSize: "1.5rem",
        }}
      />
      <a>{food} / </a>
    </div>
  );
}
