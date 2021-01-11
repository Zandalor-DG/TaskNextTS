import React from "react";
import { State } from "../utils/entities/state/State";
import { ActionBook, ActionTypeBook } from "./action/Action";

export const booksReducer: React.Reducer<State, ActionBook> = (
  state,
  action
): State => {
  switch (action.type) {
    case ActionTypeBook.SetBookStoreState: {
      return { ...state, books: [...action.books] };
    }
    case ActionTypeBook.SetBookState: {
      return {
        ...state,
        book: { ...action.book },
      };
    }
    case ActionTypeBook.SetTotalPage: {
      return { ...state, totalPage: action.totalPage };
    }
    case ActionTypeBook.SetPageSize: {
      return { ...state, pageSize: action.pageSize };
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
