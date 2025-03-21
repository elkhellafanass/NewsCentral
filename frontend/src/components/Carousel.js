import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';

const SimpleCarousel = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/news/search", {
          keyword: "latest",
        });
        setArticles(response.data.slice(0, 5)); // Display only the first 5 articles
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {articles.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default SimpleCarousel;