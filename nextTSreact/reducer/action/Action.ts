import { Dispatch } from "react";
import { BookData } from "../../utils/entities/books/bookStoreData";
import { State } from "../../utils/entities/state/State";

export enum ActionTypeBook {
  SetTotalPage = "SetTotalPage",
  SetError = "SetError",
  SetPageSize = "SetPageSize",
  SetBookStoreState = "SetBookStoreState",
  SetAllFilteringOptions = "SetAllFilteringOptions",
  SetBookState = "SetBookState",
  AddComment = "AddComment",
  AddOrUpdateRate = "AddOrUpdateRate",
}

export type ActionSetTotalPage = {
  type: ActionTypeBook.SetTotalPage;
  totalPage: number;
};

export type ActionSetPageSize = {
  type: ActionTypeBook.SetPageSize;
  pageSize: number;
};

export type ActionSetBookState = {
  type: ActionTypeBook.SetBookState;
  book: BookData;
};

export type ActionSetBooksState = {
  type: ActionTypeBook.SetBookStoreState;
  books: BookData[];
};

export type ActionSetErrorBooks = {
  type: ActionTypeBook.SetError;
  error: string;
};

export type ActionBook =
  | ActionSetTotalPage
  | ActionSetPageSize
  | ActionSetBooksState
  | ActionSetErrorBooks
  | ActionSetBookState;

export type ContextState = {
  state: State;
  changeState: Dispatch<ActionBook>;
};

// import { Dispatch } from 'react';
// import { State } from '../state/State';
// import { ToDoItem } from '../state/ToDoItem';

// export enum ActionType {
//     Add = 'Add',
//     Change = 'Change',
//     Remove = 'Remove',
//     Toggle = 'Toggle',
//     ToggleFilter = 'ToggleFilter',
//     ClearAllCompleted = 'ClearAllCompleted',
//     ToggleAll = 'ToggleAllReadiness',
// }

// type ActionStringPayload = {
//     type: ActionType.Add | ActionType.Change;
//     payload: string | undefined;
// };

// type ActionEnumPayLoad = {
//     type: ActionType.ToggleFilter;
//     payload: 'all' | 'done' | 'not_done';
// };

// type ActionObjectPayload = {
//     type: ActionType.Toggle | ActionType.Remove;
//     payload: ToDoItem;
// };

// type ActionNumberPayload = {
//     type: ActionType.ToggleAll;
//     payload: number;
// };

// type ActionVoidPayload = {
//     type: ActionType.ClearAllCompleted;
// };

// export type Action =
//     | ActionStringPayload
//     | ActionObjectPayload
//     | ActionVoidPayload
//     | ActionEnumPayLoad
//     | ActionNumberPayload;
