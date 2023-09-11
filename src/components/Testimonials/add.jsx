import React, { useState } from "react";
import { Card, Input, Button } from "antd";
import "./style.scss"
const { TextArea } = Input;

function AddTestimonial() {
    const [comment, setComment] = useState(null)

    return (
        <Card className="add-card">
            <h1>Addd</h1>
            <TextArea value={comment} onChange={(e) => setComment(e.target.value)} />
            <Button>Add</Button>
        </Card>
    );
}

export default AddTestimonial;