'use strict';

class BangleLogo extends HTMLElement {
  constructor() {
    super();
    let template = document.getElementById('bangle-io-logo');

    this._contents = template.content.cloneNode(true);
  }
  connectedCallback() {
    const className = this.getAttribute('data-class');
    this.appendChild(this._contents);
    this.firstElementChild.setAttribute('class', className);
  }
}

//then you need to define it to make it available to the DOM
customElements.define('bangle-logo', BangleLogo);
