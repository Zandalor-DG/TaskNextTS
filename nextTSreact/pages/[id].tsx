// import React, { useEffect } from "react";
// import { bookInfo } from "../../../store/bookStoreStore/thunkBookStore";
// import { StateReduxType } from "../../../store/reducers";
// import Preloader from "../../common/preloader/Preloader";
// import BookInfo from "../components/componentBook/BookInfo";
// import CommentsBook from "../components/componentBook/CommentsBook";
// import {
//   useDispatch,
//   useSelector,
// } from "../../components/componentBook/node_modules/react-redux";
// import { useParams } from "../../components/componentBook/node_modules/react-router-dom";
// import TabsComponent from "../components/componentBook/TabsComponent";
// import css from "./Book.module.css";

import { NextPage } from "next";

// const Book: React.FC = () => {
//   const dispatch = useDispatch();

//   const params: {
//     id: string;
//   } = useParams();
//   useEffect(() => {
//     dispatch(bookInfo(params.id));
//   }, []);
//   const data = useSelector(
//     (state: StateReduxType) => state.bookStoreState.book
//   );

//   return (
//     <>
//       {!data ? (
//         <Preloader />
//       ) : (
//         <div className={css.bookStore__book}>
//           <BookInfo data={data} id={+params.id} />
//           <TabsComponent
//             description={data?.book.description}
//             booksInfo={data?.book}
//           />
//           <CommentsBook comments={data?.commentsBook} />
//         </div>
//       )}
//     </>
//   );
// };

// export default Book;
type Props = {
  id: string;
};

const Book: NextPage<Props> = (props) => <h2>Book page {props.id}</h2>;

Book.getInitialProps = async (ctx) => {
  const { query } = ctx;
  return {
    id: Array.isArray(query.id) ? query.id[0] : query.id,
  };
};

export default Book;
