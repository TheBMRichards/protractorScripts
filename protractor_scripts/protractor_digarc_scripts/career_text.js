describe('Visits digarc website and searches for ASSOCIATE', function() {
  it('Testing Career hyperlink and Keyword textbox are properly working', function() {
    browser.waitForAngularEnabled(false)
    var careerLink = element(by.linkText('Careers'));
    var digarcUrl = browser.get('https://www.digarc.com/');
    var keyWordTextBox = element(by.id('search_keywords'));
    var searchJobButton = element(by.className('search_submit'));
    var jobListing = element(by.className('job_listings'));

    // Visits digarc website
    digarcUrl;

    // Scrolls down to element
    browser.actions().mouseMove(careerLink).perform();

    // Verify text and URL are correct and displayed
    expect(careerLink.isDisplayed()).toBe(true);
    careerLink.getText().click().then(function() {
      // Checks for Keyword textbox is displayed and url is correct
      expect(keyWordTextBox.isDisplayed()).toBe(true);
      expect(browser.getCurrentUrl()).toEqual('https://www.digarc.com/careers/');
    });

    // Enters ASSOCIATE into textbox and checks that it was entered correctly
    browser.actions().mouseMove(keyWordTextBox).perform();
    keyWordTextBox.click().sendKeys('ASSOCIATE').then(function() {
      expect(element(by.cssContainingText(keyWordTextBox, 'ASSOCIATE')));
    });

    // Checks for Search Job button then clicks once it is displayed
    browser.actions().mouseMove(searchJobButton).perform();
    expect(searchJobButton.isDisplayed()).toBe(true);
    searchJobButton.click().then(function() {
        // Checks joblisting is displayed after search
        browser.actions().mouseMove(jobListing).perform();
        expect(jobListing.isDisplayed()).toBe(true);
    });

    // Closes browser
    browser.driver.close();
  });
});
