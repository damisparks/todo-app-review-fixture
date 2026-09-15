import express from 'express';
import { listTodos, addTodo, toggleTodo, removeTodo } from './todoStore.js';
import { validateTodoText } from './validation.js';
import { searchTodos } from './search.js';

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.get('/todos', (req, res) => {
  res.json(listTodos());
});

app.get('/todos/search', (req, res) => {
  res.json(searchTodos(req.query.q));
});

app.post('/todos', (req, res) => {
  const { text } = req.body;
  const validation = validateTodoText(text);
  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }
  res.status(201).json(addTodo(text.trim()));
});

app.patch('/todos/:id/toggle', (req, res) => {
  const todo = toggleTodo(Number(req.params.id));
  if (!todo) return res.status(404).json({ error: 'not found' });
  res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
  const removed = removeTodo(Number(req.params.id));
  if (!removed) return res.status(404).json({ error: 'not found' });
  res.status(204).end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`todo-app-review-fixture listening on port ${PORT}`);
});

export default app;
