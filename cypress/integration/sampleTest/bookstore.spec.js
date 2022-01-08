import bookObjects from "../../pageobjects/books/bookobjects"

const Form_URL = '/books/'
let booksObjects = new bookObjects()

describe('Book Store Test Suite', function() {
  before( function() {
    cy.visit(Form_URL)
    cy.url().should('eq', Cypress.config().baseUrl + Form_URL)
  })

  it('This will test searching of books', function() {
        cy.visit(Form_URL)
        booksObjects.txtSearchBook().type('Git Pocket Guide')
        cy.get('.ReactTable')
        .children()
        .contains('Git Pocket Guide')
        .should('be.visible')
  })

  it('This will validate the searched book', function() {
        cy.visit(Form_URL)
        booksObjects.txtSearchBook().type('Git Pocket Guide')
        cy.get('.ReactTable')
        .children()
        .contains('Git Pocket Guide')
        .click()
    cy.readFile('cypress/fixtures/testData.json').then((bookData) =>{
        booksObjects.lblIsbn().should('contain', bookData.booksData['ISBN'])
        booksObjects.lblTitle().should('contain', bookData.booksData['title'])
        booksObjects.lblSubtitle().should('contain', bookData.booksData['subtitle'])
        booksObjects.lblAuthor().should('contain', bookData.booksData['author'])
        booksObjects.lblPublisher().should('contain', bookData.booksData['publisher'])
        booksObjects.lblPages().should('contain', bookData.booksData['totalPages'])
        booksObjects.lblDescription().should('contain', bookData.booksData['description'])
    })

  })

  it('This will login existing book user', function() {
    cy.visit(Form_URL)
    booksObjects.txtSearchBook().type('Git Pocket Guide')
    booksObjects.btnBookLogin().click()
    booksObjects.txtUserName().type('toolsqa.allen')
    booksObjects.txtPassword().type('P@ssw0rd')
    booksObjects.btnBookLogin().click()
    booksObjects.lbluser().should('contain', 'toolsqa.allen')
  })

  it('This will add book to user', function() {
    cy.visit(Form_URL)
    booksObjects.btnBookLogin().click()
    booksObjects.txtUserName().type('toolsqa.allen')
    booksObjects.txtPassword().type('P@ssw0rd')
    booksObjects.btnBookLogin().click()
    booksObjects.lbluser().should('contain', 'toolsqa.allen')
    cy.visit('/profile/')
    booksObjects.btnGoToStore().scrollIntoView().click()
    booksObjects.txtSearchBook().type('Git Pocket Guide')
        cy.get('.ReactTable')
        .children()
        .contains('Git Pocket Guide')
        .click()
    booksObjects.btnAddbookToUser().click()
    cy.on('window:alert', alertText =>{
        expect(alertText).to.eql('Book added to your collection.')
    })
    booksObjects.btnbackToBookStore().click()
    booksObjects.btnLogout().click()
    booksObjects.lblLoginPage().should('be.visible')
  })

  it.only('This will delete all books of user', function() {
    cy.visit(Form_URL)
    booksObjects.btnBookLogin().click()
    booksObjects.txtUserName().type('toolsqa.allen')
    booksObjects.txtPassword().type('P@ssw0rd')
    booksObjects.btnBookLogin().click()
    cy.wait(5000)
    cy.visit('/profile/')
    booksObjects.lbluser().should('contain', 'toolsqa.allen')
    booksObjects.btnDeleteAllBook().scrollIntoView().click()
    booksObjects.modalOk().click()
    cy.on('window:alert', alertText =>{
        expect(alertText).to.eql('All Books deleted.')
    })
    cy.wait(300)
    booksObjects.btnLogout2().click()
  })

})
