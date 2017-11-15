import React from 'react';
import {uniqueId} from '../../util/id_generator';

export const TodoListItem = (props) => {
  return (<li>{props.todo.title} : {props.todo.body}</li>);
};
