import GamePathBreadcrumb from "@common/components/breadcrumb/GamePathBreadcrumb";
import { useState } from "react";
import GameActions from "./actions/GameActions";
import GameStats from "./stats/GameStats";

const GameHeader: React.FC = () => {
    const [showGamePath, setShowGamePath] = useState(false);

    return (
        <header className="bg-white/80 dark:bg-black/40 backdrop-blur-sm shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex flex-wrap items-center justify-between gap-6 w-full">
                    <GameStats />
                    <GameActions toggleShowPath={() => setShowGamePath(!showGamePath)} />
                </div>
                {showGamePath && <GamePathBreadcrumb />}
            </div>
        </header>
    );
};

export default GameHeader;