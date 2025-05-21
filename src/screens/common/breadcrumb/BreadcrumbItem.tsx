import React from "react";
import Icons from "../../../common/icons/Icons";

interface BreadcrumbItemProps {
    index: number;
    isCurrent: boolean;
    value: string;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ index, isCurrent, value }) => {
    const statusClassName = isCurrent ? "bg-blue-700 text-white" : "bg-blue-800/50"

    return (
        <>
            {index > 0 && <Icons.ChevronRight />}
            <span className={`whitespace-nowrap px-2 py-1 rounded ${statusClassName}`}>
                {value}
            </span>
        </>
    );
};

export default BreadcrumbItem;
