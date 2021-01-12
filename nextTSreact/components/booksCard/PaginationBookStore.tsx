import React, { useState } from "react";
import "../../components/componentBook/node_modules/antd/dist/antd.css";
import css from "./BooksCard.module.css";

const PaginationBookStore: React.FC<PropsPaginationBookStore> = ({
  filterState,
}: PropsPaginationBookStore) => {
  const pageSize = useSelector(
    (state: StateReduxType) => state.bookStoreState.pageSize
  );
  const totalPage = useSelector(
    (state: StateReduxType) => state.bookStoreState.totalPage
  );

  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const onChange = (page: number, pageSize: number | undefined) => {
    setCurrentPage(page);
    dispatch(allBooks({ page, pageSize, filterState }));
  };

  return (
    <Pagination
      current={currentPage}
      onChange={onChange}
      pageSize={pageSize}
      total={totalPage}
      className={css.booksCard__pagination}
    />
  );
};

export default React.memo(PaginationBookStore);
