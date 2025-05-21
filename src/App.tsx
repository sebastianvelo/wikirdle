import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ScreenPath } from "./common/utils/utils";
import AppProvider from "./context/AppProvider";
import Footer from "./layout/footer/Footer";
import CongratsScreen from "./screens/congrats/CongratsScreen";
import StartScreen from "./screens/start/StartScreen";
import GameScreen from "./screens/wiki/GameScreen";
import "./output.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-950 to-black text-white flex flex-col">
      <Router>
        <AppProvider>
          <Routes>
            <Route path={ScreenPath.home} element={<StartScreen />} />
            <Route path={ScreenPath.wiki} element={<GameScreen />} />
            <Route path={ScreenPath.congrats} element={<CongratsScreen />} />
          </Routes>
        </AppProvider>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
