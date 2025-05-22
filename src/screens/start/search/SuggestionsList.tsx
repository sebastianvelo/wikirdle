interface SuggestionsListProps {
  suggestions: string[];
  showSuggestions: boolean;
  handler: (value: string) => void;
}

const SuggestionsList = (props: SuggestionsListProps) => {
  return (
    <>
      {props.showSuggestions && props.suggestions.length > 0 && (
        <ul className="absolute backdrop-blur-2xl z-50 scrollbar w-full bg-secondary-50/90 border border-gray-300 shadow-lg max-h-60 overflow-auto dark:bg-secondary-950/90 dark:border-primary-800">
          {props.suggestions.map((title: string) => (
            <li
              key={title}
              onClick={() => props.handler(title)}
              className="px-4 py-3 hover:bg-primary-200 cursor-pointer border-b border-gray-200 last:border-0 dark:hover:bg-primary-950/80 dark:border-primary-800/50 dark:text-white"
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
