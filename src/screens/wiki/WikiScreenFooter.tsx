interface WikiScreenFooterProps {
    clickCount: number;
}

const WikiScreenFooter = (props: WikiScreenFooterProps) => {
    return (
        <div className="bg-gray-900 text-white border-b-2 border-black p-4">
            <h3 className="text-lg mb-4">Clicks: {props.clickCount}</h3>
        </div>
    );
}

export default WikiScreenFooter;