import Link from "next/link";
import React, { useReducer } from "react";
import { BookData } from "../../interfaces/books/bookStoreData";
import { initialState } from "../../interfaces/Data/InitialState";
import { booksReducer } from "../../reducer/BooksReducer";
import { baseURL } from "../api/axios";

interface IBooksCard {
  allBooks: BookData[];
}

const BooksCard: React.FC<IBooksCard> = ({ allBooks }) => {
  const [state, dispatch] = useReducer(booksReducer, initialState);

  const content = allBooks.map((item) => {
    return (
      <Link href={`/book/${item.id}`} key={item.id}>
        <a className="books-card__itemBook">
          <img
            src={baseURL + item.File.path_name}
            alt={item.name}
            className="item-book__cover"
          />
          <h3 className="item-book__name-book">{item.name}</h3>
          <h4 className="item-book__author-book">by {item.Author.name}</h4>
          <h3 className="item-book__price-book">price: {item.price}</h3>
        </a>
      </Link>
    );
  });

  return <div className="books-card__wrapper">{content}</div>;
};

export default BooksCard;
