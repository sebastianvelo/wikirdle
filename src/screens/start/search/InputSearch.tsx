import Icons from "@common/icons/Icons";
import useClickOutside from "@hooks/app/useClickOutside";
import useI18N from "@hooks/app/useI18N";
import { useRef, useState } from "react";
import { searchWikipediaArticles } from "../../../wikipedia/WikiService";
import SuggestionsList from "./SuggestionsList";

interface InputSearchProps {
  title: string;
  value: string;
  changeValue: (value: string) => void;
  placeholder: string;
}

const InputSearch = (props: InputSearchProps) => {
  const { t } = useI18N();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, () => setShowSuggestions(false));

  const handleSearch = async (query: string) => {
    if (query.length < 3) return;
    try {
      const results = await searchWikipediaArticles(query);
      setSuggestions(results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: any) => {
    props.changeValue(e.target.value);
    handleSearch(e.target.value);
  };

  const handleSuggestionClick = (title: string) => {
    props.changeValue(title);
    setShowSuggestions(false);
  };

  const handleInputClick = () => {
    setShowSuggestions(true);
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <label className="block text-secondary-950 dark:text-secondary-200 font-bold mb-2">
        {t(props.title)}
      </label>
      <div className="relative">
        <input
          type="text"
          value={props.value}
          onChange={handleChange}
          onClick={handleInputClick}
          className="bg-secondary-100/50 dark:bg-secondary-950/50 border border-primary-800/50 dark:border-primary-500/60 rounded-lg w-full p-4 text-black placeholder-primary-800/60 dark:text-white dark:placeholder-primary-300/60 focus:border-primary-800/20 focus:outline-none focus:ring-2 focus:ring-primary-800/40"
          placeholder={t(props.placeholder)}
        />
        <Icons.Search />
      </div>
      <SuggestionsList
        handler={handleSuggestionClick}
        showSuggestions={showSuggestions}
        suggestions={suggestions}
      />
    </div>
  );
};

export default InputSearch;
