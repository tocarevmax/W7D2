import React from 'react';
import {TodoListItem} from './todo_list_item';
import TodoForm from './todo_form';
import {uniqueId} from '../../util/id_generator';
import {todosIndex} from '../../util/todo_api_util';

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render(){
    return (
      <div>
        <ul>
          {this.props.todos.map((todo,idx) => {
            return (<TodoListItem  todo={todo} />);
          })}
        </ul>
        < TodoForm receiveTodo = {this.props.receiveTodo}
                   createTodo = {this.props.createTodo}
        />

      </div>
    );

  }
}

// < TodoForm receiveTodo = {props.receiveTodo} />


export default TodoList;
