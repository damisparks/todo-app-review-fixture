import { test } from 'node:test';
import assert from 'node:assert/strict';
import { listTodos, addTodo, toggleTodo, removeTodo, _resetForTests } from '../src/todoStore.js';

test('addTodo adds a todo and listTodos returns it', () => {
  _resetForTests();
  const todo = addTodo('Buy milk');
  assert.equal(todo.text, 'Buy milk');
  assert.equal(todo.done, false);
  assert.equal(listTodos().length, 1);
});

test('toggleTodo flips the done flag', () => {
  _resetForTests();
  const todo = addTodo('Walk the dog');
  const toggled = toggleTodo(todo.id);
  assert.equal(toggled.done, true);
});

test('toggleTodo returns null for an unknown id', () => {
  _resetForTests();
  assert.equal(toggleTodo(999), null);
});

test('removeTodo removes an existing todo', () => {
  _resetForTests();
  const todo = addTodo('Temporary');
  assert.equal(removeTodo(todo.id), true);
  assert.equal(listTodos().length, 0);
});

test('removeTodo returns false for an unknown id', () => {
  _resetForTests();
  assert.equal(removeTodo(999), false);
});
