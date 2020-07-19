import orderPage from '../pageObject/orderPage'


Cypress.Commands.add("fetchItem", () => {
    cy.visit('https://directsales.vodafone.nl/shop');
    cy.get('#offers > div:nth-child(1) > div > div > div.offer-image > div > div:nth-child(3)').click();
    cy.get('#offers > div:nth-child(1) > div > div > a').should('be.visible').click();
    cy.title().should('eq', 'Apple iPhone 11 64 GB | Vodafone')
    cy.location('protocol').should('eq', 'https:');
});

Cypress.Commands.add("oneYearContract", () => {
    cy.get('#app > div.container > div > div.col-lg-8 > form > div.commitments.my-3 > label:nth-child(1) > span').click();
    cy.get('#start_m12 > div.radio').click();
});

Cypress.Commands.add("toOrder", () => {
    cy.get('#app > div.container > div > div.col-lg-8 > form > div.my-3.btn-toolbar.justify-content-between > a').click();
});

Cypress.Commands.add("requestNewPhoneNumber", () => {
    cy.get('#app > div.container.mt-4 > div > div.col-lg-8 > form > fieldset.active > div > div.row > div:nth-child(1)').click();
});

Cypress.Commands.add("makeAchoiceProceedButton", () => {
    cy.get('button').contains('Volgende').click();
});

Cypress.Commands.add("guaranteeBasicInsurance", () => {
    cy.get('#app > div.container.mt-4 > div > div.col-lg-8 > form > fieldset.active > div > div:nth-child(1) > div > div:nth-child(1) > div.col-md-11.col-10 > h5 > label').click();
});

Cypress.Commands.add("guaranteeTopInsurance", () => {
    cy.get('#app > div.container.mt-4 > div > div.col-lg-8 > form > fieldset.active > div > div:nth-child(1) > div > div:nth-child(2) > div.col-md-11.col-10 > h5 > label').click();
});

Cypress.Commands.add("additionalOptionsProceedButton", () => {
    cy.get('#app > div.container.mt-4 > div > div.col-lg-8 > form > fieldset.active > div > div.row.button-row > div > button.btn.btn-primary.btn-lg').click();
});

Cypress.Commands.add("selectPrivateCustomer", () => {
    cy.get('#app > div.container.mt-4 > div > div.col-lg-8 > form > fieldset.active > div > div:nth-child(1) > div > div:nth-child(1) > div > div > label:nth-child(1) > span').click();
});

Cypress.Commands.add("selectSir", () => {
    cy.get('#app > div.container.mt-4 > div > div.col-lg-8 > form > fieldset.active > div > div:nth-child(1) > div > div:nth-child(2) > div > div > label:nth-child(1)').click();
});

Cypress.Commands.add("enterInitials", (intials) => {
    cy.get('#firstname').clear();
    cy.get('#firstname').type(intials);
});

Cypress.Commands.add("enterMidName", (midname) => {
    cy.get('#middlename').clear();
    cy.get('#middlename').type(midname);
});

Cypress.Commands.add("enterLastName", (lastname) => {
    cy.get('#lastname').clear();
    cy.get('#lastname').type(lastname);
});
Cypress.Commands.add("enterZipCode", (ZipcCode) => {
    cy.get('#postalCode').clear();
    cy.get('#postalCode').type(ZipcCode);
});

Cypress.Commands.add("enterHourseNumber", (HouseNo) => {
    cy.get('#houseNumber').clear();
    cy.get('#houseNumber').type(HouseNo);
});

Cypress.Commands.add("enterHourseExtraDetails", (HouseDetails) => {
    cy.get('#houseNumberExtra').clear();
    cy.get('#houseNumberExtra').type(HouseDetails);
});

Cypress.Commands.add("streetName", (streetName) => {
    cy.get('#street').type.should('eq', streetName);
});

Cypress.Commands.add("City", (City) => {
    cy.get('#city').type.should('eq', City);
});

Cypress.Commands.add("enterContractPhoneNumber", (phoneNumber) => {
    cy.get('#contactPhone').clear();
    cy.get('#contactPhone').type(phoneNumber);
});

Cypress.Commands.add("enterBirthDate", (birthDate) => {
    cy.get('#birthdate').clear();
    cy.get('#birthdate').type(birthDate);
});

Cypress.Commands.add("enterEmail", (Email) => {
    cy.get('#email').clear();
    cy.get('#email').type(Email);
});

Cypress.Commands.add("validateByDrivingLicense", (identificationNumber, identificationValidUntil) => {
    cy.get('#app > div.container.mt-4 > div > div.col-lg-8 > form > fieldset.active > div > div:nth-child(2) > div > div > div:nth-child(2) > div').click();
    cy.get('#app > div.container.mt-4 > div > div.col-lg-8 > form > fieldset.active > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div:nth-child(2) > a').click();
    cy.get('#identificationNumber').clear();
    cy.get('#identificationNumber').type(identificationNumber);
    cy.get('#identificationValidUntil').clear();
    cy.get('#identificationValidUntil').type(identificationValidUntil);
});

Cypress.Commands.add("enterPaymentDetails", (accountNumber, accountHolderName) => {
    cy.get('#accountNumber').clear();
    cy.get('#accountNumber').type(accountNumber);
    cy.get('#accountHolderName').clear();
    cy.get('#accountHolderName').type(accountHolderName);
});

Cypress.Commands.add("simTypeProceedButton", () => {
    cy.get('#app > div.container.mt-4 > div > div.col-lg-8 > form > fieldset.active > div > div.row.button-row > div > button.btn.btn-primary.btn-lg').click();
});

Cypress.Commands.add("selectSimCard", () => {
    cy.get('#app > div.container.mt-4 > div > div.col-lg-8 > form > fieldset.active > div > div:nth-child(1) > div > div.form-row.radio > div:nth-child(1) > label').click();
});

Cypress.Commands.add("selectE-SimCard", () => {
    cy.get('#app > div.container.mt-4 > div > div.col-lg-8 > form > fieldset.active > div > div:nth-child(1) > div > div.form-row.radio > div:nth-child(2) > label > span').click();
});

Cypress.Commands.add("overviewProceedButton", () => {
    cy.get('#app > div.container.mt-4 > div > div.col-lg-8 > form > fieldset.active > div > div.row.button-row > div > button.btn.btn-primary.btn-lg').click();
});



