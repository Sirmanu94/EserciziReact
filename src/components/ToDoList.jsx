import { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [toDoInput, setToDoInput] = useState("");

  function handleChange(e) {
    setToDoInput(e.target.value);
  }

  function handleSubmit() {
   setTodos([...todos, toDoInput]);
  setToDoInput("");  
  }

  function handleReset(){
    setTodos([])
  }

  function handleRemove(index) {
let newTodos = todos.filter((todo,i) => i !== index);
setTodos(newTodos)
  }


  return (
    <>
      <h1>To Do List</h1>
      <input type="text" name="todo" value={toDoInput} onChange={handleChange} />
      <button onClick={handleSubmit}>Aggiungi</button>
      <button onClick={handleReset}>Reset</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo} <button onClick={()=>handleRemove(index)}>x</button></li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
