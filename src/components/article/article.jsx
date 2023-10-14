import React from "react";
import "./article.css";
const Article = ({ title, content, date, author, url, imageUrl }) => {
  return (
    <a href={url} target="_blank">
      <div className="box">
        <h2 className="title">{title}</h2>
        <img src={imageUrl} alt="car" />
      </div>
    </a>
  );
};

export default Article;
