import React, { useState } from "react";
import { Card, Input, Button } from "antd";
import { sendMessage } from "../../firebase";
import "./style.scss"
const { TextArea } = Input;

function AddTestimonial() {
    const [comment, setComment] = useState({ user: null, value: null })

    return (
        <Card className="add-card">
            <h1>Addd</h1>
            <TextArea value={comment.value} onChange={(e) => setComment({...comment,value: e.target.value})} />
            <Button onClick={() => sendMessage("fedir", comment.value)}>Add</Button>
        </Card>
    );
}

export default AddTestimonial;