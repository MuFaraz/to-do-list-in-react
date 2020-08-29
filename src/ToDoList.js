import React from 'react'

const ToDoList = (props) => {
    return <li><button
        onClick={() => {
            props.onSelect(props.id)
        }}>
        x</button>{props.text}</li>
}
export default ToDoList;
