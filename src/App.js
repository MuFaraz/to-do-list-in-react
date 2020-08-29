import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';

function App() {
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

  const delbtn = (id) => {
    console.log("deleted" + id)
    setItem((prevValue) => {
      return prevValue.filter((curValue, index) => {
        return index !== id;
      })
    })
  }
  return (<>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo list</h1>
        <br />{}
        <input type="text" placeholder="Enter" onChange={inputEvent} value={text} />
        <button onClick={AddItem}>+</button>
        <ol>
          {item.map((curValue, index) => {
            return <ToDoList text={curValue} key={index} id={index} onSelect={delbtn} />
          })}
        </ol>
      </div>

    </div>
  </>
  );
}

export default App;
