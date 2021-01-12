import { BookData } from "../../../interfaces/books/bookStoreData";

export type State = {
  books: BookData[] | null;
  book: BookData | null;
  totalPage: number;
  pageSize: number;
  error?: string;
};