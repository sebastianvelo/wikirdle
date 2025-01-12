import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchScreen from "./screens/search/SearchScreen";
import WikiScreen from "./screens/wiki/WikiScreen";
import CongratsScreen from "./screens/congrats/CongratsScreen";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchScreen />} />
        <Route path="/wiki/:article" element={<WikiScreen />} />
        <Route path="/congrats" element={<CongratsScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
