import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getWikipediaMobileHtml } from "../../wikipedia/Wikipedia";
import LoadingSpin from "../../common/components/LoadingSpin";
import { Params, ScreenPath } from "../../common/utils/utils";
import WikiFrame from "./WikiFrame";
import WikiScreenFooter from "./WikiScreenFooter";
import Header from "../../common/components/Header";

const WikiScreen: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = useParams<{ article: string }>();
  const [clickCount, setClickCount] = useState<number>(0);
  const [gamePath, setGamePath] = useState<string[]>([article ?? ""]);
  const [destination, setDestination] = useState<string>("");
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        if(!article) throw new Error("Please provide a title");
        const pageContent = await getWikipediaMobileHtml(article);
        if(!pageContent) throw new Error("Article not found")
        setHtmlContent(pageContent.replace("<base ", "<pepe"));
      } catch (error) {
        console.error(error);
        navigate(ScreenPath.home);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();

    const params = new URLSearchParams(location.search);
    const dest = params.get("destination");
    setDestination(dest ?? "");
  }, [article, location]);

  const handleLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    if (target.tagName !== "A" || !target.href) return;

    const url = new URL(target.href);
    const clickedArticle = decodeURIComponent(
      url.pathname.split("/").pop() ?? ""
    );
    const articleName = clickedArticle.split("_").join(" ");

    setClickCount((prevCount) => prevCount + 1);
    setGamePath((prevPath) => [...prevPath, articleName]);
    navigate(ScreenPath.getWiki(clickedArticle, destination));

    if (articleName.toLowerCase() === destination.toLowerCase()) {
      localStorage.setItem(Params.gamePath, [...gamePath, articleName].join(","));
      localStorage.setItem(Params.clickCount, `${clickCount + 1}`);
      navigate(ScreenPath.congrats);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <LoadingSpin isLoading={isLoading} />
      <WikiFrame htmlContent={htmlContent} handler={handleLinkClick} isLoading={isLoading} />
      <WikiScreenFooter clickCount={clickCount} destination={destination} />
    </div>
  );
};

export default WikiScreen;
