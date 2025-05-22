import { createContext } from "react";
import { WikiGameContextType } from "./types";

const WikiGameContext = createContext<WikiGameContextType | undefined>(undefined);

export default WikiGameContext;