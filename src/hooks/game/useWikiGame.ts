import { useContext } from "react";
import WikiGameContext from "../../context/wiki-game/WikiGameContext";

const useWikiGame = () => {
  const context = useContext(WikiGameContext);
  
  if (context === undefined) {
    throw new Error('useWikiGame debe ser usado dentro de un WikiGameProvider');
  }
  
  return context;
};

export default useWikiGame;