import React from "react";
import PlayAgainButton from "./PlayAgainButton";
import ResetGameButton from "./ResetGameButton";
import ShareButton from "./ShareButton";

const CongratsActions: React.FC = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-end pt-4">
        <ResetGameButton />
        <PlayAgainButton />
        <ShareButton />
      </div>
    </>
  );
};

export default CongratsActions;