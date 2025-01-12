import React, { useState } from "react";
import SearchBar from "./SearchBar";
import StartGameButton from "./StartGameButton";

const SearchScreen: React.FC = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <div className="flex flex-col align-center justify-center bg-gray-900 h-screen w-screen">
      <h1 className="text-5xl font-bold text-center text-blue-300 mb-8">
        Wikirdle (?)
      </h1>
      <div className="md:px-32 flex flex-col align-center justify-center">
        <SearchBar title="Origen" value={origin} setter={setOrigin} />
        <SearchBar
          title="Destino"
          value={destination}
          setter={setDestination}
        />
        <StartGameButton origin={origin} destination={destination} />
      </div>
    </div>
  );
};

export default SearchScreen;
