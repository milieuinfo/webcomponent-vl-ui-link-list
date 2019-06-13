import {NativeVlElement} from "/node_modules/vl-ui-core/vl-core.js";

export class VlLinkList extends NativeVlElement(HTMLUListElement) {
  connectedCallback() {
    this.classList.add("vl-link-list")
  }

  static get _observedClassAttributes() {
    return ["small", "inline", "bordered"]
  }

  get _classPrefix() {
    return "vl-link-list--"
  }

  get _stylePath() {
    return "../style.css"
  }
};

export class VlLinkListItem extends NativeVlElement(HTMLLIElement) {
  connectedCallback() {
    this.classList.add("vl-link-list__item");
    this._links.forEach(link => {
      link.insertAdjacentHTML("afterBegin",
          '<span class="vl-icon vl-icon--before vl-vi vl-vi-nav-right"></span>')
    })
  }

  get _stylePath() {
    return "../style.css"
  }

  get _links() {
    return this.querySelectorAll("[is='vl-link']")
  }
};
customElements.define("vl-link-list", VlLinkList,
    {extends: "ul"});
customElements.define("vl-link-list-item", VlLinkListItem,
    {extends: "li"});