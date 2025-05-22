import { useContext } from "react";
import WikiGameContext from "../../context/wiki-game/WikiGameContext";
import { WikiGameContextType } from "../../context/wiki-game/types";

const useWikiGame = (): WikiGameContextType => {
  const context = useContext(WikiGameContext);
  
  if (context === undefined) {
    throw new Error('useWikiGame debe ser usado dentro de un WikiGameProvider');
  }
  
  return context;
};

export default useWikiGame;