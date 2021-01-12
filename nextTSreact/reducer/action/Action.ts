import { State } from "../../utils/entities/state/State";

export enum ActionTypeBook {
  SetLightTheme = "SetLightTheme",
  SetNightTheme = "SetNightTheme",
  SetError = "SetError",
}

export type ActionSetLightTheme = {
  type: ActionTypeBook.SetLightTheme;
  theme: State;
};

export type ActionSetNightTheme = {
  type: ActionTypeBook.SetNightTheme;
  theme: State;
};

export type ActionSetErrorBooks = {
  type: ActionTypeBook.SetError;
  error: string;
};

export type ActionBook =
  | ActionSetLightTheme
  | ActionSetNightTheme
  | ActionSetErrorBooks;
