interface WikiScreenFooterProps {
    clickCount: number;
    destination: string;
}

const WikiScreenFooter = (props: WikiScreenFooterProps) => {
    return (
        <div className="bg-gray-900 text-white border-b-2 border-black p-4 flex justify-between items-center">
            <div>
                <h2 className="text-sm">Destino:</h2>
                <h2 className="text-xl font-bold">{props.destination}</h2>
            </div>
            <div>
                <h2 className="text-sm">Clicks:</h2>
                <h2 className="text-xl font-bold">{props.clickCount}</h2>
            </div>
        </div>
    );
}

export default WikiScreenFooter;