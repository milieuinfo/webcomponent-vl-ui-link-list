
const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlLinkListPage = require('./pages/vl-link-list.page');

describe('vl-link-list', async () => {
    const vlLinkListPage = new VlLinkListPage(driver);

    before(() => {
        return vlLinkListPage.load();
    });

    it("Dummy test om de browsers te sluiten", () => {
    	assert.isTrue(true);
    });
});
