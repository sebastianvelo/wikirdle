import React, { useState } from "react";
import GlassCard from "../../common/components/GlassCard";
import Icons from "../../common/icons/Icons";
import Header from "./HomeHeader";
import InputSearch from "./search/InputSearch";
import StartGameButton from "./search/StartGameButton";

const HomeScreen: React.FC = () => {
  const [startArticle, setStartArticle] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <>
      <Header />
      <main className="flex-1 max-w-6xl w-full mx-auto lg:px-4 lg:py-8 flex flex-col gap-8">
        <GlassCard>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">
              Seleccioná los artículos
            </h2>
            <div className="space-y-4">
              <InputSearch title="Origen" value={startArticle} changeValue={setStartArticle} />
              <InputSearch title="Destino" value={destination} changeValue={setDestination} />
              <StartGameButton startArticle={startArticle} destination={destination} />
            </div>
          </div>
        </GlassCard>
        <GlassCard>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-300 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              ¿Cómo se juega?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 flex-shrink-0">1</div>
                <p className="text-sm lg:text-lg">El objetivo del juego es llegar al artículo de Wikipedia destino desde el artículo origen.</p>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 flex-shrink-0">2</div>
                <p className="text-sm lg:text-lg">Debes hacerlo navegando por los <span className="text-blue-300 font-bold underline">links</span> que aparecen en los artículos.</p>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 flex-shrink-0">3</div>
                <p className="text-sm lg:text-lg">¡Intentá llegar en la menor cantidad de clics posible!</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </main>
    </>
  );
};

export default HomeScreen;
