import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HelloPage from "./page/HelloPage";
import MainPage from "./page/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<HelloPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
