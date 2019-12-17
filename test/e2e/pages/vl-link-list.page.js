const VlLinkList = require('../components/vl-link-list');
const { Page } = require('vl-ui-core');
const { Config } = require('vl-ui-core');

class VlLinkListPage extends Page {
    async _getLinkList(selector) {
        return new VlLinkList(this.driver, selector);
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-link-list.html');
    }
}

module.exports = VlLinkListPage;
