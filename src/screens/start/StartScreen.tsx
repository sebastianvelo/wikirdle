import Header from "../../layout/header/Header";
import GameInstructions from "./game-instructions/GameInstructions";
import SearchCard from "./search/SearchCard";

const StartScreen: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-6xl w-full mx-auto lg:px-4 lg:py-8 flex flex-col justify-between gap-8">
        <SearchCard />
        <GameInstructions />
      </main>
    </>
  );
};

export default StartScreen;
