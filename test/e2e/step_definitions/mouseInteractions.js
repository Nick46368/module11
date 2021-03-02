const { When } = require('cucumber');
const { browser } = require('protractor');
const { expect } = require('chai');

When('I click changeLanguageRU', async () => {
    const element = $('nav.about-menu li:nth-child(1) a.langs-item');
    await element.click();
});

When('I click on the registration button', async () => {
    const element = $('#show-window-registration');
    await element.click();
});

When('I close the registration form', async () => {
    const element = $('.window-header button');
    await element.click();
});
