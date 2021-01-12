import Head from "next/head";
import Link from "next/link";
import React, { ReactNode, useReducer } from "react";
import { DataContext } from "../interfaces/Data/DataContext";
import { initialState } from "../interfaces/Data/InitialState";
import { ActionBook, ContextState } from "../reducer/action/Action";
import { booksReducer } from "../reducer/BooksReducer";
import { State } from "../utils/entities/state/State";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const [state, changeState] = useReducer<React.Reducer<State, ActionBook>>(
    booksReducer,
    initialState
  );

  const contextState: ContextState = {
    state,
    changeState,
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DataContext.Provider value={contextState}>
        <header>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>{" "}
            |{" "}
            <Link href="/about">
              <a>About</a>
            </Link>{" "}
            |{" "}
            <Link href="/users">
              <a>Users List</a>
            </Link>{" "}
            | <a href="/api/users">Users API</a>
          </nav>
        </header>
        {children}
        <footer>
          <hr />
          <span>I'm here to stay (Footer)</span>
        </footer>
      </DataContext.Provider>
    </div>
  );
};

export default Layout;
