import './scripts/accordion.js';

class BangleLogo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
        <path
          d="M237.44 235.98c24.29-24.72 40.6-53.21 47.18-79.5 6.54-26.17 3.59-51.14-12.26-67.28-15.86-16.14-40.4-19.13-66.1-12.48-25.84 6.7-53.84 23.3-78.12 48.01-24.29 24.72-40.6 53.21-47.17 79.5-6.55 26.18-3.6 51.14 12.26 67.28 15.85 16.14 40.39 19.13 66.1 12.48 25.83-6.7 53.83-23.3 78.11-48.01Z"
          stroke="#000"
          stroke-width="10"
        />
        <path
          d="M230.93 231.25c24.29-24.72 40.6-53.22 47.17-79.5 6.55-26.18 3.6-51.14-12.26-67.28-15.85-16.14-40.38-19.14-66.1-12.48-25.83 6.69-53.83 23.3-78.11 48-24.29 24.72-40.6 53.22-47.17 79.51-6.55 26.17-3.6 51.14 12.26 67.27 15.85 16.14 40.38 19.14 66.1 12.48 25.83-6.69 53.83-23.29 78.11-48Z"
          stroke="#000"
          stroke-width="10"
        />
        <path
          d="M225.35 226.51c24.29-24.71 40.6-53.21 47.17-79.5 6.54-26.17 3.6-51.14-12.26-67.28-15.85-16.13-40.39-19.13-66.1-12.47-25.83 6.69-53.83 23.29-78.12 48-24.28 24.72-40.6 53.22-47.17 79.5-6.54 26.18-3.6 51.14 12.26 67.28s40.4 19.14 66.1 12.48c25.84-6.69 53.84-23.3 78.12-48Z"
          stroke="#000"
          stroke-width="10"
        />
        <path
          d="M223.5 224.62c24.28-24.72 40.59-53.21 47.16-79.5 6.54-26.18 3.6-51.14-12.26-67.28-15.85-16.14-40.39-19.14-66.1-12.48-25.83 6.7-53.83 23.3-78.12 48.01-24.28 24.72-40.6 53.21-47.17 79.5-6.54 26.17-3.6 51.14 12.26 67.28s40.4 19.13 66.1 12.48c25.84-6.7 53.84-23.3 78.12-48.01Z"
          stroke="#7FCEEE"
          stroke-width="10"
        />
        <path
          d="M216.98 219.88c24.28-24.71 40.6-53.2 47.17-79.5 6.54-26.17 3.6-51.14-12.26-67.27-15.86-16.14-40.39-19.14-66.1-12.48-25.83 6.69-53.83 23.3-78.12 48-24.28 24.72-40.6 53.22-47.17 79.51-6.54 26.17-3.6 51.14 12.26 67.27 15.86 16.14 40.39 19.14 66.1 12.48 25.84-6.69 53.83-23.29 78.12-48Z"
          stroke="#7FCEEE"
          stroke-width="10"
        />
        <path
          d="M213.26 216.1c24.28-24.72 40.6-53.22 47.17-79.5 6.54-26.18 3.6-51.14-12.26-67.28s-40.39-19.14-66.1-12.48c-25.83 6.7-53.83 23.3-78.12 48-24.28 24.72-40.6 53.22-47.17 79.51-6.54 26.17-3.6 51.14 12.26 67.28 15.86 16.13 40.39 19.13 66.1 12.48 25.84-6.7 53.83-23.3 78.12-48.01Z"
          stroke="#7FCEEE"
          stroke-width="10"
        />
        <path
          d="M207.68 211.36c24.28-24.71 40.6-53.2 47.17-79.5 6.54-26.17 3.6-51.14-12.26-67.27-15.86-16.14-40.4-19.14-66.1-12.48-25.84 6.69-53.84 23.29-78.12 48-24.29 24.72-40.6 53.22-47.17 79.5-6.54 26.18-3.6 51.15 12.26 67.28 15.86 16.14 40.39 19.14 66.1 12.48 25.83-6.69 53.83-23.3 78.12-48Z"
          stroke="#7FCEEE"
          stroke-width="10"
        />
        <path
          d="M203.96 207.58c24.28-24.72 40.6-53.22 47.17-79.5 6.54-26.18 3.6-51.14-12.26-67.28s-40.4-19.14-66.1-12.48c-25.84 6.69-53.84 23.3-78.12 48-24.29 24.72-40.6 53.22-47.17 79.51-6.54 26.17-3.6 51.14 12.26 67.28 15.85 16.13 40.39 19.13 66.1 12.47 25.83-6.69 53.83-23.29 78.12-48Z"
          stroke="#7FCEEE"
          stroke-width="10"
        />
        <path
          d="M200.24 203.79c24.28-24.72 40.6-53.21 47.16-79.5 6.55-26.17 3.6-51.14-12.25-67.28-15.86-16.14-40.4-19.13-66.1-12.48-25.84 6.7-53.84 23.3-78.12 48.01-24.29 24.72-40.6 53.21-47.17 79.5-6.55 26.18-3.6 51.14 12.26 67.28 15.85 16.14 40.38 19.13 66.1 12.48 25.83-6.7 53.83-23.3 78.12-48.01Z"
          stroke="#000"
          stroke-width="10"
        />
        <path
          d="M196.51 200c24.29-24.71 40.6-53.21 47.17-79.5 6.55-26.17 3.6-51.14-12.26-67.28-15.85-16.13-40.38-19.13-66.1-12.47-25.83 6.69-53.83 23.29-78.11 48-24.29 24.72-40.6 53.22-47.17 79.5-6.55 26.18-3.6 51.15 12.26 67.28 15.85 16.14 40.38 19.14 66.1 12.48 25.83-6.69 53.83-23.3 78.11-48Z"
          stroke="#000"
          stroke-width="10"
        />
        <path
          d="M191.86 195.27c24.29-24.72 40.6-53.21 47.17-79.5 6.54-26.17 3.6-51.14-12.26-67.28-15.85-16.14-40.39-19.14-66.1-12.48-25.83 6.7-53.83 23.3-78.12 48.01-24.28 24.72-40.6 53.21-47.17 79.5-6.54 26.17-3.59 51.14 12.27 67.28 15.85 16.13 40.38 19.13 66.1 12.48 25.83-6.7 53.83-23.3 78.11-48.01Z"
          stroke="#000"
          stroke-width="10"
        />
      </svg>`;
    const className = this.getAttribute('child-class');
    this.firstElementChild.setAttribute('class', className);
  }
}

if (!window.customElements.get('bangle-logo')) {
  window.BangleLogo = BangleLogo;
  window.customElements.define('bangle-logo', BangleLogo);
}

class ChevronDownIcon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    class="chevron-down"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
      fill="currentColor"
    />
  </svg>`;
    const className = this.getAttribute('child-class');
    this.firstElementChild.setAttribute('class', className);
  }
}

if (!window.customElements.get('chevron-down-icon')) {
  window.ChevronDownIcon = ChevronDownIcon;
  window.customElements.define('chevron-down-icon', ChevronDownIcon);
}

class CheckIcon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
      fill="currentColor"
    />
  </svg>`;
    const className = this.getAttribute('child-class');
    this.firstElementChild.setAttribute('class', className);
  }
}

if (!window.customElements.get('check-icon')) {
  window.CheckIcon = CheckIcon;
  window.customElements.define('check-icon', CheckIcon);
}

class ChevronUpIcon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.6569 16.2427L19.0711 14.8285L12.0001 7.75739L4.92896 14.8285L6.34317 16.2427L12.0001 10.5858L17.6569 16.2427Z"
      fill="currentColor"
    />
  </svg>`;
    const className = this.getAttribute('child-class');
    this.firstElementChild.setAttribute('class', className);
  }
}

if (!window.customElements.get('chevron-up-icon')) {
  window.ChevronUpIcon = ChevronUpIcon;
  window.customElements.define('chevron-up-icon', ChevronUpIcon);
}

class BangleHeader extends HTMLElement {
  connectedCallback() {
    const currentPath = (p) => window.location.pathname === p;
    this.innerHTML = `
    <header class="w-full flex justify-center px-4">
      <div class="w-full xl:mx-12 xl:max-w-7xl flex justify-between">
        <div class="inline-flex items-center">
          <bangle-logo child-class="w-8 h-8"></bangle-logo>
          <a class="text-3xl pl-1" href="https://bangle.io">Bangle.io</a>
        </div>
        <nav role="navigation" class="flex items-center">
          <a class="ml-6 ${currentPath('/help') ? 'active ' : ''}" href="/help">Help</a>
          <a class="ml-6 ${currentPath('/community') ? 'active ' : ''}" href="/community">Community</a>
        </nav>
      </div>
    </header>`;
  }
}

if (!window.customElements.get('bangle-header')) {
  window.BangleHeader = BangleHeader;
  window.customElements.define('bangle-header', BangleHeader);
}

class BangleFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="w-full flex justify-center px-2 bg-gray-200 py-12 text-gray-600 dark:bg-gray-700 dark:text-gray-100">
      <div class="content-max-width w-full flex  flex-col lg:flex-row justify-between px-14">
        <div class="flex flex-col">
          <div class="">© 2021 Bangle.io</div>
          <div class="flex flex-col md:flex-row items-start mt-2">
            <a class="pr-5 py-1 text-gray-600 lg:hover:text-gray-900 dark:text-gray-200 dark:lg:hover:text-white" href="/about">About</a>
            <a class="pr-5 py-1 text-gray-600 lg:hover:text-gray-900 dark:text-gray-200 dark:lg:hover:text-white" href="/">Features</a>
            <a class="pr-5 py-1 text-gray-600 lg:hover:text-gray-900 dark:text-gray-200 dark:lg:hover:text-white" href="/community">Community</a>
            <a class="pr-5 py-1 text-gray-600 lg:hover:text-gray-900 dark:text-gray-200 dark:lg:hover:text-white" href="/help">Help</a>
            <a class="pr-5 py-1 text-gray-600 lg:hover:text-gray-900 dark:text-gray-200 dark:lg:hover:text-white" href="/privacy">Privacy Policy</a>
            <a class="pr-5 py-1 text-gray-600 lg:hover:text-gray-900 dark:text-gray-200 dark:lg:hover:text-white" href="/roadmap">Roadmap</a>
          </div>
        </div>
        <div class="flex flex-row justify-between">
          <div class="flex flex-row items-center mt-2 lg:mt-0">
            <a
              class="pr-8 inline-flex flex-row-reverse"
              href="https://twitter.com/bangle_io"
              target="_blank"
            >
              <span class="pl-2 sr-only">Twitter</span>
              <svg
                aria-hidden="true"
                class="h-6 w-6"
                fill="#1DA1F2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                ></path>
              </svg>
            </a>
            <a
              class="pr-8 inline-flex flex-row-reverse"
              href="https://discord.gg/GvvbWJrVQY"
              target="_blank"
            >
              <span class="pl-2 sr-only">Discord</span>
              <svg
                aria-hidden="true"
                class="h-6 w-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 71 55"
              >
                <g clip-path="url(#a)">
                  <path
                    d="M60.1 4.9A58.55 58.55 0 0 0 45.65.42a.22.22 0 0 0-.23.1 40.78 40.78 0 0 0-1.8 3.7 54.05 54.05 0 0 0-16.23 0 37.4 37.4 0 0 0-1.83-3.7.23.23 0 0 0-.23-.1c-5.07.87-9.92 2.4-14.45 4.48a.2.2 0 0 0-.1.08C1.58 18.73-.94 32.14.3 45.39c0 .07.05.13.1.17a58.88 58.88 0 0 0 17.72 8.96c.1.03.2 0 .25-.08a42.08 42.08 0 0 0 3.63-5.9.22.22 0 0 0-.12-.31 38.77 38.77 0 0 1-5.54-2.64.23.23 0 0 1-.02-.38l1.1-.86a.22.22 0 0 1 .23-.03 41.99 41.99 0 0 0 35.68 0 .22.22 0 0 1 .23.02c.36.3.73.59 1.1.87.13.1.12.3-.02.38a36.38 36.38 0 0 1-5.54 2.63.23.23 0 0 0-.12.32 47.25 47.25 0 0 0 3.63 5.9c.05.07.15.1.24.08 5.8-1.8 11.69-4.5 17.76-8.96.06-.04.09-.1.1-.17C72.16 30.08 68.2 16.78 60.2 5a.18.18 0 0 0-.1-.1ZM23.73 37.33c-3.5 0-6.38-3.22-6.38-7.16 0-3.95 2.82-7.16 6.38-7.16 3.58 0 6.43 3.24 6.38 7.16 0 3.94-2.83 7.16-6.38 7.16Zm23.59 0c-3.5 0-6.38-3.22-6.38-7.16 0-3.95 2.82-7.16 6.38-7.16 3.58 0 6.43 3.24 6.38 7.16 0 3.94-2.8 7.16-6.38 7.16Z"
                    fill="#5865F2"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h71v55H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              class="pr-8 inline-flex flex-row-reverse"
              href="https://github.com/bangle-io"
              target="_blank"
            >
              <span class="pl-2 sr-only">Github</span>
              <img
                src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
                width="22"
                height="22"
                class="d-block"
                loading="lazy"
                decoding="async"
                alt="GitHub mark"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>`;
  }
}

if (!window.customElements.get('bangle-footer')) {
  window.BangleFooter = BangleFooter;
  window.customElements.define('bangle-footer', BangleFooter);
}

function last(arr) {
  return arr[arr.length - 1];
}

class SectionVideo extends HTMLElement {
  static get observedAttributes() {
    return ['data-src'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const src = this.querySelector('video source');

    if (src) {
      let video = this.querySelector('video');

      video.src = `${this.getPath()}.mp4`;
      video.poster = this.getPath() + '.webp';
      video.load();
      video.play();
    }
  }

  getPath() {
    const width = this.getAttribute('width');
    const height = this.getAttribute('height');
    return `${this.getAttribute('data-src')}-${width}x${height}`;
  }

  getVideoHTML() {
    const width = this.getAttribute('width');
    const height = this.getAttribute('height');
    return `<video autoplay muted loop playsinline 
      class="${this.getAttribute('child-class')}"
      height="${height}"
      width="${width}"
      poster="${this.getPath()}.webp"
    >
      <source src="${this.getPath()}.webm" type="video/webm" />
      <source src="${this.getPath()}.mp4" type="video/mp4" />
    </video>`;
  }

  connectedCallback() {
    this.innerHTML = this.getVideoHTML();
  }
}

if (!window.customElements.get('section-video')) {
  window.SectionVideo = SectionVideo;
  window.customElements.define('section-video', SectionVideo);
}

class SectionFeatureListItem extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    const parentSection = this.closest('section');
    const listItems = [...parentSection.querySelectorAll('section-feature-list-item li')];
    listItems.forEach((item) => item.classList.remove('active'));

    this.querySelector('li').classList.add('active');

    if (parentSection) {
      const video = parentSection.querySelector('section-video');
      video.setAttribute('data-src', this.getAttribute('data-video'));
    } else {
      throw new Error('Parent not found');
    }
  }
  connectedCallback() {
    this.innerHTML = `
    <li class="${this.getAttribute('child-class') || ''}">
      <check-icon child-class="hidden w-4 h-4 mr-2 lg:block"></check-icon>
      <span>${this.getAttribute('data-title')}</span>
    </li>
    `;
    this.addEventListener('click', this.onClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.onClick);
  }
}

if (!window.customElements.get('section-feature-list-item')) {
  window.SectionFeatureListItem = SectionFeatureListItem;
  window.customElements.define('section-feature-list-item', SectionFeatureListItem);
}
