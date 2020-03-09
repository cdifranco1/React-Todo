import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super ();
    this.state = {
      list: [],
      newItem: {
        task: '',
        id: '',
        completed: false
      }
    }
  }

  handleChange = (e) => {
    this.setState({newItem:
      {
        task: e.target.value,
        id: Date.now(),
        completed: false
      }
    })
  }

  addTodo = (e) => {
    this.setState({
      list: [...this.state.list, this.state.newItem]
    })
    e.preventDefault();
    this.setState({
      newItem: {
        task: '',
        id: '',
        completed: false
      }
    })
  }

  markCompleted = (task) => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === task.id){
          return {...item, completed: !item.completed}
        } else {
          return item
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(item => 
        !item.completed
      )
    })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          addTodo={this.addTodo}
          value={this.state.newItem.task}
          onChange={this.handleChange}
          onClick={this.clearCompleted}
        />
        <TodoList markCompleted={this.markCompleted} list={this.state.list}/>
      </div>
    );
  }
}

export default App;
