export default class bookObjects{
   
    //BookStore
    txtSearchBook(){
        return cy.xpath('//input[@id=\'searchBox\']')
    }

    btnBookLogin(){
        return cy.xpath('//button[@id=\'login\']')
    }

    lblIsbn(){
        return cy.xpath('//div[@id=\'ISBN-wrapper\']//label[@id=\'userName-value\']')
    }

    lblTitle(){
        return cy.xpath('//div[@id=\'title-wrapper\']//label[@id=\'userName-value\']')
    }

    lblSubtitle(){
        return cy.xpath('//div[@id=\'subtitle-wrapper\']//label[@id=\'userName-value\']')
    }

    lblAuthor(){
        return cy.xpath('//div[@id=\'author-wrapper\']//label[@id=\'userName-value\']')
    }

    lblPublisher(){
        return cy.xpath('//div[@id=\'publisher-wrapper\']//label[@id=\'userName-value\']')
    }

    lblPages(){
        return cy.xpath('//div[@id=\'pages-wrapper\']//label[@id=\'userName-value\']')
    }

    lblDescription(){
        return cy.xpath('//div[@id=\'description-wrapper\']//label[@id=\'userName-value\']')
    }

    //Login
    btnLogin(){
        return cy.xpath('//button[@id=\'login\']')
    }

    btnNewUser(){
        return cy.xpath('//button[@id=\'newUser\']')
    }

    pageRegister(){
        return cy.xpath('//h4[normalize-space()=\'Register to Book Store\']')
    }

    txtFirstName(){
        return cy.xpath('//input[@id=\'firstname\']')
    }

    txtLastName(){
        return cy.xpath('//input[@id=\'lastname\']')
    }

    txtUserName(){
        return cy.xpath('//input[@id=\'userName\']')
    }

    txtPassword(){
        return cy.xpath('//input[@id=\'password\']')
    }

    lbluser(){
        return cy.xpath('//label[@id=\'userName-value\']')
    }

    btnAddbookToUser(){
        return cy.xpath('//div[@class=\'text-right fullButton\']//button[@id=\'addNewRecordButton\']')
    }

    btnbackToBookStore(){
        return cy.xpath('//div[@class=\'text-left fullButton\']//button[@id=\'addNewRecordButton\']')
    }

    btnGoToStore(){
        return cy.xpath('//button[@id=\'gotoStore\']')
    }

    btnLogout(){
        return cy.xpath('//button[@id=\'submit\']')
    }

    btnLogout2(){
        return cy.xpath('(//button[normalize-space()=\'Log out\'])[1]')
    }

    lblLoginPage(){
        return cy.xpath('//h5[normalize-space()=\'Login in Book Store\']')
    }

    btnDeleteAllBook(){
        return cy.xpath('//div[@class=\'text-right button di\']//button[@id=\'submit\']')
    }

    modalOk(){
        return cy.xpath('//button[@id=\'closeSmallModal-ok\']')
    }
}