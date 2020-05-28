import React from "react";

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        textDecoration: "line-through",
        color: "grey"
    }

    return (
        // <div className="todo-item">
        //     <input type="checkbox" onChange={() => props.handleChange(props.item.id)} checked={props.item.completed} />
        //     {props.item.completed ? <p><i>{props.item.text}</i></p> : <p><b>{props.item.text}</b></p>}
        // </div>

        <div className="todo-item">
            <input type="checkbox" onChange={() => props.handleChange(props.item.id)} checked={props.item.completed} />
            <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
        </div>

    )
}

export default TodoItem;  