interface SuggestionsListProps {
  suggestions: string[];
  showSuggestions: boolean;
  handler: (value: string) => void;
}

const SuggestionsList = (props: SuggestionsListProps) => {
  return (
    <>
      {props.showSuggestions && props.suggestions.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full bg-blue-950 border border-blue-800 rounded-lg shadow-lg max-h-60 overflow-auto">
          {props.suggestions.map((title: string) => (
            <li
              key={title}
              onClick={() => props.handler(title)}
              className="px-4 py-3 hover:bg-blue-800 cursor-pointer border-b border-blue-800/50 last:border-0"
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SuggestionsList;
