import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ setNews }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/news/search", {
        keyword,
      });
      setNews(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search news..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
