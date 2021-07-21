import React, { useContext } from "react";
import { ContextTodo } from "../../context";

const TodoItem = (props) => {
  const { dispatch } = useContext(ContextTodo);

  return (
    <div className="todo__item">
      <div className="item__wrap">
        <div>
          <input
            id={props.id}
            className="item__checkbox"
            type="checkbox"
            checked={props.completed}
            onChange={() =>
              dispatch({
                type: "toggle",
                payload: props.id,
              })
            }
          />
          <span className={props.completed ? "item__checked" : ""}>
            {props.title}
          </span>
        </div>

        <span>
          <button
            type="button"
            class="btn btn-outline-danger"
            onClick={() =>
              dispatch({
                type: "remove",
                payload: props.id,
              })
            }
          >
            <i class="bi bi-trash-fill"></i>Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
