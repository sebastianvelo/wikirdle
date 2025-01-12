interface SuggestionsListProps {
  suggestions: string[];
  showSuggestions: boolean;
  handler: (value: string) => void;
}

const SuggestionsList = (props: SuggestionsListProps) => {
  return (
    <>
      {props.showSuggestions && props.suggestions.length > 0 && (
        <ul className="mt-2 border border-gray-300 rounded bg-gray-200 fixed z-20 overflow-scroll h-64 w-1/2">
          {props.suggestions.map((title: string) => (
            <li
              key={title}
              onClick={() => props.handler(title)}
              className="px-4 py-2 cursor-pointer hover:bg-blue-300"
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
