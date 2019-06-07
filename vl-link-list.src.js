import {NativeVlElement} from "/node_modules/vl-ui-core/vl-core.js";

export class VlLinkList extends NativeVlElement(HTMLUListElement) {
  connectedCallback() {
    this.classList.add("vl-link-list");
  }

  static get _observedClassAttributes() {
    return ['small','inline','bordered'];
  }

  get _classPrefix(){
    return 'vl-link-list--';
  }

  get _stylePath() {
    return "../style.css";
  }
}

export class VlLinkListItem extends NativeVlElement(HTMLLIElement) {
  connectedCallback() {
    this.classList.add("vl-link-list__item");
  }

  get _stylePath() {
    return "../style.css";
  }
}
customElements.define("vl-link-list", VlLinkList,
    {extends: "ul"});
customElements.define("vl-link-list-item",
    VlLinkListItem, {extends: "li"});