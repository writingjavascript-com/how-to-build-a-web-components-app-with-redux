let nextTodoId = 0;

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
