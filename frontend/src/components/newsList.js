import React from "react";
import NewsItem from "./newsItem";



const NewsList = ({ news }) => {
  return (
    <div>
      {news.length === 0 ? <p>No news found</p> : news.map((article, index) => <NewsItem key={index} article={article} />)}
    </div>
  );
};

export default NewsList;
