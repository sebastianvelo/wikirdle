import LoadingSpin from "@common/components/loading/LoadingSpin";
import useWikiGame from "@hooks/game/useWikiGame";
import Header from "../../layout/header/Header";
import WikiFrame from "./frame/WikiFrame";
import GameHeader from "./header/GameHeader";

const GameScreen: React.FC = () => {
  const { state } = useWikiGame();

  return (
    <>
      <Header showLangSelector={false} />
      <main className="flex-1 flex flex-col relative overflow-hidden min-h-screen pb-32 md:pb-0">
        <GameHeader />
        <WikiFrame />
      </main>
      <LoadingSpin isLoading={state.isLoading} />
    </>
  );
};

export default GameScreen;
