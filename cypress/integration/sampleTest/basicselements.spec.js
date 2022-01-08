import elementsObjects from "../../pageobjects/elementstab/elementsobject"

const Form_URL = '/elements/'
let elementsobjects = new elementsObjects()

describe('Elements tab test suite', function() {
  before( function() {
    cy.visit(Form_URL)
    cy.url().should('eq', Cypress.config().baseUrl + Form_URL)
  })

  it('This will test text boxes', function() {
    cy.visit('/text-box/')
    cy.readFile('cypress/fixtures/testData.json').then((inputData) =>{
        elementsobjects.txtFullName().type(inputData.basicsTextBox['name'])
        elementsobjects.txtEmail().type(inputData.basicsTextBox['email'])
        elementsobjects.txtCurrentAddress().type(inputData.basicsTextBox['currentAddress'])
        elementsobjects.txtPermanentAddress().type(inputData.basicsTextBox['permanentAddress'])
        elementsobjects.btnSubmit().click()

        elementsobjects.lblResultName().should('contain', inputData.basicsTextBox['name'])
        elementsobjects.lblResultEmail().should('contain', inputData.basicsTextBox['email'])
        elementsobjects.lblResultCurrentAddress().should('contain', inputData.basicsTextBox['currentAddress'])
        elementsobjects.lblResultPermanentAddress().should('contain', inputData.basicsTextBox['permanentAddress'])
    })
    
  })

  it('This will test checkbox', function() {
    cy.visit('/checkbox/')
    elementsobjects.cbHome().click()
    elementsobjects.lblCbResult().children().should('contain', 'home')
  })

  it('This will test radio buttons', function() {
    cy.visit('/radio-button/')
    elementsobjects.rbYes().check({force: true})
    elementsobjects.lblRbResult().should('contain', 'Yes')
    elementsobjects.rbImpressive().check({force: true})
    elementsobjects.lblRbResult().should('contain', 'Impressive')
  })

  it('This will test webtables', function() {
    cy.visit('/webtables/')
    elementsobjects.btnAddNewRecord().click()
    elementsobjects.mdlHeader().should('be.visible')
    cy.readFile('cypress/fixtures/testData.json').then((inputData) =>{
    elementsobjects.tblTextFirstName().type(inputData.basicsWebTable['firstName'])
    elementsobjects.tblTextLastName().type(inputData.basicsWebTable['lastName'])
    elementsobjects.tblTextEmail().type(inputData.basicsWebTable['email'])
    elementsobjects.tblTextAge().type(inputData.basicsWebTable['age'])
    elementsobjects.tblTextSalary().type(inputData.basicsWebTable['salary'])
    elementsobjects.tblTextDepartment().type(inputData.basicsWebTable['department'])
    elementsobjects.btnSubmit().click()
    elementsobjects.tblTxtSearch().type(inputData.basicsWebTable['firstName'])
    })
  })


})
