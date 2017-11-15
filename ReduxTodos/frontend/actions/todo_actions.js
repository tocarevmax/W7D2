export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

// window.receiveTodos = receiveTodos;
// window.receiveTodo = receiveTodo;
// //
// const newState = [{
//     id: 5,
//     title: 'wash snake',
//     body: 'clean cage',
//     done: false
//   },
//   {
//     id: 6,
//     title: 'wash code',
//     body: 'with eyes',
//     done: true
//   }];
//
// window.newState = newState;

// const newState = {
//   todos: {5: {
//             id: 5,
//             title: 'wash 1',
//             body: 'with soap',
//             done: false
//           },
//           6: {
//             id: 6,
//             title: 'wash 2',
//             body: 'with shampoo',
//             done: true
//           }}
// };
//
// window.newState = newState;
//
