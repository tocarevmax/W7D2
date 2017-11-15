// show

let show = function show(id) {
  $.ajax({
    method: 'GET',
    url: `/api/todos/${id}`
  }).then(
    todos => console.log(todos),
    error => console.log(error)
  );
};

show(3);

// index

const todosIndex = () => {
  $.ajax({
    method: 'GET',
    url: '/api/todos',
  }).then(
    todos => console.log(todos),
    error => console.log(error)
  );
};


// create new todo
$.ajax({
  method: 'POST',
  url: '/api/todos',
  data: {
          todos: {title: 'new thing', body: 'new body'}
        }
}).then(
  todos => console.log(todos),
  error => console.log(error)
);

// destroy
let deleteTodo = (id) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/todos/${id}`
  }).then(
    todos => console.log(todos),
    error => console.log(error)
  );
};


deleteTodo(3);

// update
let updateTodo = (id, attributes) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/todos/${id}`,
    data: {
            todos: attributes
          }
  }).then(
    todos => console.log(todos),
    error => console.log(error)
  );
};

let attr = {title: 'rocknroll', body: 'forever'};
updateTodo(1, attr);

// key={uniqueId()}

// let actionFunction = (dispatch1) => {
//   console.log('If this prints out, the thunk middleware is working!')
// }
//
// store.dispatch(actionFunction);




store.dispatch(fetchTodos())
store.dispatch(createTodo({title: 'hw', body: 'love it'}))
