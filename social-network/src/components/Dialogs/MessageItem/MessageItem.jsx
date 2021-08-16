import React from "react";
import mod from "./MessageItem.module.css"

const MessageItem = (props) => {
    return (
        <div>
            <div className={mod.message}>{props.message}</div>
        </div>
    );
}

export default MessageItem;