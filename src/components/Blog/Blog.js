import React from "react";
import { SectionHeader } from "../SectionHeader";
import { BlogPost } from "./BlogPost";
import coconutMilk from "../../img/coconut-milk.jpg";
import popcorn from "../../img/popcorn.jpg";
import rice from "../../img/rice.jpg";
import yamarita from "../../img/yamarita.jpg";

export const Blog = () => {
  const blogPosts = [
    {
      title: "how to make coconut milk",
      text: "Homemade Coconut milk is made by extracting a white and milky substance from the flesh or meat of a mature coconut. Coconut milk is a wonderful alternative to dairy milk...",
      img: coconutMilk,
      date: "11th August, 2020",
      link: "http://uniquefoodies.com/coconut-milk/",
    },
    {
      title: "how to parboil or precook rice",
      text: "Learn how to parboil or precook rice and the advantages of parboiling rice. Parboiling is an act of partially cooking or boiling any food substance. Examples of food that can...",
      img: rice,
      date: "13th June, 2020",
      link: "http://uniquefoodies.com/how-to-parboil-or-precook-rice/",
    },
    {
      title: "How to make perfect homemade popcorn",
      text: "Popcorn is a popular snack eaten by tons of individuals. It’s readily available in supermarkets, eateries, cinemas, sporting events, and stores. It is gotten from a corn kernel that’s expanded and puffed when heated...",
      img: popcorn,
      date: "26th January, 2020",
      link: "http://uniquefoodies.com/popcorn/",
    },
    {
      title: "how to make yamarita (Egg Coated Yam)",
      text: "Yamarita is made from plain boiled yam that is coated in egg, flour, ginger, and garlic mixture and then deep-fried in oil. It is very popular among the Hausas, It is very easy to make and delicious. It takes about 40 to...",
      img: yamarita,
      date: "16th January, 2020",
      link: "http://uniquefoodies.com/yamarita/",
    },
  ];
  return (
    <section className="blog" id="blog">
      <SectionHeader text="Our Blogs" />

      <div className="blog__posts">
        {blogPosts.map((blogPost) => (
          <BlogPost
            key={blogPost.title}
            title={blogPost.title}
            text={blogPost.text}
            img={blogPost.img}
            date={blogPost.date}
            link={blogPost.link}
          />
        ))}
      </div>
    </section>
  );
};
