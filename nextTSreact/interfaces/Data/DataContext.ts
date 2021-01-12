import React from "react";
import { ContextState } from "../../reducer/action/Action";

export const DataContext = React.createContext<Partial<ContextState>>({});
