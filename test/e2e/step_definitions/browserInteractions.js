const { When } = require('cucumber');
const { browser } = require('protractor');
const { expect } = require('chai');

When('I open {string}', async (url) => {
    await browser.get(`${url}`);
});

When('I wait until pageHeader is displayed', async () => {
    const element = await $('img[alt=\"TITLE\"]');
    expect(element).is.not.empty;
});

When('I wait until textFromAddressOfTheShops is displayed', async () => {
    const element = await $('a.go-to-map');
    expect(element).is.not.empty;
});

When('Text of {string} should contain {string}', async (itemName, itemText) => {
    const ongoingElement = await $('a.go-to-map').getText();
    expect(ongoingElement).to.equal(itemText);
});

When('I wait {int} seconds', async (sec) => {
    await browser.sleep(sec*1000);
});

When('{string} should be displayed on the website', async (StuffName) => {
    const searchBox = $('.input #title-search-input');
    await searchBox.click();
    searchBox.clear().sendKeys(StuffName);
    const searchButton = $('.input input[type=submit]');
    await searchButton.click();
    await browser.sleep(2000)
});
