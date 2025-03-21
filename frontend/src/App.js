import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import History from "./pages/history";
import './index.css'; // Ensure the CSS file is imported

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <div className="nav-left">
            <Link to="/">NewsCentral</Link>
          </div>
          <div className="nav-right">
            <Link to="/history">History</Link>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2025 NewsCentral</p>
      </footer>
    </Router>
  );
};

export default App;