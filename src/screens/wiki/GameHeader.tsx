import React, { useState } from "react";
import GamePathBreadcrumb from "../common/breadcrumb/GamePathBreadcrumb";
import GameStats from "./stats/GameStats";

interface GameHeaderProps {
    clickCount: number;
    destination: string;
    gamePath: string[];
    onReset: () => void;
}

const GameHeader: React.FC<GameHeaderProps> = ({ clickCount, destination, gamePath, onReset }) => {
    const [showGamePath, setShowGamePath] = useState(false);

    return (
        <header className="bg-black/40 backdrop-blur-sm border-b border-blue-800/50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                    <h1 className="text-4xl font-bold text-blue-300 font-lakki-reddy pt-4">Wikirdle</h1>
                    <GameStats
                        clickCount={clickCount}
                        destination={destination}
                        toggleShowPath={() => setShowGamePath(!showGamePath)}
                        onReset={onReset}
                    />
                </div>
                {showGamePath && <GamePathBreadcrumb gamePath={gamePath} />}
            </div>
        </header>
    );
};

export default GameHeader;