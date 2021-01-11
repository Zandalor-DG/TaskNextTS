import React from 'react';
import { Comment, List } from 'antd';
import { IComments } from './CommentsBook';

interface PropsCommentLis {
    comments: IComments[];
}

const CommentList: React.FC<PropsCommentLis> = ({ comments }: PropsCommentLis) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={(props) => <Comment {...props} />}
    />
);

export default CommentList;
