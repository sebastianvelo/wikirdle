interface InstructionItemProps {
    number: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

const InstructionItem: React.FC<InstructionItemProps> = ({ number, children, className = "", }) => (
    <div className={`flex items-center ${className}`}>
        <div className="font-mono h-8 w-8 rounded-full bg-primary-300 flex items-center justify-center text-secondary-900 font-bold mr-3 flex-shrink-0">
            {number}
        </div>
        <p className="text-sm lg:text-lg dark:text-secondary-200 text-justify">{children}</p>
    </div>
);

export default InstructionItem;
