import React, { useEffect, useState } from "react";
import HistoryList from "../components/historyList";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/news/history")
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.error("Error fetching history:", err));
  }, []);

  return (
    <div>
      <h1>Search History</h1>
      <HistoryList history={history} />
    </div>
  );
};

export default History;
