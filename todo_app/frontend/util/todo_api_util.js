export const indexTodos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/todos',
  });
};

export const postTodo = (params) => {
  return $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: {
            todos: params
          }
  });
};
