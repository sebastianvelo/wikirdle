import React, { useState } from "react";
import SuggestionsList from "./SuggestionsList";
import { search } from "wikipedia";

type SetSuggestions = React.Dispatch<React.SetStateAction<string[]>>;

interface SearchBarProps {
  title: string;
  value: string;
  setter: (value: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const handleSearch = async (
    query: string,
    setSuggestions: SetSuggestions
  ) => {
    if (query.length < 3) return;
    const results = await search(query);
    setSuggestions(results.results.map((result: any) => result.title));
  };

  const handleChange = (e: any) => {
    props.setter(e.target.value);
    handleSearch(e.target.value, setSuggestions);
  };

  const handleSuggestionClick = (title: string) => {
    props.setter(title);
    setShowSuggestions(false);
  };

  const handleInputClick = () => {
    setShowSuggestions(true);
  };

  return (
    <div className="p-4">
      <label className="block text-blue-300 font-bold mb-2">
        {props.title}
      </label>
      <input
        type="text"
        value={props.value}
        onChange={handleChange}
        onClick={handleInputClick}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <SuggestionsList
        handler={handleSuggestionClick}
        showSuggestions={showSuggestions}
        suggestions={suggestions}
      />
    </div>
  );
};

export default SearchBar;
