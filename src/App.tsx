import { ScreenPath } from "@common/utils/utils";
import LanguageProvider from "@context/language/LanguageProvider";
import WikiGameProvider from "@context/wiki-game/WikiGameProvider";
import Footer from "@layout/footer/Footer";
import CongratsScreen from "@screens/congrats/CongratsScreen";
import GameScreen from "@screens/game/GameScreen";
import StartScreen from "@screens/start/StartScreen";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./output.css";
import ToastProvider from "@context/toast/ToastProvider";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ToastProvider>
        <div className="h-screen overflow-hidden lg:h-auto lg:min-h-screen bg-gradient-to-t from-primary-100 via-white to-primary-100 dark:from-primary-950 dark:to-black flex flex-col">
          <Router>
            <WikiGameProvider>
              <Routes>
                <Route path={ScreenPath.home} element={<StartScreen />} />
                <Route path={ScreenPath.wikiPattern} element={<GameScreen />} />
                <Route path={ScreenPath.congrats} element={<CongratsScreen />} />
              </Routes>
            </WikiGameProvider>
          </Router>
          <Footer />
        </div>
      </ToastProvider>
    </LanguageProvider>
  );
};

export default App;
