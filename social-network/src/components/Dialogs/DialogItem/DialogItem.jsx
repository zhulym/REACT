import React from "react";
import { NavLink } from "react-router-dom";
import mod from "./DialogItem.module.css";


const DialogItem = (props) => {

    let path = "/my_dialogs/" + props.id;

    return (
        <div className={mod.dialogItems}>
            <div className={mod.dialog}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div >
    );
}

export default DialogItem;