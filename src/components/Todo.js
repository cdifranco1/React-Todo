import React from 'react';


const Todo = (props) =>
  <div>
    <span 
      style={props.task.completed === true ?{textDecoration: 'line-through'} : {textDecoration: 'none'}} 
      onClick={() => props.markCompleted(props.task)}
    >
      {props.task.task}
    </span>
  </div>



export default Todo;
