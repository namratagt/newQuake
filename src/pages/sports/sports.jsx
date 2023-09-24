import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../../components/article/article";

const Sports = () => {
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
    // Fetch sports news data from your API using axios or any other method.
    axios
      .get("YOUR_SPORTS_NEWS_API_ENDPOINT")
      .then((response) => {
        setSportsNews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sports news data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Sports News</h1>
      {sportsNews.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          content={article.content}
          date={article.date}
          author={article.author}
        />
      ))}
    </div>
  );
};

export default Sports;
