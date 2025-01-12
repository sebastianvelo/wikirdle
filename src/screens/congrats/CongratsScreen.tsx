import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const CongratsScreen: React.FC = () => {
  const navigate = useNavigate();
  const path = localStorage.getItem("gamePath") || "";
  const clickCount = localStorage.getItem("clickCount") || "0";

  const articles = path.split(",");

  const handleClick = () => {
    // Acción para volver al inicio o reiniciar el juego
    localStorage.removeItem("gamePath");
    localStorage.removeItem("clickCount");
    navigate("/");
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">¡Felicitaciones!</h1>
      <p className="text-2xl mb-4">
        Lo conseguiste en <span className="font-bold">{clickCount}</span> clics
      </p>
      <h2 className="text-2xl font-semibold mb-4">Camino recorrido:</h2>
      <div className="flex flex-wrap justify-center items-center max-w-3xl">
        {articles.map((article, index) => (
          <React.Fragment key={index}>
            <span className="text-lg">{article}</span>
            {index < articles.length - 1 && (
              <span className="mx-2 text-lg">➜</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <button
        onClick={handleClick}
        className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Jugar de nuevo
      </button>
    </div>
  );
};

export default CongratsScreen;
