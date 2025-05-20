import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/home/HomeScreen";
import WikiScreen from "./screens/wiki/WikiScreen";
import CongratsScreen from "./screens/congrats/CongratsScreen";
import { ScreenPath } from "./common/utils/utils";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ScreenPath.home} element={<HomeScreen />} />
        <Route path={ScreenPath.wiki} element={<WikiScreen />} />
        <Route path={ScreenPath.congrats} element={<CongratsScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
