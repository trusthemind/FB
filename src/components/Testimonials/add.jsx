import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import { Card, Input, Button } from "antd";
import { sendMessage } from "../../firebase";
import "./style.scss"
const { TextArea } = Input;

function AddTestimonial(user) {
    const [comment, setComment] = useState({ user: null, value: null })

    useEffect(() => {
        setComment({...comment,user: user.user.name})
    }, [ user])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Card className="add-card">
            <h1>Leave your comment</h1>
            <TextArea value={comment.value} onChange={(e) => setComment({...comment,value: e.target.value})} />
            <Button onClick={() => sendMessage(comment.user, comment.value)}>Add</Button>
        </Card>
    );
}
const mapState = (state) => {
    return {
        user: state.reducer.user,
    };
};
export default connect(mapState)(AddTestimonial);