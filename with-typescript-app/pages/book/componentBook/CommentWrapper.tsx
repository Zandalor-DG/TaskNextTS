import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNullOpenNotification } from '../../../../store/notificationStore/actionCreatedNotification';
import { StateReduxType } from '../../../../store/reducers';

export interface ICommentWrapper {
    id: number | undefined;
    replyId: number | null;
    setIdToReply: (id: number | null) => void;
}

const CommentWrapper: React.FC<React.PropsWithChildren<ICommentWrapper>> = (
    props: React.PropsWithChildren<ICommentWrapper>,
) => {
    const commentId = useSelector((state: StateReduxType) => state.notificationsState.openNotification);
    const dispatch = useDispatch();

    const ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (props.id === props.replyId) {
            ref.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
            props.setIdToReply(null);
        }
        if (commentId === props.id && ref.current) {
            ref.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
            ref.current.style.border = '1px inset tomato';
            const val = ref.current;
            setTimeout(() => (val.style.border = ''), 3000);

            dispatch(setNullOpenNotification());
        }
    }, [props.replyId, props.id, commentId]);
    return <p ref={ref}>{props.children}</p>;
};

export default CommentWrapper;
