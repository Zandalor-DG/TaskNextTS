import Head from "next/head";
import React, { ReactNode, useContext, useReducer, useState } from "react";
import styled from "styled-components";
import { initialState } from "../interfaces/Data/InitialState";
import { ActionBook } from "../src/reducer/action/Action";
import { booksReducer } from "../src/reducer/BooksReducer";
import { State } from "../utils/entities/state/State";
import { UserThemeContext } from "./themeComponent";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const [lightOrNight, setLightOrNight] = useState(true);
  const [state, changeState] = useReducer<React.Reducer<State, ActionBook>>(
    booksReducer,
    initialState
  );

  const themeHandler = useContext(UserThemeContext);
  const toggleTheme = () => {
    themeHandler();
  };

  return (
    <BooksCardStyle>
      <div className="books__body">
        <div onClick={toggleTheme}>
          <svg
            className="books__svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="3em"
            width="3em"
          >
            <path d="M17.75 4.09l-2.53 1.94.91 3.06-2.63-1.81-2.63 1.81.91-3.06-2.53-1.94L12.44 4l1.06-3 1.06 3 3.19.09m3.5 6.91l-1.64 1.25.59 1.98-1.7-1.17-1.7 1.17.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95 2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14.4-.4.82-.76 1.27-1.08.75-.53 1.93.36 1.85 1.19-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 008.02 2.89m-1.64 2.02a12.08 12.08 0 01-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82-2.81 3.14-2.7 7.96.31 10.98 3.02 3.01 7.84 3.12 10.98.31z" />
          </svg>
        </div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {children}
      </div>
    </BooksCardStyle>
  );
};

export default Layout;

const BooksCardStyle = styled.div`
  /* .books__body {
    width: 100%;
    background: ${(props) => props.theme.background};
  } */
  .books__svg {
    color: ${(props) => props.theme.color};
  }
  .books-card {
    &__wrapper {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      align-items: center;
      width: 1200px;
      margin: 0 auto;
    }
    &__itemBook {
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      align-items: flex-start;
      width: 300px;
      height: 500px;
      margin: 20px;
      text-decoration: none;
      color: ${(props) => props.theme.color};
    }
    &__itemBook:hover {
      box-shadow: 5px 3px 4px 2px ${(props) => props.theme.shadow};
    }
  }
  .item-book {
    &__cover {
      width: 100%;
      height: 400px;
      object-fit: "cover";
    }
    &__name-book {
      line-height: 20px;
      margin: 0px;
      margin-left: 10px;
    }
    &__author-book {
      line-height: 14px;
      margin: 0px;
      margin-left: 10px;
    }
    &__price-book {
      line-height: 20px;
      margin: 0px;
      margin-left: 10px;
    }
  }
`;
