import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// COMMENT OUT BEFORE PRODUCTION

import {indexTodos} from './util/todo_api_util';

// COMMENT OUT BEFORE PRODUCTION

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // COMMENT OUT BEFORE PRODUCTION
  window.store = store;
  window.indexTodos = indexTodos;
  // COMMENT OUT BEFORE PRODUCTION


  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, rootEl);
});
