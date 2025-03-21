import React from "react";

const HistoryList = ({ history }) => {
  return (
    <div>
      {history.length === 0 ? <p>No history found</p> : history.map((entry, index) => (
        <div key={index}>
          <p>{entry.timestamp}</p>
          <p>Filters: {JSON.stringify(entry.filters)}</p>
          <button onClick={() => console.log("Re-executing search...")}>Re-run search</button>
        </div>
      ))}
    </div>
  );
};

export default HistoryList;
