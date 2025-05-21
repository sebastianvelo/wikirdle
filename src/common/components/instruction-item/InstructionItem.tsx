import React from "react";

interface InstructionItemProps {
    number: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

const InstructionItem: React.FC<InstructionItemProps> = ({ number, children, className = "", }) => (
    <div className={`flex items-start ${className}`}>
        <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center text-white mr-3 flex-shrink-0">
            {number}
        </div>
        <p className="text-sm lg:text-lg dark:text-white">{children}</p>
    </div>
);

export default InstructionItem;
