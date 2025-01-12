import React, { useState } from "react";
import GlassmorphismCard from "../../common/components/GlassmorphismCard";
import SearchBar from "./SearchBar";
import StartGameButton from "./StartGameButton";

const SearchScreen: React.FC = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <div className="flex items-center align-center justify-center bg-gray-900 h-screen w-screen p-12">
      <GlassmorphismCard>
        <div className="flex flex-col align-center justify-center">
          <h1 className="text-5xl font-bold text-center text-blue-300 mb-8">
            Wikirdle
          </h1>
          <div className="flex flex-col align-center justify-center w-full">
            <SearchBar title="Origen" value={origin} setter={setOrigin} />
            <SearchBar title="Destino" value={destination} setter={setDestination} />
            <StartGameButton origin={origin} destination={destination} />
          </div>

        </div>
      </GlassmorphismCard>
    </div>
  );
};

export default SearchScreen;
