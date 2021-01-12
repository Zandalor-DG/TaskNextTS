import { NextPage } from "next";
import { getAllBooks, propsAllBooks } from "../components/api/apiBookStore";
import BooksCard from "../components/booksCard/BooksCard";
import Layout from "../components/Layout";

type Props = {
  data: propsAllBooks;
};

const IndexPage: NextPage<Props> = (props) => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <BooksCard allBooks={props.data.rows} />
    </Layout>
  );
};

IndexPage.getInitialProps = async () => {
  const initialProps: Props = {
    data: {
      count: 0,
      rows: [],
    },
  };
  try {
    const res = await getAllBooks({ pageSize: 20, page: 1 });
    initialProps.data = {
      count: res.count,
      rows: res.rows,
    };
  } catch (err) {
    console.log("its error catch", err.message);
  }
  return initialProps;
};

export default IndexPage;
