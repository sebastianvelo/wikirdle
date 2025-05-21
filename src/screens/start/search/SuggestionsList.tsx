interface SuggestionsListProps {
  suggestions: string[];
  showSuggestions: boolean;
  handler: (value: string) => void;
}

const SuggestionsList = (props: SuggestionsListProps) => {
  return (
    <>
      {props.showSuggestions && props.suggestions.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto dark:bg-primary-950 dark:border-primary-800">
          {props.suggestions.map((title: string) => (
            <li
              key={title}
              onClick={() => props.handler(title)}
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-0 dark:hover:bg-primary-800 dark:border-primary-800/50 dark:text-white"
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
