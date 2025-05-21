import { useState } from "react";
import Icons from "../../../common/icons/Icons";
import { searchWikipediaArticles } from "../../../wikipedia/WikiService";
import SuggestionsList from "./SuggestionsList";

interface InputSearchProps {
  title: string;
  value: string;
  changeValue: (value: string) => void;
}

const InputSearch = (props: InputSearchProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

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
    <div className="relative">
      <label className="block text-primary-300 font-bold mb-2">
        {props.title}
      </label>
      <div className="relative">
        <input
          type="text"
          value={props.value}
          onChange={handleChange}
          onClick={handleInputClick}
          className="bg-primary-950/50 border border-primary-800/50 rounded-lg w-full p-4 text-white placeholder-primary-300/60 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/40"
          placeholder="Ej: Argentina"
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
