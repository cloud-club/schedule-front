import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventListPage from "./page/EventListPage";
import MainPage from "./page/MainPage";
import Register from "./page/Register";
import ResultPage from "./page/ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventListPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
