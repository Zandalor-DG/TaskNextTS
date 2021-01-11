import React from 'react';
import { Input, Form, Button } from 'antd';
import { useSelector } from 'react-redux';
import { StateReduxType } from '../../../../store/reducers';
import { TextAreaRef } from 'antd/lib/input/TextArea';
import { IReply } from './CommentsBook';

type EditorPropTypes = {
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit?: () => void;
    submitting?: boolean;
    value: string;
    replyForm?: IReply;
};

const Editor = React.forwardRef<TextAreaRef, EditorPropTypes>(function editorRef(props: EditorPropTypes, ref) {
    const user = useSelector((state: StateReduxType) => state.userState.user);
    const notAuthorize = !user && <span style={{ color: 'tomato' }}> Log in to comment </span>;
    const nameReply = !props.replyForm ? 'Add comment' : `Reply to: ${props.replyForm.reply}`;

    return (
        <>
            {notAuthorize}
            <Form.Item>
                <Input.TextArea ref={ref} rows={4} onChange={props.onChange} value={props.value} disabled={!user} />
            </Form.Item>
            <Form.Item>
                <Button
                    htmlType="submit"
                    loading={props.submitting}
                    onClick={props.onSubmit}
                    disabled={!props.value}
                    type="primary"
                >
                    {nameReply}
                </Button>
            </Form.Item>
        </>
    );
});

export default Editor;
