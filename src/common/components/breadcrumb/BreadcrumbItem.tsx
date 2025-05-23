import Icons from "@common/icons/Icons";

interface BreadcrumbItemProps {
    index: number;
    isCurrent: boolean;
    value: string;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ index, isCurrent, value }) => {
    const statusClassName = isCurrent || index === 0 ? "bg-primary-500 text-white" : "bg-primary-500/50 text-white"

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
