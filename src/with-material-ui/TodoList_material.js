import React, { useState } from "react";
import '../App.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';


const TodoList_material = () => {

    const [text, setText] = useState("");
    const [item, setItem] = useState([]);
    const inputEvent = (event) => {
        setText(event.target.value);
    }
    const AddItem = () => {
        setItem((prevVale) => {
            return [
                ...prevVale,
                text
            ]
        });
        setText('');
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo list</h1>
                    <br />
                    <input type="text" placeholder="Enter" onChange={inputEvent} value={text} />
                    <Button className="newBtn" onClick={AddItem}>
                        <AddIcon />
                    </Button>

                    <ol>
                        {item.map((curValue, index) => {
                            return <li>
                                <span className="delete_icon" style={{textDecoration:"line-through"}}>
                                    <DeleteIcon />
                                </span>{curValue}</li>
                        })}
                    </ol>
                </div>

            </div>
        </>
    )
}
export default TodoList_material;