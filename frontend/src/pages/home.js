import React, { useState } from "react";
import SearchBar from "../components/searchBar";
import Filters from "../components/filters";
import NewsList from "../components/newsList";

const Home = () => {
  const [news, setNews] = useState([]);

  return (
    <div>
      <h1>News Aggregator</h1>
      <SearchBar setNews={setNews} />
      <Filters setNews={setNews} />
      <NewsList news={news} />
    </div>
  );
};

export default Home;
