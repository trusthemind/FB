import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { getMessages } from "../../firebase";

function TestimonialsComponent() {
    const [messageArray, setMessageArray] = useState([])

    useEffect(() => {
        const fetchMessages = async () => {
            const messages = await getMessages();
            return setMessageArray(messages);
        }
        fetchMessages()
    }, [])
    return (
        <Card>
            {messageArray.map((item, index) => <p key={index}>{item.value}</p>)}
        </Card>
    );
}

export default TestimonialsComponent;