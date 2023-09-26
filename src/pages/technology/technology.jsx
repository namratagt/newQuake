import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../../components/article/article";

const Technology = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const apiKey = "81d50c4bb34c4f108df59602d13ff8a6";
    const apiUrl = `https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, []);

  return (
    <div className="home-main">
      <h1 className="heading">Technology News</h1>
      <div className="container-home">
        {news.map((article) => (
          <div className="items-home">
            <Article
              key={article.source.id}
              title={article.title}
              content={article.description}
              date={article.publishedAt}
              author={article.author}
              url={article.url}
              imageUrl={article.urlToImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
