import GamePathBreadcrumb from "../../../common/components/breadcrumb/GamePathBreadcrumb";

const CongratsGamePath: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3 dark:text-white">Tu recorrido:</h2>
      <GamePathBreadcrumb />
    </div>
  );
};

export default CongratsGamePath;