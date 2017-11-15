import React from 'react';

export const TodoListItem = (props) => {
  return (<li>{props.todo.title} : {props.todo.body}</li>);
};
