import React, { useState } from "react";
import { Card, Tooltip } from "antd";
import { QuestionCircleOutlined, VerifiedOutlined } from "@ant-design/icons";
import { getMessages } from "../../firebase";
import "./style.scss"

function TestimonialsComponent() {
    const [messageArray, setMessageArray] = useState([])

    const fetchMessages = async () => {
        const messages = await getMessages();
        return setMessageArray(messages);
    }
    fetchMessages()

    return (
        <>
        <Card className="message-card">
            <div className="circle"></div>
            <div className="messages-container">
                {messageArray.map((item, index) =>
                    <div className="message-item" key={index}>
                        <h3>from #{item.username}
                            <Tooltip title={item.username.toLowerCase() === "anonymous" ?
                                "This message send by anonymly person" : "This message send by user"}
                                color={"#ef233c"} arrow={false}>
                                <span>{item.username.toLowerCase() === "anonymous" ? <QuestionCircleOutlined /> : <VerifiedOutlined />}</span>
                            </Tooltip>
                        </h3>
                        <p>message: {item.value}</p>
                    </div>
                )}
            </div>
        </Card>
        </>
    );
}

export default TestimonialsComponent;