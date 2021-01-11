import { Rate } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addOrUpdateBookRate } from '../../../../store/bookStoreStore/thunkBookStore';
import { StateReduxType } from '../../../../store/reducers';

interface IRateBook {
    rate?: number;
    userRate?: number | 'notRate';
}

const RateBook: React.FC<IRateBook> = ({ rate, userRate }: IRateBook) => {
    const user = useSelector((state: StateReduxType) => state.userState.user);
    const rating = userRate === 'notRate' || !userRate ? 0 : userRate;
    const params: {
        id: string;
    } = useParams();
    const dispatch = useDispatch();
    const onChange = (value: number) => {
        dispatch(addOrUpdateBookRate({ bookId: params.id, rateBook: value }));
    };

    return <Rate disabled={!user} defaultValue={rating} count={5} onChange={onChange} />;
};

export default RateBook;
