import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bookInfo } from '../../../store/bookStoreStore/thunkBookStore';
import { StateReduxType } from '../../../store/reducers';
import Preloader from '../../common/preloader/Preloader';
import css from './Book.module.css';
import BookInfo from './componentBook/BookInfo';
import CommentsBook from './componentBook/CommentsBook';
import TabsComponent from './componentBook/TabsComponent';

const Book: React.FC = () => {
    const dispatch = useDispatch();

    const params: {
        id: string;
    } = useParams();
    useEffect(() => {
        dispatch(bookInfo(params.id));
    }, []);
    const data = useSelector((state: StateReduxType) => state.bookStoreState.book);

    return (
        <>
            {!data ? (
                <Preloader />
            ) : (
                <div className={css.bookStore__book}>
                    <BookInfo data={data} id={+params.id} />
                    <TabsComponent description={data?.book.description} booksInfo={data?.book} />
                    <CommentsBook comments={data?.commentsBook} />
                </div>
            )}
        </>
    );
};

export default Book;
