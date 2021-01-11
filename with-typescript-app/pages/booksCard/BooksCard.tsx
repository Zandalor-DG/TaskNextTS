import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import css from './BooksCard.module.css';
import PaginationBookStore from './PaginationBookStore';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../store/reducers';
import Preloader from '../../common/preloader/Preloader';
import { baseURL } from '../../../api/axios';
import { FilterState } from '../sider/filterReducer/filterReducer';
import { NavLink } from 'react-router-dom';

interface PropsBooksCard {
    filterState: FilterState;
}

const BooksCard: React.FC<PropsBooksCard> = ({ filterState }: PropsBooksCard) => {
    const { Meta } = Card;
    const books = useSelector((state: StateReduxType) => state.bookStoreState.books);

    //const openBook = (id) => {};

    const booksCart = !books ? (
        <Preloader />
    ) : (
        books.map((a) => {
            return (
                <Card
                    key={a.id}
                    className={css.booksCard__cardBook}
                    hoverable
                    style={{ width: '350px' }}
                    cover={
                        <NavLink to={`/book/${a.id}`} /*onClick={() => openBook(a.id)}*/>
                            <img
                                alt={a.name}
                                src={baseURL + a.File.path_name}
                                style={{ width: '350px', height: '500px', objectFit: 'cover' }}
                            />
                        </NavLink>
                    }
                >
                    <Meta title={`${a.name} by ${a.Author.name}`} description={` Price: ${a.price}`} />
                </Card>
            );
        })
    );

    return (
        <div className="body__booksCard">
            <div className={css.booksCard__wrapper}>{booksCart}</div>
            <PaginationBookStore filterState={filterState} />
        </div>
    );
};

export default React.memo(BooksCard);
