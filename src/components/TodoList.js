import React from 'react';
import Todo from './Todo';


const TodoList = (props) =>
  props.list.map(task => 
    <Todo task={task} markCompleted={props.markCompleted}/>
  )

export default TodoList;
