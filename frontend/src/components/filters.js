import React, { useState } from "react";
import axios from "axios";

const Filters = ({ setNews }) => {
  const [category, setCategory] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleFilter = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/news/search", {
        category,
        from,
        to,
      });
      setNews(response.data);
    } catch (error) {
      console.error("Error applying filters:", error);
    }
  };

  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="business">Business</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
      <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
      <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filters;
