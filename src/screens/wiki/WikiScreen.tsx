import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { mobileHtml } from "wikipedia";
import { getWikiScreenPath } from "../../utils/utils";

const WikiScreen: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = useParams<{ article: string }>();
  const [clickCount, setClickCount] = useState<number>(0);
  const [gamePath, setGamePath] = useState<string[]>([article]);
  const [destination, setDestination] = useState<string>("");
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [loading, isLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        isLoading(true);
        const pageContent: string = await mobileHtml(article!);
        setHtmlContent(pageContent.replace("<base ", "<pepe"));
      } catch (error) {
        console.error(error);
      } finally {
        isLoading(false);
      }
    };

    fetchArticle();

    const params = new URLSearchParams(location.search);
    const dest = params.get("destination");
    setDestination(dest || "");
  }, [article, location]);

  const handleLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    if (target.tagName !== "A" || !target.href) return;

    const url = new URL(target.href);
    const clickedArticle = decodeURIComponent(
      url.pathname.split("/").pop() || ""
    );
    const articleName = clickedArticle.split("_").join(" ");

    setClickCount((prevCount) => prevCount + 1);
    setGamePath((prevPath) => [...prevPath, articleName]);
    navigate(getWikiScreenPath(clickedArticle, destination));

    if (articleName.toLowerCase() === destination.toLowerCase()) {
      localStorage.setItem("gamePath", [...gamePath, articleName]);
      localStorage.setItem("clickCount", clickCount + 1);
      navigate("/congrats");
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="bg-gray-900 text-white p-4 w-screen text-center space-y-4">
        <h3 className="text-2xl underline underline-offset-4">Wikirdle</h3>
        <div className="flex align-center justify-evenly items-center ">
          <h2 className="text-xl font-bold">Artículo destino:</h2>
          <h2 className="text-xl font-bold">{destination}</h2>
        </div>
      </div>
      {loading && (
        <div className="h-full w-full flex align-center justify-center py-16">
          <div className="animate-spin-slow rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
        </div>
      )}
      {!loading && (
        <div
          id="wiki"
          className="border-2 flex align-center bg-white p-4 overflow-y-scroll"
          onClick={handleLinkClick}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
      )}
      <div className="bg-gray-900 text-white border-b-2 border-black p-4">
        <h3 className="text-lg mb-4">Clicks: {clickCount}</h3>
      </div>
    </div>
  );
};

export default WikiScreen;
