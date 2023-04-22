import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HelloPage from "./page/HelloPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<HelloPage />} />
      </Routes>
    </Router>
  );
}

export default App;
