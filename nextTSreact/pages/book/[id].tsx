import { NextPage } from "next";
import { getBook } from "../../components/api/apiBookStore";
import { BookInfo } from "../../components/componentBook/BookInfo";
import Layout from "../../components/Layout";
import { BookData } from "../../interfaces/books/bookStoreData";
type Props = {
  data: BookData;
};

const Book: NextPage<Props> = ({ data }) => {
  return (
    <Layout title="testTaskNext.js">
      <BookInfo data={data} />
    </Layout>
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
