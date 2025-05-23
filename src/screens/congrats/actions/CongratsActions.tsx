import ReplayGameButton from "./ReplayGameButton";
import ResetGameButton from "./ResetGameButton";
import ShareButton from "./ShareButton";

const CongratsActions: React.FC = () => {
  return (
    <>
      <div className="flex flex-row gap-4 justify-center sm:justify-end pt-4">
        <ResetGameButton />
        <ReplayGameButton />
        <ShareButton />
      </div>
    </>
  );
};

export default CongratsActions;