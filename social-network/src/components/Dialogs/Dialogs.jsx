import React from "react";
import mod from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.messagesData.map(m => <MessageItem message={m.message} />);

    return (
        <div className={mod.dialogs}>
            <div className={mod.dialogItems}>
                <div className={mod.myFriends}>
                    <span>My friends</span>
                </div>

                {dialogsElements}
            </div>

            <div className={mod.messages}>
                <div className={mod.myFriends}>
                    <span>My dialog</span>
                </div>

                {messagesElements}

                <div>
                    <textarea className={mod.textarea} rows="5"></textarea>
                </div>
                <div>
                    <button>Send message</button>
                </div>
            </div>
        </div >
    );
}

export default Dialogs;