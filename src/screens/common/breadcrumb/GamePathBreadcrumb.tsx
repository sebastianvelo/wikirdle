import React from "react";
import BreadcrumbItem from "./BreadcrumbItem";

interface GamePathBreadcrumbProps {
    gamePath: string[];
}

const GamePathBreadcrumb: React.FC<GamePathBreadcrumbProps> = ({ gamePath }) => {
    return (
        <div className="mt-2 pt-2 border-t border-blue-800/50">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-6">
                {gamePath.map((article, index) => (
                    <BreadcrumbItem
                        key={article}
                        value={article}
                        index={index}
                        isCurrent={index === gamePath.length - 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default GamePathBreadcrumb;
