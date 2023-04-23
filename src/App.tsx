import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HelloPage from "./page/HelloPage";
import EventListPage from "./page/EventListPage"
import MainPage from "./page/MainPage";
import Register from "./page/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<HelloPage />} />
        <Route path="/event" element={<EventListPage/>} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
