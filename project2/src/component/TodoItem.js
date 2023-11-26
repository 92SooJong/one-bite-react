import React, { useContext } from "react";
import { TodoContext } from "../App";
import "./TodoItem.css"

const TodoItem = ({ id, content, isDone, createdDate }) => {
    
    const { onUpdate, onDelete } = useContext(TodoContext);

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDelete = () => {
        onDelete(id);
    }


    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input onChange={onChangeCheckbox} checked={isDone} type="checkbox"></input>
            </div>
            <div className="title_col">{content}</div>
            <div className="date_col">{new Date(createdDate).toLocaleDateString()}</div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    )
    
}

export default React.memo(TodoItem);