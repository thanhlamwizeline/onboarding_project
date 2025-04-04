const { faker } = require('@faker-js/faker');
const obituaryDetailsPage = require('./pageObject/ObituaryDetailsPage');

Feature('Onboarding');

Scenario('Check obituary details for Virginia Gruchalski', () => {  
    const url = '/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379';
    const title = 'Virginia Grace Gruchalski';
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();

    obituaryDetailsPage.goToPage(url);
    obituaryDetailsPage.verifyTitleVisible(title);
    obituaryDetailsPage.fillGuestBookMessage(randomName, randomEmail);
    obituaryDetailsPage.submitForm();
    obituaryDetailsPage.verifySuccessMessageVisible();
});
