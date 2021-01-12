import React from "react";
import { BookData } from "../../interfaces/books/bookStoreData";
import { baseURL } from "../api/axios";

type Props = {
  data: BookData;
};

export const BookInfo: React.FC<Props> = ({ data }) => {
  return (
    <div className="book__content">
      <div className="content__wrapper">
        <img
          src={baseURL + data.File.path_name}
          alt={data.name}
          className="book__image"
        />
        <div className="book__info">
          <p className="book__text">{data.name}</p>
          <p className="book__text">{data.Author.name}</p>
          <p className="book__text">{data.Publish.name}</p>
          <p className="book__text">{data.language}</p>
          <p className="book__text">
            {new Date(data.theYearOfPublishing).toUTCString()}
          </p>
        </div>
      </div>
      <div className="book__description">{data.description}</div>
    </div>
  );
};
