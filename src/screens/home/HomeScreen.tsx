import React, { useState } from "react";
import GlassCard from "../../common/components/GlassmorphismCard";
import SearchBar from "./SearchBar";
import StartGameButton from "./StartGameButton";
import Header from "../../common/components/Header";

const HomeScreen: React.FC = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex flex-col lg:flex-row h-full w-full justify-between sm:justify-around items-center bg-gray-200 sm:pt-4">

        <GlassCard>
          <div className="p-6 space-y-4 w-screen sm:w-96">
            <h1 className="text-2xl font-bold text-center text-blue-900">
              Seleccioná los artículos
            </h1>
            <SearchBar title="Origen" value={origin} setter={setOrigin} />
            <SearchBar title="Destino" value={destination} setter={setDestination} />
            <StartGameButton origin={origin} destination={destination} />
          </div>

        </GlassCard>
        
        <GlassCard>
          <div className="px-6 py-4 space-y-4">
            <h1 className="text-2xl font-bold text-center text-blue-900">
              ¿Cómo se juega?
            </h1>
            <p>🔵 El objetivo del juego es llegar al artículo de Wikipedia destino desde el artículo origen.</p>
            <p>🔵 Debes hacerlo navegando por los <span className="text-blue-600 font-bold underline">links</span> que aparecen</p>
            <p>🔵 ¡Intentá llegar en la menor cantidad de clics posible!</p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default HomeScreen;
