import React from "react";
import './newsItem.css'; // Import the CSS file for NewsItem

const NewsItem = ({ article }) => {
  return (
    <div className="card">
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="card-image" />}
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default NewsItem;