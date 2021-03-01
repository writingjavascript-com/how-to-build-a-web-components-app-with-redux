import {LitElement, html, css} from 'lit-element';
import {connect} from 'pwa-helpers';

import {store} from './redux/store.js';
import {setVisibilityFilter, VisibilityFilters} from './redux/actions.js';

class WJFooter extends connect(store)(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
        margin-top: 1em;
      }
    `;
  }

  static get properties() {
    return {
      filter: {type: String}
    };
  }

  stateChanged(state) {
    this.filter = state.reducer.filter;
  }

  render() {
    return html`
      <span>Show:</span>
      <button
        ?disabled="${this.filter === VisibilityFilters.SHOW_ALL}"
        @click="${() => store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))}"
      >All</button>
      <button
        ?disabled="${this.filter === VisibilityFilters.SHOW_ACTIVE}"
        @click="${() => store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))}"
      >Active</button>
      <button
        ?disabled="${this.filter === VisibilityFilters.SHOW_COMPLETED}"
        @click="${() => store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))}"
      >Completed</button>
    `;
  }
}

customElements.define('wj-footer', WJFooter);