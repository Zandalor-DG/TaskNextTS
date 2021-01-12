import React from "react";
import { State } from "../utils/entities/state/State";
import { ActionBook, ActionTypeBook } from "./action/Action";

export const booksReducer: React.Reducer<State, ActionBook> = (
  state,
  action
): State => {
  switch (action.type) {
    case ActionTypeBook.SetLightTheme: {
      return { ...action.theme };
    }
    case ActionTypeBook.SetNightTheme: {
      return {
        ...action.theme,
      };
    }
    case ActionTypeBook.SetError: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      throw new Error("Unexpected action");
  }
};
