import { Button, Image } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PropsGetBook } from '../../../../api/apiBookStore';
import { baseURL } from '../../../../api/axios';
import { StateReduxType } from '../../../../store/reducers';
import { addOneItemCart } from '../../../../store/shoppingCardStore/thunkShoppingCard';
import css from '../Book.module.css';
import RateBook from './RateBook';

interface propsCoverBook {
    data: PropsGetBook | undefined;
    id: number;
}

const BookInfo: React.FC<propsCoverBook> = ({ data, id }: propsCoverBook) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const cart = useSelector((state: StateReduxType) => state.shoppingCardState.productInCart);
    const isBookInCart = cart ? cart.findIndex((a) => a.bookId === id) !== -1 : false;

    const onCart = () => {
        isBookInCart ? history.push('/cart') : dispatch(addOneItemCart(id));
    };
    return (
        <div className={css.book__coverAndRate}>
            <div>
                <Image
                    width={200}
                    height={300}
                    src={baseURL + data?.book.File.path_name ?? 'http://localhost:3000/download.png'}
                />
            </div>
            <div className={css.coverAndRate__rate}>
                <RateBook userRate={data?.userRate} rate={data?.rateBook} />
                <h4>rate: {data?.rateBook}</h4>
                <h2>{data?.book.name}</h2>
                <h3>by {data?.book.Author.name}</h3>
                <Button onClick={onCart} type="primary">
                    {isBookInCart ? 'Go to cart' : `${data?.book.price} $`}
                </Button>
            </div>
        </div>
    );
};

export default BookInfo;
