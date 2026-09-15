import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateTodoText, isValidTodoId } from '../src/validation.js';

test('validateTodoText accepts a normal string', () => {
  assert.equal(validateTodoText('Buy milk').valid, true);
});

test('validateTodoText rejects a non-string', () => {
  const result = validateTodoText(42);
  assert.equal(result.valid, false);
  assert.match(result.error, /must be a string/);
});

test('validateTodoText rejects an empty/whitespace-only string', () => {
  assert.equal(validateTodoText('   ').valid, false);
});

test('validateTodoText rejects text over the max length', () => {
  const result = validateTodoText('a'.repeat(201));
  assert.equal(result.valid, false);
  assert.match(result.error, /at most 200 characters/);
});

test('validateTodoText accepts text at exactly the max length', () => {
  assert.equal(validateTodoText('a'.repeat(200)).valid, true);
});

test('isValidTodoId accepts positive integers', () => {
  assert.equal(isValidTodoId(1), true);
  assert.equal(isValidTodoId(1000), true);
});

test('isValidTodoId rejects zero, negatives, and non-integers', () => {
  assert.equal(isValidTodoId(0), false);
  assert.equal(isValidTodoId(-5), false);
  assert.equal(isValidTodoId(1.5), false);
  assert.equal(isValidTodoId('1'), false);
});
