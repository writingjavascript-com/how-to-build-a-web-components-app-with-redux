import {LitElement, html} from 'lit-element';
import {connect} from 'pwa-helpers';

import {store} from './redux/store.js';
import {toggleTodo, VisibilityFilters} from './redux/actions.js';

class WJTodoList extends connect(store)(LitElement) {
  static get properties() {
    return {
      todos: {type: Array}
    };
  }

  constructor() {
    super();
    this.todos = [];
  }

  stateChanged(state) {
    this.todos = state.reducer.todos.filter((todo) => {
      switch (state.reducer.filter) {
        case VisibilityFilters.SHOW_ALL:
          return true;
        case VisibilityFilters.SHOW_COMPLETED:
          return todo.completed;
        case VisibilityFilters.SHOW_ACTIVE:
          return !todo.completed;
        default:
          throw new Error('Unknown filter: ' + state.reducer.filter);
      }
    });
  }

  render() {
    return html`
      <h1>Todo</h1>
      ${this.todos.length > 0 ? (this.todos).map((todo) => html`
        <div>
          <input
            .checked="${todo.completed}"
            type="checkbox"
            id="todo-${todo.id}"
            value="${todo.id}"
            @input="${() => store.dispatch(toggleTodo(todo.id))}"
          >
          <label for="todo-${todo.id}">${todo.text}</label>
        </div>
      `) : html`
        <p><em>Nothing to show here!</em></p>
      `}
    `;
  }
}

customElements.define('wj-todo-list', WJTodoList);
