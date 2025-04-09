const { faker } = require('@faker-js/faker');
const obituaryDetailsPage = require('./pageObject/ObituaryDetailsPage');

Feature('Onboarding');

Scenario('Integrate real obituary in DB', async ({ I }) => {
    const person = await I.getJanusPersonRecord();
    console.log('Get person from DB:', person);

    const url = `/us/obituaries/${person.Source}/name/${person.LastName}-${person.FirstName}-obituary?pid=${person.PersonId}`;
    const fullName = `${person.FirstName} ${person.MiddleName} ${person.LastName}`;
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();

    obituaryDetailsPage.goToPage(url);
    obituaryDetailsPage.verifyTitleVisible(fullName);
    obituaryDetailsPage.fillGuestBookMessage(randomName, randomEmail);
    obituaryDetailsPage.submitForm();
    obituaryDetailsPage.verifySuccessMessageVisible();
});
