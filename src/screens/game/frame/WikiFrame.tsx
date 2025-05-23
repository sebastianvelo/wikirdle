import useWikiGame from "@hooks/game/useWikiGame";

const WikiFrame: React.FC = () => {
  const { state, handleLinkClick } = useWikiGame();

  return (
    <>
      {!state.isLoading && (
        <div
          id="wiki"
          className="scrollbar lg:rounded-md dark:invert w-full h-full bg-white/50 text-black text-justify shadow-inner scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-gray-200 lg:w-3/4 lg:mx-auto border-x border-primary-900/20 py-4 px-8 max-h-screen overflow-y-scroll overflow-x-hidden"
          onClick={handleLinkClick}
          dangerouslySetInnerHTML={{ __html: state.htmlContent }}
        ></div>
      )}
    </>
  );
};

export default WikiFrame;