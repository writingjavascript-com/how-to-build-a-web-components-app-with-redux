import {LitElement, html} from 'lit-element';

import './wj-add-todo.js';
import './wj-todo-list.js';
import './wj-footer.js';

class WJTodos extends LitElement {
  render() {
    return html`
      <wj-add-todo></wj-add-todo>
      <wj-todo-list></wj-todo-list>
      <wj-footer></wj-footer>
    `;
  }
}

customElements.define('wj-todos', WJTodos);