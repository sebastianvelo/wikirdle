import Icons from "../../common/icons/Icons";
import useWikiGame from "../../hooks/useWikiGame";

const ResetGameButton = () => {
  const { resetGame } = useWikiGame();

  return (
    <button onClick={resetGame} className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed">
      <Icons.Reset />
    </button>
  );
};

export default ResetGameButton;
