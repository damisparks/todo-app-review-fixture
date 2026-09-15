let nextId = 1;
const todos = [];

export function listTodos() {
  return todos;
}

export function addTodo(text) {
  const todo = { id: nextId++, text, done: false };
  todos.push(todo);
  return todo;
}

export function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return null;
  todo.done = !todo.done;
  return todo;
}

export function removeTodo(id) {
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) return false;
  todos.splice(index, 1);
  return true;
}

export function _resetForTests() {
  todos.length = 0;
  nextId = 1;
}
