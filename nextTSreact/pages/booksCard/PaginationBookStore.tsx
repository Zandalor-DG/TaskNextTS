import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allBooks } from '../../../store/bookStoreStore/thunkBookStore';
import { StateReduxType } from '../../../store/reducers';
import { FilterState } from '../sider/filterReducer/filterReducer';
import css from './BooksCard.module.css';

interface PropsPaginationBookStore {
    filterState: FilterState;
}

const PaginationBookStore: React.FC<PropsPaginationBookStore> = ({ filterState }: PropsPaginationBookStore) => {
    const pageSize = useSelector((state: StateReduxType) => state.bookStoreState.pageSize);
    const totalPage = useSelector((state: StateReduxType) => state.bookStoreState.totalPage);

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
