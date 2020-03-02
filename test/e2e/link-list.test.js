
const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlLinkListPage = require('./pages/vl-link-list.page');

describe('vl-link-list', async () => {
    const vlLinkListPage = new VlLinkListPage(driver);

    before(() => {
        return vlLinkListPage.load();
    });

    it ("Als gebruiker zie ik het juiste aantal list items voor een linked list", async() => {
        const linkList = await vlLinkListPage.getLinkList();
        const aantalListItems = await linkList.getListItems();
        await assert.equal(aantalListItems.length, 2);
    });
});
