import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../../components/article/article";
import "./enter.css";
const Entertainment = () => {
  const [EntertainmentNews, setEntertainmentNews] = useState([]);

  useEffect(() => {
    const apiKey = "81d50c4bb34c4f108df59602d13ff8a6";
    const apiUrl = `https://newsapi.org/v2/everything?q=entertainment&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setEntertainmentNews(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, []);

  return (
    <div className="ent-main">
      <h1>Entertainment News</h1>
      {EntertainmentNews.map((article) => (
        <div className="container-ent">
          <Article
            key={article.source.id}
            title={article.title}
            content={article.content}
            date={article.date}
            author={article.author}
            url={article.url}
            imageUrl={article.urlToImage}
          />
        </div>
      ))}
    </div>
  );
};

export default Entertainment;
