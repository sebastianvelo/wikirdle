import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ScreenPath } from "./common/utils/utils";
import Footer from "./layout/footer/Footer";
import CongratsScreen from "./screens/congrats/CongratsScreen";
import HomeScreen from "./screens/home/HomeScreen";
import GameScreen from "./screens/wiki/GameScreen";
import "./styles.css";
import WikiGameProvider from "./context/wiki-game/WikiGameProvider";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-950 to-black text-white flex flex-col">
      <Router>
        <WikiGameProvider>
          <Routes>
            <Route path={ScreenPath.home} element={<HomeScreen />} />
            <Route path={ScreenPath.wiki} element={<GameScreen />} />
            <Route path={ScreenPath.congrats} element={<CongratsScreen />} />
          </Routes>
        </WikiGameProvider>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
