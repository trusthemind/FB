import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Card, Input, Button, message } from "antd";
import { sendMessage } from "../../firebase";
import "./style.scss"
const { TextArea } = Input;

function AddTestimonial(user) {
    const [comment, setComment] = useState({ user: null, value: null })
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        user.user.name != undefined ? setComment({ ...comment, user: user.user.name }) :
        setComment({ ...comment, user: "Anonymous"});
    }, [user])

    const sendMessageHandler = () => {
        if (comment.value.length < 10) {
            messageApi.open({
                type: 'warning',
                content: 'Your comment is too short',
            });
        }
        else if (comment.value.length > 20) {
            messageApi.open({
                type: 'success',
                content: 'Successfully added',
            });
            sendMessage(comment.user, comment.value);
        }
    }

    return (
        <>
            {contextHolder}
            <Card className="add-card">
                <h1>Leave your comment</h1>
                <TextArea value={comment.value} onChange={(e) => setComment({ ...comment, value: e.target.value })} />
                <Button onClick={sendMessageHandler}>Add</Button>
            </Card>
        </>
    );
}
const mapState = (state) => {
    return {
        user: state.reducer.user,
    };
};
export default connect(mapState)(AddTestimonial);