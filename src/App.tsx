import { ScreenPath } from "@common/utils/utils";
import AppProvider from "@context/AppProvider";
import Footer from "@layout/footer/Footer";
import CongratsScreen from "@screens/congrats/CongratsScreen";
import StartScreen from "@screens/start/StartScreen";
import GameScreen from "@screens/wiki/GameScreen";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./output.css";

const App: React.FC = () => {
  return (
    <div className="h-screen overflow-hidden lg:h-auto lg:min-h-screen bg-gradient-to-t from-primary-100 via-white to-primary-100 dark:from-primary-950 dark:to-black flex flex-col">
      <Router>
        <AppProvider>
          <Routes>
            <Route path={ScreenPath.home} element={<StartScreen />} />
            <Route path={ScreenPath.wikiPattern} element={<GameScreen />} />
            <Route path={ScreenPath.congrats} element={<CongratsScreen />} />
          </Routes>
        </AppProvider>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
