export const allTodos = (state) => {
  return Object.keys(state.todos).map((key) => {
    return state.todos[key];
  });
};

window.allTodos = allTodos;
