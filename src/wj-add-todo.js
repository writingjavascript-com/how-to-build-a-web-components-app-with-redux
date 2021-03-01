import {LitElement, html} from 'lit-element';

import {store} from './redux/store.js';
import {addTodo} from './redux/actions.js';

class WJAddTodo extends LitElement {
  _addTodo(event) {
    event.preventDefault();

    const input = this.shadowRoot.querySelector('input');

    const value = input.value.trim() || undefined;
    if (value) {
      store.dispatch(addTodo(value));
      input.value = '';
    }
  }

  render() {
    return html`
      <form @submit="${this._addTodo}">
        <input type="text">
        <button type="submit">Add todo</button>
      </form>
    `;
  }
}
window.store = store

customElements.define('wj-add-todo', WJAddTodo);