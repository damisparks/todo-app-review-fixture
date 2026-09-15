import { listTodos } from './todoStore.js';

// Searches todos by substring match against the query.
export function searchTodos(query) {
  var results = [];
  var all = listTodos();
  for (var i = 0; i < all.length; i++) {
    var todo = all[i];
    if (todo.text.indexOf(query) !== -1) {
      results.push(todo);
    }
  }
  return results;
}

export function searchTodosByStatus(query, done) {
  var results = [];
  var all = listTodos();
  for (var i = 0; i < all.length; i++) {
    var todo = all[i];
    if (todo.text.indexOf(query) !== -1) {
      if (todo.done === done) {
        results.push(todo);
      }
    }
  }
  return results;
}
