import { NextPage } from "next";
import Link from "next/link";
import BooksCard from "../components/booksCard/BooksCard";
import Layout from "../components/Layout";

type Props = {
  someProps: string;
};

const IndexPage: NextPage<Props> = (props) => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>{props.someProps}👋</h1>
      <div>
        <Link href="/2">
          <a>
            <BooksCard />
          </a>
        </Link>
      </div>
    </Layout>
  );
};

IndexPage.getInitialProps = async () => {
  return {
    someProps: "Her perbesday Dimitry",
  };
};

export default IndexPage;
