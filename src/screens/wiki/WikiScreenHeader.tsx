interface WikiScreenHeaderProps {
    destination: string;
}

const WikiScreenHeader = (props: WikiScreenHeaderProps) => {
    return (
        <div className="bg-gray-900 text-white p-4 w-screen text-center space-y-4">
            <h3 className="text-2xl underline underline-offset-4">Wikirdle</h3>
            <div className="flex align-center justify-evenly items-center ">
                <h2 className="text-xl font-bold">Artículo destino:</h2>
                <h2 className="text-xl font-bold">{props.destination}</h2>
            </div>
        </div>
    );
}

export default WikiScreenHeader;