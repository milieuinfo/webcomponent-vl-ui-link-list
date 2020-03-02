const VlLinkList = require('../components/vl-link-list');
const { Page, Config } = require('vl-ui-core').Test;

class VlLinkListPage extends Page {
    async _getLinkList(selector) {
        return new VlLinkList(this.driver, selector);
    }

    async getLinkList() {
        return this._getLinkList('#link-list');
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-link-list.html');
    }
}

module.exports = VlLinkListPage;
