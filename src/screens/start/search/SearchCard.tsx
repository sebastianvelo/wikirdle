import GlassCard from "@common/components/glass-card/GlassCard";
import I18n from "@context/language/common/I18nKeys";
import useI18N from "@hooks/app/useI18N";
import { useState } from "react";
import InputSearch from "./InputSearch";
import StartGameButton from "./StartGameButton";

const SearchCard: React.FC = () => {
  const { t } = useI18N();
  const [startArticle, setStartArticle] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <GlassCard>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary-950 dark:text-primary-300 mb-4">
          {t(I18n.START.SEARCH.TITLE)}
        </h2>
        <div className="space-y-4">
          <InputSearch title={I18n.START.SEARCH.ORIGIN.TITLE} placeholder={I18n.START.SEARCH.ORIGIN.PLACEHOLDER} value={startArticle} changeValue={setStartArticle} />
          <InputSearch title={I18n.START.SEARCH.DESTINATION.TITLE} placeholder={I18n.START.SEARCH.DESTINATION.TITLE} value={destination} changeValue={setDestination} />
          <StartGameButton startArticle={startArticle} destination={destination} />
        </div>
      </div>
    </GlassCard>
  );
};

export default SearchCard;
