const { VlElement } = require('vl-ui-core').Test;
const { VlLink } = require('vl-ui-link').Test;
const { By } = require('selenium-webdriver');

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
    
    async getLink() {
        return new VlLink(this.driver, await this.findElement(By.css('[is="vl-link"]')));
    }

}
module.exports = VlLinkList;
