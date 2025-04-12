import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        {/* Add other routes here like About, BookUs etc */}
      </Routes>
    </Router>
  );
}

export default App;
