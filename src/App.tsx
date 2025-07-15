import { ScreenPath } from "@common/utils/utils";
import WikiGameProvider from "@context/wiki-game/WikiGameProvider";
import Footer from "@layout/footer/Footer";
import CongratsScreen from "@screens/congrats/CongratsScreen";
import GameScreen from "@screens/game/GameScreen";
import PrivacyPolicyScreen from "@screens/privacy-policy/PrivacyPolicyScreen";
import StartScreen from "@screens/start/StartScreen";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./output.css";

const App: React.FC = () => {
  return (
        <div className="h-screen overflow-hidden lg:h-auto lg:min-h-screen bg-gradient-to-bl from-primary-200 via-white to-primary-100 dark:from-primary-950 dark:via-black dark:to-primary-950 flex flex-col">
          <Router>
            <WikiGameProvider>
              <Routes>
                <Route path={ScreenPath.home} element={<StartScreen />} />
                <Route path={ScreenPath.wikiPattern} element={<GameScreen />} />
                <Route path={ScreenPath.congrats} element={<CongratsScreen />} />
                <Route path={ScreenPath.privacyPolicy} element={<PrivacyPolicyScreen />} />
              </Routes>
            </WikiGameProvider>
          </Router>
          <Footer />
        </div>
  );
};

export default App;
