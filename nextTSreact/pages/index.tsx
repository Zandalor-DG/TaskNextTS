import { NextPage } from "next";
import { useRouter } from "next/router";
import { getAllBooks, propsAllBooks } from "../src/components/api/apiBookStore";
import BooksCard from "../src/components/booksCard/BooksCard";
import Layout from "../src/components/Layout";

type Props = {
  data: propsAllBooks;
};

const IndexPage: NextPage<Props> = (props) => {
  const router = useRouter();
  console.log(router);
  return (
    <Layout title="testTaskNext.js">
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
