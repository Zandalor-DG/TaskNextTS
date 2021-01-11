import qs from "query-string";
import { BookData } from "../../utils/entities/books/bookStoreData";
import { PaginationParams } from "../../utils/entities/books/paginationParams";
import axios from "./axios";

export interface propsAllBooks {
  rows: BookData[];
  count: number;
}

export const getAllBooks = async ({
  pageSize,
  page,
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
  const data: BookData = res.data.data;
  return data;
};
