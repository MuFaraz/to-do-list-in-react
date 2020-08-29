import React from 'react'

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const ToDoList = (props) => {
    return <li><span className="delete_icon" 
        onClick={() => {
            props.onSelect(props.id)
        }}>
        <DeleteIcon /></span>{props.text}</li>
}
export default ToDoList;
