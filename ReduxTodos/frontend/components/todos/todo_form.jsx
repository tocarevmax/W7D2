import React from 'react';
import { uniqueId } from '../../util/id_generator';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: "",
                  body: "",
                  done: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({title: "", body: ""});
  }

  update(property) {
    return (e) => {
      return this.setState({[property]: e.target.value});
    };
  }

  updateTitle(e) {
    return this.setState({['title']: e.target.value});
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>Title
          <input onChange = {this.updateTitle} value={this.state.title}></input>
        </label>

        <label>Body
          <input onChange = {this.update('body')} value={this.state.body}></input>
        </label>

        <button>New Todo</button>
      </form>
    );
  }
}

export default TodoForm;
