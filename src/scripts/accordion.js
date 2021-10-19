// only works with h3
class AccordionContainerElement extends HTMLElement {
  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
    this.keys = {
      down: 40,
      up: 38,
      home: 36,
      end: 35,
    };
    this.accordionToggles = ['h3 > div[aria-expanded]'].join(',');
  }

  upgradeHeadings() {
    const headings = Array.from(this.querySelectorAll('[data-summary]'));
    headings.forEach((heading) => {
      const parent = document.createElement('div');
      parent.setAttribute('aria-expanded', 'false');
      const children = Array.from(heading.childNodes);
      children.forEach((child) => {
        parent.appendChild(child.cloneNode(true));
        heading.removeChild(child);
      });
      parent.appendChild(document.createElement('chevron-up-icon'));
      heading.appendChild(parent);
    });
  }

  upgradePanels() {
    const panels = Array.from(this.querySelectorAll('[data-panel]'));
    panels.forEach((panel) => {
      panel.classList.add('hidden');
    });
  }

  connectedCallback() {
    this.upgradeHeadings();
    this.upgradePanels();
    this.addEventListener('click', this._handleClick, false);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._handleClick, false);
  }

  _handleClick(event) {
    const toggle = event.target.closest(this.accordionToggles);
    if (!toggle) return;

    const panel = toggle.parentElement.nextElementSibling;
    const eventShouldFire = this.dispatchEvent(
      new CustomEvent('accordion-container-toggled', {
        bubbles: true,
        cancelable: true,
        detail: {
          toggle,
          panel,
        },
      }),
    );
    if (!eventShouldFire) return;

    const isExpanded = toggle.getAttribute('aria-expanded') == 'true' ? true : false;

    if (!isExpanded) {
      toggle.parentElement.classList.add('expanded');
      toggle.removeChild(toggle.querySelector('chevron-up-icon'));
      toggle.appendChild(document.createElement('chevron-down-icon'));
      if (window.fathom) {
        window.fathom.trackGoal('C6WEDW4U', 0);
      }
    } else {
      toggle.parentElement.classList.remove('expanded');
      toggle.removeChild(toggle.querySelector('chevron-down-icon'));
      toggle.appendChild(document.createElement('chevron-up-icon'));
    }

    toggle.setAttribute('aria-expanded', !isExpanded);
    isExpanded ? panel.classList.add('hidden') : panel.classList.remove('hidden');
  }
}

if (!window.customElements.get('accordion-container')) {
  window.AccordionContainerElement = AccordionContainerElement;
  window.customElements.define('accordion-container', AccordionContainerElement);
}
