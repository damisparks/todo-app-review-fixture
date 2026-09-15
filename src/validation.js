const MAX_TODO_TEXT_LENGTH = 200;

/**
 * Validates a todo's text field.
 * @param {unknown} text
 * @returns {{ valid: boolean, error?: string }}
 */
export function validateTodoText(text) {
  if (typeof text !== 'string') {
    return { valid: false, error: 'text must be a string' };
  }
  const trimmed = text.trim();
  if (trimmed.length === 0) {
    return { valid: false, error: 'text must not be empty' };
  }
  if (trimmed.length > MAX_TODO_TEXT_LENGTH) {
    return { valid: false, error: `text must be at most ${MAX_TODO_TEXT_LENGTH} characters` };
  }
  return { valid: true };
}

/**
 * Validates a todo id, which must be a positive integer.
 * @param {unknown} id
 * @returns {boolean}
 */
export function isValidTodoId(id) {
  return Number.isInteger(id) && id > 0;
}
