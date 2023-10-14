import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../../components/article/article";
import "./home.css";
import Pagination from "../../components/pagination/pagination";

const Home = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const apiKey = "81d50c4bb34c4f108df59602d13ff8a6";
    const apiUrl = `https://newsapi.org/v2/everything?q=general&apiKey=${apiKey}`;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        const paginatedData = response.data.articles.slice(
          startIndex,
          endIndex
        );
        setNews(paginatedData);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        const paginatedData = response.data.articles.slice(
          startIndex,
          endIndex
        );
        setNews(paginatedData);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });

    //   axios
    //     .get(apiUrl)
    //     .then((response) => {
    //       const paginatedData = response.data.articles.slice(
    //         startIndex,
    //         endIndex
    //       );
    //       setNews(paginatedData);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching news data:", error);
    //     });
  }, [currentPage, itemsPerPage]);

  return (
    <div className="home-main">
      <h1 className="heading">Latest News</h1>
      <div className="container-home">
        {news.map((article) => (
          <div className="items-home" key={article.source.id}>
            <Article
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
      {/* <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(news.length / itemsPerPage)}
        onPageChange={handlePageChange}
      /> */}
    </div>
  );
};

export default Home;
