const {VlElement} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;

class VlLinkList extends VlElement {
  async getListItems() {
    return this.findElements(By.css('[is="vl-link-list-item"]'));
  }
  async getListItem(index) {
    const listItems = await this.getListItems();
    return new VlLinkListItem(this.driver, listItems[index]);
  }
}

class VlLinkListItem extends VlElement {
}

module.exports = VlLinkList;
