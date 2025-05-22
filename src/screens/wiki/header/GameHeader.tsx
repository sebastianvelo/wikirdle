import React, { useState } from "react";
import GamePathBreadcrumb from "../../../common/components/breadcrumb/GamePathBreadcrumb";
import GameStats from "./stats/GameStats";

const GameHeader: React.FC = () => {
    const [showGamePath, setShowGamePath] = useState(false);

    return (
        <header className="bg-white/80 dark:bg-black/40 backdrop-blur-sm p-2">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                    <GameStats toggleShowPath={() => setShowGamePath(!showGamePath)} />
                </div>
                {showGamePath && <GamePathBreadcrumb />}
            </div>
        </header>
    );
};

export default GameHeader;