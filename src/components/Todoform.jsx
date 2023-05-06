import React, {useState} from "react";

const Todoform = ({addTodo}) => {
    const [value,setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);

        setValue('');


    }
  return (
    <form className="Todoform" onSubmit={handleSubmit}>
      <input className="todo-input" type="text" placeholder="Add your task" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
      <button type="submit" className="todo-btn action-btn">Add Task</button>
    </form>
  );
};

export default Todoform;
