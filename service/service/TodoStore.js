const todos = [];
const todoId = 1;

function getTodos() {
  return todos;
}

const addTodo = (todo) => {
  const newTodo = { ...todo, id: todoId++ };
  todos.push(newTodo);
  return newTodo;
};
export default { getTodos, addTodo };
