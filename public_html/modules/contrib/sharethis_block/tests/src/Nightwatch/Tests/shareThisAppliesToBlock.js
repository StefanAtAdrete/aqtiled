module.exports = {
  '@tags': ['sharethis_block'],
  before(browser) {
    browser.drupalInstall({
      setupFile: __dirname + '/../SiteInstallSetupScript.php',
      installProfile: 'minimal',
    });
  },
  after(browser) {
    browser.drupalUninstall();
  },
  'Confirm inline ShareThis block shows': browser => {
    browser
      .drupalRelativeURL('/')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('.sharethis-inline-share-buttons', 5000)
      .expect.element('.st-btn.st-first').to.be.present
    browser
      .expect.elements('.sharethis-inline-share-buttons > div').count.to.equal(6)
    browser
      .drupalLogAndEnd({ onlyOnError: false });
  },
};
