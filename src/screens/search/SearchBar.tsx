import React, { useState } from "react";
import wiki from "wikipedia";
import SuggestionsList from "./SuggestionsList";

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
    try {
      const results = await wiki.search(query);
      setSuggestions(results.results.map((result: any) => result.title));
    } catch (error) {
      console.error(error);
    }
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
