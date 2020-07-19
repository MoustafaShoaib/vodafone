describe('testing cart with one mobile item with one year subscription', function () {
    beforeEach(() => {
        cy.clearCookies()
        cy.fetchItem();
    })
    describe('get New sim card', function () {
        describe('package M Happy Flows', function () {
            it('get private line with Valid Driving License-basic insurance', function () {
                cy.oneYearContract();
                cy.toOrder();
                cy.requestNewPhoneNumber();
                cy.makeAchoiceProceedButton();
                cy.guaranteeBasicInsurance();
                cy.additionalOptionsProceedButton();
                cy.selectPrivateCustomer();
                cy.get('#cart > div.basket').contains('Start M 1 jaar')
                cy.get('#cart > div.basket').contains('Toestelbetaling 1 jaar')
                cy.get('#cart > div.basket').contains('Garant Basis verzekering')
                cy.selectSir();
                cy.fixture('testData').then((usersData) => {
                    cy.enterInitials(usersData.initials);
                    cy.enterMidName(usersData.midname);
                    cy.enterLastName(usersData.lastname);
                    cy.enterZipCode(usersData.zipCode);
                    cy.enterHourseNumber(usersData.houseNumber);
                    cy.enterHourseExtraDetails(usersData.houseExtraDetails);
                    cy.enterContractPhoneNumber(usersData.contractPhoneNumber);
                    cy.enterBirthDate(usersData.birthDate);
                    cy.enterEmail(usersData.email);
                    cy.validateByDrivingLicense(usersData.identificationNumber, usersData.identificationValidUntil);
                    cy.enterPaymentDetails(usersData.accountNumber, usersData.accountHolderName)
                })
                cy.simTypeProceedButton();
                cy.selectSimCard();
                cy.overviewProceedButton();
            });
            it('get private line with Valid Driving License-top insurance', function () {
                cy.oneYearContract();
                cy.toOrder();
                cy.requestNewPhoneNumber();
                cy.makeAchoiceProceedButton();
                cy.guaranteeTopInsurance();
                cy.additionalOptionsProceedButton();
                cy.selectPrivateCustomer();
                cy.get('#cart > div.basket').contains('Start M 1 jaar')
                cy.get('#cart > div.basket').contains('Garant Top verzekering')
                cy.selectSir();
                cy.fixture('testData').then((usersData) => {
                    cy.enterInitials(usersData.initials);
                    cy.enterMidName(usersData.midname);
                    cy.enterLastName(usersData.lastname);
                    cy.enterZipCode(usersData.zipCode);
                    cy.enterHourseNumber(usersData.houseNumber);
                    cy.enterHourseExtraDetails(usersData.houseExtraDetails);
                    cy.enterContractPhoneNumber(usersData.contractPhoneNumber);
                    cy.enterBirthDate(usersData.birthDate);
                    cy.enterEmail(usersData.email);
                    cy.validateByDrivingLicense(usersData.identificationNumber, usersData.identificationValidUntil);
                    cy.enterPaymentDetails(usersData.accountNumber, usersData.accountHolderName)
                })
                cy.simTypeProceedButton();
                cy.selectSimCard();
                cy.overviewProceedButton();
            })
        })
        describe('package M unhappy Flows', function () {

            it('check error with invalid Driving License-basic insurance', function () {
                cy.oneYearContract();
                cy.toOrder();
                cy.requestNewPhoneNumber();
                cy.makeAchoiceProceedButton();
                cy.guaranteeBasicInsurance();
                cy.additionalOptionsProceedButton();
                cy.selectPrivateCustomer();
                cy.get('#cart > div.basket').contains('Start M 1 jaar')
                cy.get('#cart > div.basket').contains('Toestelbetaling 1 jaar')
                cy.get('#cart > div.basket').contains('Garant Basis verzekering')
                cy.selectSir();
                cy.fixture('testData').then((usersData) => {
                    cy.enterInitials(usersData.initials);
                    cy.enterMidName(usersData.midname);
                    cy.enterLastName(usersData.lastname);
                    cy.enterZipCode(usersData.zipCode);
                    cy.enterHourseNumber(usersData.houseNumber);
                    cy.enterHourseExtraDetails(usersData.houseExtraDetails);
                    cy.enterContractPhoneNumber(usersData.contractPhoneNumber);
                    cy.enterBirthDate(usersData.birthDate);
                    cy.enterEmail(usersData.email);
                    cy.validateByDrivingLicense(usersData.InvalidIdentificationNumber, usersData.identificationValidUntil);
                    cy.get('#app > div.container.mt-4 > div > div.col-lg-8 > form > fieldset.active > div > div:nth-child(2) > div > div > div.form-group.col-md-6.is-invalid > span').contains('Nummer legitimatiebewijs formaat is ongeldi');
                    cy.enterPaymentDetails(usersData.accountNumber, usersData.accountHolderName)
                })
                cy.simTypeProceedButton();
                cy.selectSimCard();
                cy.overviewProceedButton();
            });

        })
    });
});