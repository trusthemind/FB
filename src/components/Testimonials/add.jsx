import React, { useState } from "react";
import { Card, Input, Button } from "antd";
import { sendMessage } from "../../firebase";
import "./style.scss"
const { TextArea } = Input;

function AddTestimonial() {
    const [comment, setComment] = useState(null)

    return (
        <Card className="add-card">
            <h1>Addd</h1>
            <TextArea value={comment} onChange={(e) => setComment(e.target.value)} />
            <Button onClick={() => sendMessage("fedir", "tesgggggggt")}>Add</Button>
        </Card>
    );
}

export default AddTestimonial;