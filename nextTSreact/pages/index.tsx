import Link from "next/link";
import { useReducer } from "react";
import Layout from "../components/Layout";
import { DataContext } from "../interfaces/Data/DataContext";
import { initialState } from "../interfaces/Data/InitialState";
import { ActionBook, ContextState } from "../reducer/action/Action";
import { booksReducer } from "../reducer/BooksReducer";
import { State } from "../utils/entities/state/State";

const IndexPage = () => {
  const [state, changeState] = useReducer<React.Reducer<State, ActionBook>>(
    booksReducer,
    initialState
  );

  const contextState: ContextState = {
    state,
    changeState,
  };

  return (
    <DataContext.Provider value={contextState}>
      <Layout title="Home | Next.js + TypeScript Example">
        <h1>Hello Next.js 👋</h1>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </Layout>
    </DataContext.Provider>
  );
};

export default IndexPage;
