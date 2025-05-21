import React from "react";
import useWikiGame from "../../../hooks/game/useWikiGame";
import BreadcrumbItem from "./BreadcrumbItem";

const GamePathBreadcrumb: React.FC = () => {
    const { gameState } = useWikiGame();

    return (
        <div className="mt-2 pt-2">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-6">
                {gameState.gamePath.map((article, index) => (
                    <BreadcrumbItem
                        key={article}
                        value={article}
                        index={index}
                        isCurrent={index === gameState.gamePath.length - 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default GamePathBreadcrumb;
