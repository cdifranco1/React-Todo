import React from 'react'; 

const TodoForm = (props) =>
  <form onSubmit={props.addTodo}>
    <label>Add to-do: </label>
    <input 
      type="text" 
      task="item" 
      placeholder="...to-do" 
      value={props.value}
      onChange={props.onChange}
    />
    <button type="submit">Add Task</button>
    <button onClick={props.onClick}>Clear Completed</button>
  </form>

export default TodoForm;