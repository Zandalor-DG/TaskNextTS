import qs from "query-string";
import { BookData } from "../../interfaces/books/bookStoreData";
import { PaginationParams } from "../../interfaces/books/paginationParams";
import axios from "./axios";

export interface propsAllBooks {
  rows: BookData[];
  count: number;
}

export const getAllBooks = async ({
  pageSize = 20,
  page = 1,
}: PaginationParams): Promise<propsAllBooks> => {
  const res = await axios.get("/book/allbooks", {
    params: {
      pageSize,
      page,
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { skipNull: true, arrayFormat: "comma" });
    },
  });
  const data: propsAllBooks = res.data.booksResponse;
  return data;
};

export const getBook = async (id: string): Promise<BookData> => {
  const res = await axios.get("/book/getbook", {
    params: { id },
  });
  const data: BookData = res.data.book;
  return data;
};
