import React, { useState } from "react";
import SearchBar from "../components/searchBar";
import Filters from "../components/filters";
import NewsList from "../components/newsList";
import SimpleCarousel from "../components/Carousel";

const Home = () => {
  const [news, setNews] = useState([]);

  return (
    <div>
      <h1 className="center-title">News Aggregator</h1>
      <SimpleCarousel />
      <SearchBar setNews={setNews} />
      <Filters setNews={setNews} />
      <NewsList news={news} />
    </div>
  );
};

export default Home;