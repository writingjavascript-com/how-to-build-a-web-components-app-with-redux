import {VisibilityFilters} from './actions.js';

const startState = {
  todos: [],
  filter: VisibilityFilters.SHOW_ALL
};

export function reducer(state = startState, action) {
  switch (action.type) {

    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };

    case 'TOGGLE_TODO':
      // Loop the the todos and invert the completed property for each todo
      const todos = state.todos.map((todo) => (todo.id === action.id) ?
        {...todo, completed: !todo.completed} : todo);

      return {...state, todos};

    case 'SET_VISIBILITY_FILTER':
      return {...state, filter: action.filter};

    default:
      return state

  }
}