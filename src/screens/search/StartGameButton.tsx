import { useNavigate } from "react-router-dom";
import { ScreenPath } from "../../common/utils/utils";

interface StartGameButtonProps {
  origin: string;
  destination: string;
}

const StartGameButton = (props: StartGameButtonProps) => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate(ScreenPath.getWiki(props.origin, props.destination));
  };

  return (
    <button
      onClick={startGame}
      disabled={!props.origin || !props.destination}
      className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed "
    >
      Jugar
    </button>
  );
};

export default StartGameButton;
