interface InstructionItemProps {
    number: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

const InstructionItem: React.FC<InstructionItemProps> = ({ number, children, className = "", }) => (
    <div className={`flex items-start ${className}`}>
        <div className="font-mono h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white mr-3 flex-shrink-0">
            {number}
        </div>
        <p className="text-sm lg:text-lg dark:text-white">{children}</p>
    </div>
);

export default InstructionItem;
