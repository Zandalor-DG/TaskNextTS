import { BulbOutlined } from "antd";
import Head from "next/head";
import React, { ReactNode, useReducer } from "react";
import styled from "styled-components";
import { initialState } from "../interfaces/Data/InitialState";
import { ActionBook } from "../reducer/action/Action";
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

  return (
    <BooksCardStyle theme={state}>
      <div className="book__body">
        <div>
          <BulbOutlined />
          <BulbFilled />
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
  html {
    background: ${(props) => props.theme.background};
  }
  .book__body {
    width: 100%;
    background: ${(props) => props.theme.background};
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
