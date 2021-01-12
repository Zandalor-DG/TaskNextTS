import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { BookData } from "../../interfaces/books/bookStoreData";
import { baseURL } from "../api/axios";

interface IBooksCard {
  allBooks: BookData[];
}

const BooksCard: React.FC<IBooksCard> = ({ allBooks }) => {
  const content = allBooks.map((item) => {
    return (
      <Link href={`/book/${item.id}`} key={item.id}>
        <a className="books-card__itemBook">
          <img
            src={baseURL + item.File.path_name}
            alt={item.name}
            className="itemBook__cover"
          />
          <h3 className="item-book__nameBook">{item.name}</h3>
          <h4 className="item-book__authorBook">by {item.Author.name}</h4>
          <h1 className="item-book__priceBook">price: {item.price}</h1>
        </a>
      </Link>
    );
  });

  return (
    <BooksCardStyle>
      <div className="books-card__wrapper">{content}</div>
    </BooksCardStyle>
  );
};

export default BooksCard;

const BooksCardStyle = styled.div`
  .books-card {
    &__wrapper {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      align-items: center;
      width: 1200px;
      margin: 0 auto;
      border: 2px solid gray;
    }
    &__itemBook {
      width: 400px;
      border: 1px solid tomato;
      margin: 20px;
      text-decoration: none;
      color: black;
    }
    &__itemBook::before {
      box-shadow: 5px 3px 4px 2px gray;
    }
  }
  .itemBook {
    &__cover {
      width: 100%;
      height: 80%;
      object-fit: "cover";
    }
  }
`;
