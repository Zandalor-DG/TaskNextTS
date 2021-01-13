import { NextPage } from "next";
import Link from "next/link";
import { getBook } from "../../src/components/api/apiBookStore";
import { BookInfo } from "../../src/components/componentBook/BookInfo";
import Layout from "../../src/components/Layout";
import { BookData } from "../../src/interfaces/books/bookStoreData";
type Props = {
  data: BookData;
};

const Book: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Layout title="testTaskNext.js">
        <BookInfo data={data} />
      </Layout>
      <Link href="/" as="/">
        <a>{"<--back"}</a>
      </Link>
    </>
  );
};

Book.getInitialProps = async (ctx) => {
  //console.log(">>your cookies are", ctx.req?.headers.cookie);
  const initialProps: Props = {
    data: {
      Author: { name: "" },
      File: { path_name: "" },
      Genre: [{ name: "" }],
      id: 0,
      Publish: { name: "" },
      description: "",
      language: "",
      name: "",
      numberOfPages: 0,
      price: 0,
      theYearOfPublishing: new Date(),
    },
  };
  try {
    const { query } = ctx;
    const id = Array.isArray(query.id) ? query.id[0] : query.id;
    const res = await getBook(id);
    console.log(res);
    initialProps.data = { ...res };
  } catch (err) {
    console.log("One book get data err", err.message);
  }
  return initialProps;
};

export default Book;
