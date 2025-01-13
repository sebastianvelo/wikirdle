import React, { useState } from "react";
import GlassmorphismCard from "../../common/components/GlassmorphismCard";
import SearchBar from "./SearchBar";
import StartGameButton from "./StartGameButton";
import Header from "../../common/components/Header";

const SearchScreen: React.FC = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="py-8 px-4 flex flex-col lg:flex-row h-full w-full justify-between sm:justify-evenly items-center bg-gray-900">

        <GlassmorphismCard>
          <div className="p-8 space-y-8 w-full">
            <h1 className="text-2xl font-bold text-center text-blue-900">
              Seleccioná los artículos
            </h1>
            <SearchBar title="Origen" value={origin} setter={setOrigin} />
            <SearchBar title="Destino" value={destination} setter={setDestination} />
            <StartGameButton origin={origin} destination={destination} />
          </div>

        </GlassmorphismCard>
        <GlassmorphismCard>
          <div className="p-8 space-y-4">
            <h1 className="text-2xl font-bold text-center text-blue-900 mb-8">
              ¿Cómo se juega?
            </h1>
            <p>🔵 El objetivo del juego es llegar al artículo de Wikipedia destino desde el artículo origen.</p>
            <p>🔵 Debes hacerlo navegando por los <span className="text-blue-600 font-bold underline">links</span> que aparecen</p>
            <p>🔵 ¡Intentá llegar en la menor cantidad de clics posible!</p>
          </div>
        </GlassmorphismCard>
      </div>
    </div>
  );
};

export default SearchScreen;
