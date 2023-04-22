import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HelloPage from "./page/HelloPage";
import EventListPage from "./page/EventListPage"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<HelloPage />} />
        <Route path="/event" element={<EventListPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
